### Swagger url
Swagger Url -> http://localhost:8080/swagger-ui/index.html#/
Sample data -> scripts/sample-booking.json

### Init replication
- docker compose up

### Init sharding
```
docker container exec -it mongo-router /bin/sh
mongo --host localhost --port 27000

sh.addShard("rnd-first-shard-replica-set/mongo-first-shard1:27011,mongo-first-shard2:27012,mongo-first-shard3:27013")
sh.addShard("rnd-second-shard-replica-set/mongo-second-shard1:27021,mongo-second-shard2:27022,mongo-second-shard3:27023")
sh.addShard("rnd-third-shard-replica-set/mongo-third-shard1:27031,mongo-third-shard2:27032,mongo-third-shard3:27033")

sh.enableSharding("mydb")
sh.shardCollection("mydb.bookings", {"userId": "hashed"})
```

### Shortcuts
```
docker container exec -it mongo-config-server1 /bin/sh
mongo --host localhost --port 27001

docker container exec -it mongo-first-shard1 /bin/sh
mongo --host localhost --port 27011

docker container exec -it mongo-second-shard1 /bin/sh
mongo --host localhost --port 27021

docker container exec -it mongo-third-shard1 /bin/sh
mongo --host localhost --port 27031

docker container exec -it mongo-router /bin/sh
mongo --host localhost --port 27000

use mydb
db.bookings.find()

// stop mongo cluster
docker container stop mongo-third-shard1
docker container stop mongo-third-shard2
docker container stop mongo-third-shard3
docker container start mongo-third-shard1 mongo-third-shard2 mongo-third-shard3
```