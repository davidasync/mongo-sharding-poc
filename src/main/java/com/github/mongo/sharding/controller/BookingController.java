package com.github.mongo.sharding.controller;

import com.github.mongo.sharding.entity.Booking;
import com.github.mongo.sharding.repository.BookingRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Sort;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@RestController
@Slf4j
@AllArgsConstructor
public class BookingController {

  private final BookingRepository bookingRepository;

  @PostMapping(
          value = "/bookings",
          consumes = MediaType.APPLICATION_JSON_VALUE,
          produces = MediaType.APPLICATION_JSON_VALUE
  )
  public List<Booking> create(@RequestBody List<Booking> bookings) {
    List<Booking> bookingResults = new ArrayList<>();

    for (int i=0; i<bookings.size(); i++) {
      Booking bookingResult = bookingRepository.save(bookings.get(i));
      bookingResults.add(bookingResult);
    }
    return bookingResults;
  }

  @GetMapping(
          value = "/bookings",
          produces = MediaType.APPLICATION_JSON_VALUE
  )
  public List<Booking> list() {
    return bookingRepository.findAll(Sort.by(Sort.Direction.DESC, "price"));
  }

  @GetMapping(
          value = "/booking/{userId}",
          produces = MediaType.APPLICATION_JSON_VALUE
  )
  public List<Booking> listByUserId(@PathVariable("userId") String userId) {
    return bookingRepository.findAllByUserId(userId, Sort.by(Sort.Direction.DESC, "price"));
  }
}