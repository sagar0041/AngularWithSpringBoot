package com.meetingRoom.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "room_booking_details")
public class RoomBookingDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long booking_id;

	@Column(name = "id")
	private Long id;
	
	@Column(name = "room_name")
	private String name;

	@Column(name = "user_mail")
	private String user_mail;

	private String status;

	public Long getBooking_id() {
		return booking_id;
	}

	public void setBooking_id(Long booking_id) {
		this.booking_id = booking_id;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUser_mail() {
		return user_mail;
	}

	public void setUser_mail(String user_mail) {
		this.user_mail = user_mail;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public RoomBookingDetails() {
	}

	
	public RoomBookingDetails(Long booking_id, Long id, String name, String user_mail, String status) {
		this.booking_id = booking_id;
		this.id = id;
		this.name = name;
		this.user_mail = user_mail;
		this.status = status;
	}

	@Override
	public String toString() {
		return "RoomBookingDetails [booking_id=" + booking_id + ", id=" + id + ", name=" + name + ", user_mail="
				+ user_mail + ", status=" + status + "]";
	}

	
}
