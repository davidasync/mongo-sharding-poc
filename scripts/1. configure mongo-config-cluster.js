// docker container exec -it mongo-config-server1 /bin/sh
// mongo --host localhost --port 27019

rs.initiate(
  {
      _id: "rnd-config-replica-set",
      configsvr: true,
      members: [
          {
              _id: 0,
              host: "mongo-config-server1:27019"
          },
          {
              _id: 1,
              host: "mongo-config-server2:27019"
          },
          {
              _id: 2,
              host: "mongo-config-server3:27019"
          }
      ]
  }
)