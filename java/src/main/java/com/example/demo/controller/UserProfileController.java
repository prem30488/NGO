package com.example.demo.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.profile.UserProfile;
import com.example.demo.service.UserProfileService;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class UserProfileController {

	@Autowired
	private final UserProfileService userProfileService;
	
	
	
	public UserProfileController(UserProfileService userProfileService) {
		super();
		this.userProfileService = userProfileService;
	}


	@GetMapping("/user/user-profile")
	public List<UserProfile> getUserProfiles(){
		return userProfileService.getUserProfiles();
		
	}
	@PostMapping(
			path="/user/{id}/image/upload",
			consumes = MediaType.MULTIPART_FORM_DATA_VALUE,
			produces = MediaType.APPLICATION_JSON_VALUE
			)
	public void uploadUserProfileImage(@PathVariable("id") Long id,
									   @RequestParam("file") MultipartFile file){
		
		userProfileService.uploadUserProfileImage(id,file);								   
	}
	
	@GetMapping("/user/{id}/image/download")
    public byte[] downloadUserProfileImage(@PathVariable("id") Long id) {
        return userProfileService.downloadUserProfileImage(id);
    }
}
