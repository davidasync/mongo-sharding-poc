// docker container exec -it mongo-third-shard1 /bin/sh
// mongo --host localhost --port 27018

rs.initiate(
  {
      _id: "rnd-third-shard-replica-set",
      members: [
          {_id: 0, host: "mongo-third-shard1:27018"},
          {_id: 1, host: "mongo-third-shard2:27018"},
          {_id: 2, host: "mongo-third-shard3:27018"}
      ]
  }
)