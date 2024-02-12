<?php

namespace SevereHeadache\OtusHaDialogs\Models;

class Dialog extends Model
{
    public string $id;
    public string $user1;
    public string $user2;

    public function getIdField(): string
    {
        return 'id';
    }
}