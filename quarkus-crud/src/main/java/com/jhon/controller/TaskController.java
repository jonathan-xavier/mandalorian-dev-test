package com.jhon.controller;



import java.util.List;

import javax.inject.Inject;
import javax.inject.Singleton;

import io.smallrye.mutiny.Uni;
import service.TaskService;

@Singleton
public class TaskController {
	
	

	@Inject
	TaskService service;

	public Uni<List<String>> getAllKeys() {
		return service.keys();
	}

	public String getKey(String key) {
		return service.get(key);
	}

	public void create(String key, String value) {
		service.set(key, value);
	}

	public Uni<Void> delete(String key) {
		return service.del(key);
	}
	
	
	
}
