#!/bin/bash
sleep 10
echo "rs.initiate replica shard 1..."
mongo --host mongo-first-shard1 --port 27011 --eval "rs.initiate({_id:\"rnd-first-shard-replica-set\",members:[{_id:0,host:\"mongo-first-shard1:27011\"},{_id:1,host:\"mongo-first-shard2:27012\"},{_id:2,host:\"mongo-first-shard3:27013\"}]});"
echo "Done."

echo "rs.initiate replica shard 2..."
mongo --host mongo-second-shard1 --port 27021 --eval "rs.initiate({_id:\"rnd-second-shard-replica-set\",members:[{_id:0,host:\"mongo-second-shard1:27021\"},{_id:1,host:\"mongo-second-shard2:27022\"},{_id:2,host:\"mongo-second-shard3:27023\"}]});"
echo "Done."

echo "rs.initiate replica shard 3..."
mongo --host mongo-third-shard1 --port 27031 --eval "rs.initiate({_id:\"rnd-third-shard-replica-set\",members:[{_id:0,host:\"mongo-third-shard1:27031\"},{_id:1,host:\"mongo-third-shard2:27032\"},{_id:2,host:\"mongo-third-shard3:27033\"}]});"
echo "Done."

echo "rs.initiate mongo config server..."
mongo --host mongo-config-server1 --port 27001 --eval "rs.initiate({_id:\"rnd-config-replica-set\",configsvr:true,members:[{_id:0,host:\"mongo-config-server1:27001\"},{_id:1,host:\"mongo-config-server2:27002\"},{_id:2,host:\"mongo-config-server3:27003\"}]});"
echo "Done."
