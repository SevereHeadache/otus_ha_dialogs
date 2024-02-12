<?php

namespace SevereHeadache\OtusHaDialogs\Controllers;

use Klein\Response;
use Klein\Request;
use Ramsey\Uuid\Rfc4122\UuidV4;
use SevereHeadache\OtusHaDialogs\Controllers\Exceptions\IncorectRequestException;
use SevereHeadache\OtusHaDialogs\Models\Dialog;
use SevereHeadache\OtusHaDialogs\Models\DialogMessage;
use SevereHeadache\OtusHaDialogs\Repositories\Database\DialogMessageRepository;
use SevereHeadache\OtusHaDialogs\Repositories\Database\DialogRepository;
use SevereHeadache\OtusHaDialogs\Repositories\Exceptions\RepositoryException;

class ApiControllerV1
{
    /**
     * @todo Wrap in transaction
     */
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

        $dialogRepository = new DialogRepository();
        try {
            $dialog = $dialogRepository->find(
                ['user1 = :from AND user2 = :to OR user1 = :to AND user2 = :from'],
                [
                    ':from' => $attributes['from'],
                    ':to' => $attributes['to'],
                ],
            );
        } catch (RepositoryException $e) {
            throw new IncorectRequestException($e->getMessage(), 400);
        }
        if (is_null($dialog)) {
            $dialog = new Dialog();
            $dialog->id = UuidV4::uuid4();
            $dialog->user1 = $attributes['from'];
            $dialog->user2 = $attributes['to'];
            try{
                $dialogRepository->store($dialog);
            } catch(RepositoryException $e) {
                throw new IncorectRequestException($e->getMessage(), 400);
            }
        }

        $dialogMessage = new DialogMessage();
        $dialogMessage->id = UuidV4::uuid4();
        $dialogMessage->dialogId = $dialog->id;
        $dialogMessage->text = $attributes['text'];
        $dialogMessage->from = $attributes['from'];
        $dialogMessage->to = $attributes['to'];

        $repository = new DialogMessageRepository();
        try{
            $repository->store($dialogMessage);
        } catch(RepositoryException $e) {
            throw new IncorectRequestException($e->getMessage(), 400);
        }

        return $response->json((object) ['id' => $dialogMessage->id]);
    }

    public function list(Request $request, Response $response)
    {
        $dialogRepository = new DialogRepository();
        try {
            $dialog = $dialogRepository->find(
                ['user1 = :from AND user2 = :to OR user1 = :to AND user2 = :from'],
                [
                    ':from' => $request->paramsNamed()->get('user_id'),
                    ':to' => $request->paramsNamed()->get('with_id'),
                ],
            );
        } catch (RepositoryException $e) {
            throw new IncorectRequestException($e->getMessage(), 400);
        }

        if (!$dialog) {
            return $response->json([]);
        }

        $repository = new DialogMessageRepository();
        try {
            $dialogMessages = $repository->getAll([
                ['dialog_id', '=', $dialog->id],
            ]);
        } catch(RepositoryException $e) {
            throw new IncorectRequestException($e->getMessage(), 404);
        }

        $messages = [];
        foreach ($dialogMessages as $dialogMessage) {
            $messages[] = [
                'from' => $dialogMessage->from,
                'to' => $dialogMessage->to,
                'text' => $dialogMessage->text,
            ];
        }

        return $response->json($messages);
    }
}