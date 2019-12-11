package com.meetingRoom.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.meetingRoom.model.Room;
import com.meetingRoom.repository.RoomRepository;

@Service
public class RoomService {

	@Autowired
	private RoomRepository repo;

	public List<Room> listAll() {
		return repo.findAll();
	}

	public Room save(Room room) {
		return repo.save(room);
	}

	public Room get(Long id) {
		return repo.findById(id).get();
	}

	public boolean delete(Long id) {
		repo.deleteById(id);
		return false;
	}

}
