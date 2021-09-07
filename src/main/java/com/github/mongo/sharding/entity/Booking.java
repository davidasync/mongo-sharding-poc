package com.github.mongo.sharding.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Sharded;
import org.springframework.data.mongodb.core.mapping.ShardingStrategy;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Sharded(shardKey = "userId", shardingStrategy = ShardingStrategy.HASH)
@Document(collection = "bookings")
public class Booking {

  @Id
  private String id;

  private Long price;

  private String userId;

}