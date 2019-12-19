package com.meetingRoom.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.meetingRoom.message.ResponseMessage;
import com.meetingRoom.model.RoomBookingDetails;
import com.meetingRoom.model.User;
import com.meetingRoom.repository.UserRepository;
import com.meetingRoom.service.RoomBookingService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class BookingController {

	@Autowired
	RoomBookingService roomBookingService;

	@Autowired
	UserRepository userRepository;

	@PostMapping("/api/room/bookRoom")
	public ResponseEntity<?> bookRoom(@RequestBody RoomBookingDetails room) {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		User user = userRepository.findByEmailId(auth.getName());
		String email = user.getEmail();
		room.setUser_mail(email);
		roomBookingService.saveBookingRoom(room);
		return new ResponseEntity<>(new ResponseMessage("Book Room Successfull"), HttpStatus.OK);
	}

	@GetMapping("/api/room/bookRoom/confirmRequest/{booking_id}/{id}")
	public ResponseEntity<?> confirmRequest(@PathVariable(name = "booking_id") Long booking_id,
			@PathVariable(name = "id") Long room_id) {
		String status = "CONFIRM";
		roomBookingService.updateStatus(booking_id, status);
		return new ResponseEntity<>(new ResponseMessage("Confirm Room Successfull"), HttpStatus.OK);
	}

	@GetMapping("/api/room/bookRoom/cancelRequest/{booking_id}/{id}")
	public ResponseEntity<?> cancelRequest(@PathVariable(name = "booking_id") Long booking_id,
			@PathVariable(name = "id") Long room_id) {
		String status = "CANCEL";
		roomBookingService.updateStatus(booking_id, status);
		return new ResponseEntity<>(new ResponseMessage("Cancel Room Successfull"), HttpStatus.OK);
	}

	@GetMapping("/api/bookRoom/getAllBookRoom")
	public List<RoomBookingDetails> getAllBookRoom() {
		List<RoomBookingDetails> listAllBookRoom = roomBookingService.listAll();
		return listAllBookRoom;
	}

}
