// docker container exec -it mongo-config-server1 /bin/sh
// mongo --host localhost --port 27019

// docker container exec -it mongo-first-shard1 /bin/sh
// mongo --host localhost --port 27018

// docker container exec -it mongo-second-shard1 /bin/sh
// mongo --host localhost --port 27018

// docker container exec -it mongo-third-shard1 /bin/sh
// mongo --host localhost --port 27018

// docker container exec -it mongo-router /bin/sh
// mongo --host localhost --port 27020

//use traveluka
//db.bookings.find()

// add more shards
sh.addShard("rnd-third-shard-replica-set/mongo-third-shard1:27018,mongo-third-shard2:27018,mongo-third-shard3:27018")

// stop mongo cluster
// docker container stop mongo-third-shard1
// docker container stop mongo-third-shard2
// docker container stop mongo-third-shard3
// docker container start mongo-third-shard1 mongo-third-shard2 mongo-third-shard3