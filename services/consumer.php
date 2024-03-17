<?php

require __DIR__.'/../bootstrap.php';

use PhpAmqpLib\Message\AMQPMessage;
use SevereHeadache\OtusHaDialogs\Components\RMQClient;
use Tarantool\Client\Client;

$client = new RMQClient();
$client->pull(RMQClient::QUEUE_RECIEVE, function (AMQPMessage $msg) {
    $body = json_decode($msg->body, true);
    $messageId = $body['messageId'];
    $action = $body['action'];

    $client = Client::fromOptions([
        'uri' => env('DB_HOST_TARANTOOL').':'.env('DB_PORT', 3301),
        'username' => env('DB_USER'),
        'password' => env('DB_PASSWORD'),
    ]);
    if ($action == 'accept') {
        $client->call('messageDelivered', $messageId);
    } elseif ($action == 'reject') {
        $client->call('deleteMessage', $messageId);
    }

    $msg->ack();
});
