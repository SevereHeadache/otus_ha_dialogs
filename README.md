# OTUS Highload Architect - Dialogs
OTUS Highload Architect - Dialogs

## Run project in docker

```
docker-compose up --scale worker=2 -d
```
After citus manager finished loading:
```
docker exec -it otus_ha_dialogs-php-1 vendor/bin/phpmig migrate
```

## Use project with Postman

Postman collection `.postman/otus_ha_dialogs.postman_collection.json`

## Resharding

```
docker-compose up --scale worker=5 -d
docker exec -it otus_ha_dialogs-master-1 psql -U otus otus_ha_dialogs -c "alter system set wal_level = logical;"
docker exec -it otus_ha_dialogs-master-1 psql -U otus otus_ha_dialogs -c "SELECT run_command_on_workers('alter system set wal_level = logical');"
docker compose restart master worker manager
docker exec -it otus_ha_dialogs-master-1 psql -U otus otus_ha_dialogs -c "SELECT citus_rebalance_start();"
```
