<?php

use Phpmig\Migration\Migration;

class CreateDialogsTable extends Migration
{
    /**
     * Do the migration
     */
    public function up()
    {
        $sql = "CREATE TABLE dialogs (
            id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
            \"user1\" uuid,
            \"user2\" uuid
        )";
        $this->getContainer()['db']->query($sql);
        $this->getContainer()['db']->query("SELECT create_distributed_table('dialogs', 'id')");
    }

    /**
     * Undo the migration
     */
    public function down()
    {
        $sql = "DROP TABLE dialogs";
        $container = $this->getContainer(); 
        $container['db']->query($sql);
    }
}
