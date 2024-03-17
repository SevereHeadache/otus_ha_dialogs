<?php

use Klein\Request;
use Klein\Response;

require __DIR__.'/../bootstrap.php';

$klein = new \Klein\Klein();

$versions = [
    'v1',
    'v2',
];

$getController = function (Request $request, Response $response) use ($versions) {
    $version = $request->headers()->get('hadialogs-version', end($versions));
    if (!in_array($version, $versions)) {
        return $response->json([
            'code' => 500,
            'message' => 'Unsupported version',
        ]);
    }

    return 'SevereHeadache\\OtusHaDialogs\\Controllers\\ApiController'.ucfirst($version);
};

/**
 * @todo Make controllers factory
 */
$callController = function ($controller, ...$args) {
    try {
        [$class, $method] = explode('::', $controller);
        $controllerInstance = new $class();
        return $controllerInstance->$method(...$args);
    } catch (SevereHeadache\OtusHaDialogs\Controllers\Exceptions\JsonException $e) {
        return $args[1]->json($e->toArray());
    } catch (SevereHeadache\OtusHaDialogs\Repositories\Exceptions\RepositoryException $e) {
        SevereHeadache\OtusHaDialogs\Helpers\Logger::logError($e);
        return $args[1]->json([
            'code' => 500,
            'message' => $e->getMessage(),
        ]);
    } catch (Throwable $e) {
        SevereHeadache\OtusHaDialogs\Helpers\Logger::logError($e);
        return $args[1]->json([
            'code' => 500,
            'message' => 'Unspecified server error',
        ]);
    }
};

$klein->respond('POST', '/api/send', function (...$args) use ($getController, $callController) {
    $controller = $getController($args[0], $args[1]);

    return $callController("$controller::send", ...$args);
});

$klein->respond('GET', '/api/list/[:user_id]/[:with_id]', function (...$args) use ($getController, $callController) {
    $controller = $getController($args[0], $args[1]);

    return $callController("$controller::list", ...$args);
});

$klein->respond('POST', '/api/markAsRead/[:user_id]', function (...$args) use ($getController, $callController) {
    $controller = $getController($args[0], $args[1]);

    return $callController("$controller::markAsRead", ...$args);
});

$klein->dispatch();
