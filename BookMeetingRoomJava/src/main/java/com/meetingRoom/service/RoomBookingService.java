package com.meetingRoom.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.meetingRoom.model.Room;
import com.meetingRoom.model.RoomBookingDetails;
import com.meetingRoom.repository.RoomBookingDetailsRepository;

@Service
public class RoomBookingService {

	@Autowired
	RoomBookingDetailsRepository repo;

	public void saveBookingRoom(RoomBookingDetails bookingDetails) {
		bookingDetails.setStatus("PENDING");
		repo.save(bookingDetails);
	}

}
