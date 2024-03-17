<?php

namespace SevereHeadache\OtusHaDialogs\Controllers;

use GuzzleHttp\Client as GuzzleHttpClient;
use Klein\Response;
use Klein\Request;
use Ramsey\Uuid\Rfc4122\UuidV4;
use SevereHeadache\OtusHaDialogs\Components\RMQClient;
use SevereHeadache\OtusHaDialogs\Controllers\Exceptions\IncorectRequestException;
use Tarantool\Client\Client;

class ApiControllerV2
{
    public function send(Request $request, Response $response)
    {
        $attributes = $request->paramsPost();
        if ($attributes->isEmpty()) {
            $attributes = json_decode($request->body(), true) ?: [];
        }
        if (empty($attributes['from'])){
            throw new IncorectRequestException('Request must contain sender id', 400);
        }
        if (empty($attributes['to'])){
            throw new IncorectRequestException('Request must contain recipient id', 400);
        }
        if (empty($attributes['text'])){
            throw new IncorectRequestException('Request must contain text', 400);
        }

        $client = Client::fromOptions([
            'uri' => env('DB_HOST_TARANTOOL').':'.env('DB_PORT', 3301),
            'username' => env('DB_USER'),
            'password' => env('DB_PASSWORD'),
        ]);
        $dialog = $client->call('getDialog',
            $attributes['from'],
            $attributes['to'],
        );
        if (!$dialog[0]) {
            $client->call('newDialog',
                $dialogId = UuidV4::uuid4()->__toString(),
                $attributes['from'],
                $attributes['to'],
            );
        } else {
            $dialogId = $dialog[0][0];
        }

        $client->call('newMessage',
            $messageId = UuidV4::uuid4()->__toString(),
            $dialogId,
            $attributes['from'],
            $attributes['to'],
            $attributes['text'],
        );

        $client = new RMQClient();
        $client->push(RMQClient::QUEUE_SEND, [
            'userId' => $attributes['to'],
            'messageId' => $messageId,
        ]);

        return $response->json((object) ['id' => $messageId]);
    }

    public function list(Request $request, Response $response)
    {
        $client = Client::fromOptions([
            'uri' => env('DB_HOST_TARANTOOL').':'.env('DB_PORT', 3301),
            'username' => env('DB_USER'),
            'password' => env('DB_PASSWORD'),
        ]);

        $dialog = $client->call('getDialog',
            $request->paramsNamed()->get('user_id'),
            $request->paramsNamed()->get('with_id'),
        );

        if (!$dialog[0]) {
            return $response->json([]);
        }

        $dialogMessages = $client->call('listMessages', $dialog[0][0]);
        $messages = [];
        foreach ($dialogMessages[0] as $dialogMessage) {
            $messages[] = [
                'from' => $dialogMessage[2],
                'to' => $dialogMessage[3],
                'text' => $dialogMessage[4],
            ];
        }

        return $response->json($messages);
    }

    public function markAsRead(Request $request, Response $response)
    {
        $id = $request->paramsNamed()->get('user_id');
        $client = new GuzzleHttpClient(['base_uri' => env('COUNTERS_URI')]);
        $result = $client->request('POST', "markAsRead/$id");
        $data = json_decode($result->getBody()->getContents(), true);

        return $response->json($data);
    }
}
