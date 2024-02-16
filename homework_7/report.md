### Применение tarantool'а как хранилища

Модуль диалогов ([микросервис](https://github.com/SevereHeadache/otus_ha_dialogs)) поддерживает хранение как на PostgreSQL (APIv1), так и на tarantool (APIv2)
Для взаимодействия с tarantool'ом используются [lua функции](https://github.com/SevereHeadache/otus_ha_dialogs/blob/main/database/tarantool/app.lua)
##### PostgreSQL
Было проведено нагрузочное тестирование [PostgreSQL](https://github.com/SevereHeadache/otus_ha_dialogs/tree/main/homework_7/stress1) и [tarantool](https://github.com/SevereHeadache/otus_ha_dialogs/tree/main/homework_7/stress2). Результаты:
**PostgreSQL**:
![postgres-stats](./images/stats1.png 'postgres-stats')
**tarantool**:
![tarantool-stats](./images/stats2.png 'tarantool-stats')
Итоги:
В результате переноса хранилища на In-Memory СУБД удалось заметно сократить время ответа сервера.
