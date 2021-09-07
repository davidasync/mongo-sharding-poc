package com.github.mongo.sharding.repository;

import com.github.mongo.sharding.entity.Booking;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface BookingRepository extends MongoRepository<Booking, String> {
  List<Booking> findAllByUserId(String userId, Sort sort);
}