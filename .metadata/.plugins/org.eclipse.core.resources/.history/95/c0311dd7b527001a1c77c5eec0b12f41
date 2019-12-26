package com.meetingRoom.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.meetingRoom.model.Department;
import com.meetingRoom.repository.DepartmentRepository;

@Service
public class DepartmentService {

	@Autowired
	private DepartmentRepository repo;

	public List<Department> listAll() {
		return repo.findAll();
	}
}
