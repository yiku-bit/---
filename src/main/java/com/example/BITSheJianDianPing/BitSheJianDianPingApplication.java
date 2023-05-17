package com.example.BITSheJianDianPing;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@MapperScan(basePackages = "com.example.BITSheJianDianPing.dao")
@SpringBootApplication
public class BitSheJianDianPingApplication {

	public static void main(String[] args) {
		SpringApplication.run(BitSheJianDianPingApplication.class, args);
	}

}
