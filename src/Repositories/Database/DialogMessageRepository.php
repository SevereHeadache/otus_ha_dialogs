<?php

namespace SevereHeadache\OtusHaDialogs\Repositories\Database;

use SevereHeadache\OtusHaDialogs\Models\DialogMessage;

/**
 * Class for work with post repository.
 * 
 * @todo make interface repository
 */
class DialogMessageRepository extends AbstractRepository
{
    protected static $tableName = 'dialog_messages';
    protected static $idField = 'id';
    protected static $class = DialogMessage::class;

    public function store(DialogMessage $dialogMessage): DialogMessage
    {
        return $this->storeModel($dialogMessage);
    }

    public function get(string $id): DialogMessage
    {
        return parent::get($id);
    }

    public function find(array $where, array $params = []): ?DialogMessage
    {
        return parent::find($where, $params);
    }

    public function delete(DialogMessage $dialogMessage)
    {
        return parent::deleteModel($dialogMessage);
    }

    protected function isExists(DialogMessage $dialogMessage): bool
    {
        return $this->isExistsIntoDb($dialogMessage);
    }

    protected function update(DialogMessage $dialogMessage)
    {
        return $this->updateModel($dialogMessage);
    }
}