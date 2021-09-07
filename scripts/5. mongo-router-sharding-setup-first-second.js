// docker container exec -it mongo-router /bin/sh
// mongo --host localhost --port 27020

sh.addShard("rnd-first-shard-replica-set/mongo-first-shard1:27018,mongo-first-shard2:27018,mongo-first-shard3:27018")
sh.addShard("rnd-second-shard-replica-set/mongo-second-shard1:27018,mongo-second-shard2:27018,mongo-second-shard3:27018")

sh.enableSharding("traveluka")
sh.shardCollection("traveluka.bookings", {"userId": "hashed"})