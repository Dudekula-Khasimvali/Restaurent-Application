package com.khasim.rigister;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@CrossOrigin(origins = "*")
public class RigisterServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(RigisterServiceApplication.class, args);
	}

}
