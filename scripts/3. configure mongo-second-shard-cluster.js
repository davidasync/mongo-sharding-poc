// docker container exec -it mongo-second-shard1 /bin/sh
// mongo --host localhost --port 27018

rs.initiate(
  {
      _id: "rnd-second-shard-replica-set",
      members: [
          {_id: 0, host: "mongo-second-shard1:27018"},
          {_id: 1, host: "mongo-second-shard2:27018"},
          {_id: 2, host: "mongo-second-shard3:27018"}
      ]
  }
)