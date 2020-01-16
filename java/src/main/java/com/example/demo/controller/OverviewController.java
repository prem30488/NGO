package com.example.demo.controller;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Overview;
import com.example.demo.repository.OverviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;

@RestController
public class OverviewController {

	@Autowired
	private OverviewRepository overviewRepository;
	
	@GetMapping("/api/user/overviews")
    public Page<Overview> getOverviews(Pageable pageable) {
        return overviewRepository.findAll(pageable);
    }


    @PostMapping("/api/user/overviews")
    public Overview createOverview(@Valid @RequestBody Overview overview) {
        return overviewRepository.save(overview);
    }

    @PutMapping("/api/user/overviews/{overviewId}")
    public Overview updateOverview(@PathVariable Long overviewId,
                                   @Valid @RequestBody Overview overviewRequest) {
        return overviewRepository.findById(overviewId)
                .map(overview -> {
                    overview.setTitle(overviewRequest.getTitle());
                    overview.setDescription(overviewRequest.getDescription());
                    return overviewRepository.save(overview);
                }).orElseThrow(() -> new ResourceNotFoundException("Overview not found with id " + overviewId));
    }


    @DeleteMapping("/api/user/overviews/{overviewId}")
    public ResponseEntity<?> deleteOverview(@PathVariable Long overviewId) {
        return overviewRepository.findById(overviewId)
                .map(overview -> {
                    overviewRepository.delete(overview);
                    return ResponseEntity.ok().build();
                }).orElseThrow(() -> new ResourceNotFoundException("Overview not found with id " + overviewId));
    }
    
    @GetMapping("/api/user/overviews/{overviewId}")
	public Overview fetchUserById(@PathVariable Long overviewId) {
		return overviewRepository.findById(overviewId)
				.orElseThrow(() -> new ResourceNotFoundException("Overview not found with id " + overviewId));
	}
}
