package com.meetingRoom.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

	public List<RoomBookingDetails> listAll() {
		return repo.findAll();
	}

	public List<RoomBookingDetails> pendingStatus(String user) {

		return repo.pendingStatus(user);
	}

	public List<RoomBookingDetails> confirmStatus(String user) {

		return repo.confirmStatus(user);
	}

	public List<RoomBookingDetails> cancelStatus(String user) {

		return repo.cancelStatus(user);
	}

	public void updateStatus(Long booking_id, String status) {
		repo.updateStatus(booking_id, status);
	}

	public List<RoomBookingDetails> allPendingRequest() {
		return repo.allPendingRequest();
	}

	public List<RoomBookingDetails> allConfirmRequest() {
		return repo.allConfirmRequest();
	}

	public List<RoomBookingDetails> allCancelRequest() {
		return repo.allCancelRequest();
	}

	public List<RoomBookingDetails> allStatus(String user) {
		return repo.allRequest(user);
	}

	public void updateemail(String email, String nemail) {
		repo.updatemail(email, nemail);
	}

	public List<RoomBookingDetails> AllStatus(String user) {
		return repo.allRequest(user);
	}

	public boolean delete(Long id) {
		repo.deleteById(id);
		return false;
	}

}
