<?php

use Phpmig\Migration\Migration;

class CreateDialogMessagesTable extends Migration
{
    /**
     * Do the migration
     */
    public function up()
    {
        $sql = "CREATE TABLE dialog_messages (
            id uuid DEFAULT gen_random_uuid(),
            dialog_id uuid,
            \"from\" uuid,
            \"to\" uuid,
            text varchar(255),
            created_at timestamp NOT NULL DEFAULT NOW(),
            PRIMARY KEY(id, dialog_id)
        )";
        $this->getContainer()['db']->query($sql);
        $this->getContainer()['db']->query("SELECT create_distributed_table('dialog_messages', 'dialog_id', colocate_with => 'dialogs')");
    }

    /**
     * Undo the migration
     */
    public function down()
    {
        $sql = "DROP TABLE dialog_messages";
        $container = $this->getContainer(); 
        $container['db']->query($sql);
    }
}
