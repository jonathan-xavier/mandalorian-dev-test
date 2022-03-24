package com.jhon.model;


import lombok.Data;
import lombok.Getter;
import lombok.Setter;



@Getter
@Setter
@Data
public class Task{
	
	
	public String key;

	public String value;

	public Task(String key, String value) {
		this.key = key;
		this.value = value;
	}

	public Task() {
	}
	
	

	
	
}
