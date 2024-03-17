box.cfg{}

-- dialogs
box.schema.space.create('dialogs', {if_not_exists = true})
box.space.dialogs:format({
    {name = 'id', type = 'string'},
    {name = 'user1', type = 'string'},
    {name = 'user2', type = 'string'}
})
box.space.dialogs:create_index('primary', {parts = {'id'}, if_not_exists = true})
box.space.dialogs:create_index('users', {parts = {'user1', 'user2'}, if_not_exists = true})

-- dialog_messages
box.schema.space.create('dialog_messages', {if_not_exists = true})
box.space.dialog_messages:format({
    {name = 'id', type = 'string'},
    {name = 'dialog_id', type = 'string'},
    {name = 'from', type = 'string'},
    {name = 'to', type = 'string'},
    {name = 'text', type = 'string'},
    {name = 'created_at', type = 'number'},
    {name = 'state', type = 'number'}
})
box.space.dialog_messages:create_index('primary', {parts = {'id'}, if_not_exists = true})
box.space.dialog_messages:create_index('dialog', {parts = {'dialog_id', 'state'}, unique = false, if_not_exists = true})

-- Get dialog between users
function getDialog(user1, user2)
    dialogs = box.space.dialogs.index.users:select{user1, user2}
    if dialogs[1] == nil then
        dialogs = box.space.dialogs.index.users:select{user2, user1}
    end

    return dialogs[1]
end

-- Create new dialog
function newDialog(id, user1, user2)
    box.space.dialogs:insert{id, user1, user2}
end

-- Create dialog message ("sent" state)
function newMessage(id, dialog_id, from, to, text)
    box.space.dialog_messages:insert{id, dialog_id, from, to, text, os.time(os.date("!*t")), 0}
end

-- Set message state "delivered"
function messageDelivered(id)
    box.space.dialog_messages:update(id, {{'=', 7, 1}})
end

-- Delete message
function deleteMessage(id)
    box.space.dialog_messages:delete(id)
end

-- List dialog messages (and sort)
function listMessages(dialog_id)
    messages = box.space.dialog_messages.index.dialog:select{dialog_id, 1}
    table.sort(messages, function(a, b) 
        return a[6] < b[6]
    end)

    return messages
end
