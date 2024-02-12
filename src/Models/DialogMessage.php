<?php

namespace SevereHeadache\OtusHaDialogs\Models;

class DialogMessage extends Model
{
    public string $id;
    public string $dialogId;
    public string $from;
    public string $to;
    public string $text;

    public function getIdField(): string
    {
        return 'id';
    }
}