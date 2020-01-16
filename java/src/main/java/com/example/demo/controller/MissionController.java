package com.example.demo.controller;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Mission;
import com.example.demo.model.User;
import com.example.demo.repository.MissionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;

@RestController
public class MissionController {

	@Autowired
	private MissionRepository missionRepository;
	
	@GetMapping("/api/user/missions")
    public Page<Mission> getMissions(Pageable pageable) {
        return missionRepository.findAll(pageable);
    }


    @PostMapping("/api/user/missions")
    public Mission createMission(@Valid @RequestBody Mission mission) {
        return missionRepository.save(mission);
    }

    @PutMapping("/api/user/missions/{missionId}")
    public Mission updateMission(@PathVariable Long missionId,
                                   @Valid @RequestBody Mission missionRequest) {
        return missionRepository.findById(missionId)
                .map(mission -> {
                    mission.setTitle(missionRequest.getTitle());
                    mission.setDescription(missionRequest.getDescription());
                    return missionRepository.save(mission);
                }).orElseThrow(() -> new ResourceNotFoundException("Mission not found with id " + missionId));
    }


    @DeleteMapping("/api/user/missions/{missionId}")
    public ResponseEntity<?> deleteMission(@PathVariable Long missionId) {
        return missionRepository.findById(missionId)
                .map(mission -> {
                    missionRepository.delete(mission);
                    return ResponseEntity.ok().build();
                }).orElseThrow(() -> new ResourceNotFoundException("Mission not found with id " + missionId));
    }
    
    @GetMapping("/api/user/missions/{missionId}")
	public Mission fetchUserById(@PathVariable Long missionId) {
		return missionRepository.findById(missionId)
				.orElseThrow(() -> new ResourceNotFoundException("Mission not found with id " + missionId));
	}
}
