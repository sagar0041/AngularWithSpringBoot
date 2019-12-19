package com.meetingRoom.controller;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.meetingRoom.message.ResponseMessage;
import com.meetingRoom.message.SignUpForm;
import com.meetingRoom.model.Role;
import com.meetingRoom.model.RoleName;
import com.meetingRoom.model.Room;
import com.meetingRoom.model.User;
import com.meetingRoom.repository.RoleRepository;
import com.meetingRoom.repository.UserRepository;
import com.meetingRoom.service.UserService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class UserController {

	@Autowired
	private UserService service;

	@Autowired
	UserRepository userRepository;

	@Autowired
	RoleRepository roleRepository;

	@GetMapping("/api/user/getAllRoom")
	public List<User> getAllUser() {
		List<User> listUser = service.listAll();
		return listUser;
	}

	// used to get user for id - update query
	@GetMapping("/api/user/{id}")
	public User getUserById(@PathVariable Long id) {
		return service.get(id);
	}

	// used to save user -update
	@PutMapping("/api/user")
	public ResponseEntity<User> updateSaveUser(@RequestBody User user) {
		User userUpdated = service.save(user);
		return new ResponseEntity<User>(user, HttpStatus.OK);
	}
	
	@PostMapping("/api/user/add")
	public User createRoom(@Valid @RequestBody User user) {
		System.out.println(user.toString());
		user.getName();
		user.getUsername();
		user.getEmail();
		user.getRoles();
		return service.save(user);
	}
	
	@DeleteMapping("/api/user/delete/{id}")
	public boolean deleteRoom(@PathVariable Long id) {
		service.delete(id);
		return true;
	}

}
