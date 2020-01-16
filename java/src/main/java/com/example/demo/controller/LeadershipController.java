package com.example.demo.controller;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Leadership;
import com.example.demo.model.User;
import com.example.demo.repository.LeadershipRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;

@RestController
public class LeadershipController {

	@Autowired
	private LeadershipRepository leadershipRepository;
	
	@GetMapping("/api/user/leaderships")
    public Page<Leadership> getLeaderships(Pageable pageable) {
        return leadershipRepository.findAll(pageable);
    }


    @PostMapping("/api/user/leaderships")
    public Leadership createLeadership(@Valid @RequestBody Leadership leadership) {
        return leadershipRepository.save(leadership);
    }

    @PutMapping("/api/user/leaderships/{leadershipId}")
    public Leadership updateLeadership(@PathVariable Long leadershipId,
                                   @Valid @RequestBody Leadership leadershipRequest) {
        return leadershipRepository.findById(leadershipId)
                .map(leadership -> {
                    leadership.setName(leadershipRequest.getName());
                    leadership.setDesignation(leadershipRequest.getDesignation());
                    return leadershipRepository.save(leadership);
                }).orElseThrow(() -> new ResourceNotFoundException("Leadership not found with id " + leadershipId));
    }


    @DeleteMapping("/api/user/leaderships/{leadershipId}")
    public ResponseEntity<?> deleteLeadership(@PathVariable Long leadershipId) {
        return leadershipRepository.findById(leadershipId)
                .map(leadership -> {
                    leadershipRepository.delete(leadership);
                    return ResponseEntity.ok().build();
                }).orElseThrow(() -> new ResourceNotFoundException("Leadership not found with id " + leadershipId));
    }
    
    @GetMapping("/api/user/leaderships/{leadershipId}")
	public Leadership fetchUserById(@PathVariable Long leadershipId) {
		return leadershipRepository.findById(leadershipId)
				.orElseThrow(() -> new ResourceNotFoundException("Leadership not found with id " + leadershipId));
	}
}
