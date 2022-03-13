package com.github.mongo.sharding;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@EnableWebMvc
@SpringBootApplication
public class DemoMongoShardingApplication {

  public static void main(String[] args) {
    SpringApplication.run(DemoMongoShardingApplication.class, args);
  }

}
