package com.example.demo.repository;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

import com.example.demo.controller.UserController;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.User;
import com.example.demo.profile.UserProfile;

@Repository
public class FakeUserProfileDataStore {

	private List<UserProfile> USER_PROFILES = new ArrayList<UserProfile>();
	
	@Autowired
	private UserRepository userRepository;
	
	static {
		
	}
	
	public List<UserProfile> getUserProfiles(){
		USER_PROFILES = new ArrayList<UserProfile>();
		List<User> users =userRepository.findAll();
		
		users.forEach(user -> USER_PROFILES.add(
				new UserProfile(user.getId(), user.getUsername(), user.getImageUrl())			
				));
		
		return USER_PROFILES;
	}
}
