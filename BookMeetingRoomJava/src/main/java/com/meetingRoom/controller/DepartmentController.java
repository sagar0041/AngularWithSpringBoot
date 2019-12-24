package com.meetingRoom.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.meetingRoom.model.Department;
import com.meetingRoom.service.DepartmentService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class DepartmentController {

	@Autowired
	private DepartmentService service;

	@GetMapping("/api/dept/getAllDept")
	public List<Department> getAlldept() {
		List<Department> listDept = service.listAll();
		return listDept;
	}

}