package com.meetingRoom.repository;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.meetingRoom.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	Optional<User> findByEmail(String email);

	@Query(value = "select * from users where username=:username", nativeQuery = true)
	User findByEmailId(@Param("username") String username);

	public Optional<User> findById(Long id);

	Boolean existsByUsername(String username);

	Boolean existsByEmail(String email);

	@Transactional
	@Modifying(clearAutomatically = true)
	@Query(value = "UPDATE auth_user c SET c.email =:nemail WHERE c.email = :email", nativeQuery = true)
	void updatemail(@Param("email") String email, @Param("nemail") String nemail);
}