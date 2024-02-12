<?php

namespace SevereHeadache\OtusHaDialogs\Repositories\Database;

use SevereHeadache\OtusHaDialogs\Models\Dialog;

/**
 * Class for work with post repository.
 * 
 * @todo make interface repository
 */
class DialogRepository extends AbstractRepository
{
    protected static $tableName = 'dialogs';
    protected static $idField = 'id';
    protected static $class = Dialog::class;

    public function store(Dialog $dialog): Dialog
    {
        return $this->storeModel($dialog);
    }

    public function get(string $id): Dialog
    {
        return parent::get($id);
    }

    public function find(array $where, array $params = []): ?Dialog
    {
        return parent::find($where, $params);
    }

    public function delete(Dialog $dialog)
    {
        return parent::deleteModel($dialog);
    }

    protected function isExists(Dialog $dialog): bool
    {
        return $this->isExistsIntoDb($dialog);
    }

    protected function update(Dialog $dialog)
    {
        return $this->updateModel($dialog);
    }
}