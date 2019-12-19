package com.meetingRoom.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.meetingRoom.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	Optional<User> findByEmail(String email);


	@Query(value = "select * from users where name=:name", nativeQuery = true)
	User findByEmailId(@Param("name") String name);
	
	Boolean existsByUsername(String username);

	Boolean existsByEmail(String email);

}