// docker container exec -it mongo-first-shard1 /bin/sh
// mongo --host localhost --port 27018

rs.initiate(
  {
      _id: "rnd-first-shard-replica-set",
      members: [
          {_id: 0, host: "mongo-first-shard1:27018"},
          {_id: 1, host: "mongo-first-shard2:27018"},
          {_id: 2, host: "mongo-first-shard3:27018"}
      ]
  }
)