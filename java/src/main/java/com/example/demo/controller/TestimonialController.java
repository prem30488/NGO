package com.example.demo.controller;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Testimonial;
import com.example.demo.model.User;
import com.example.demo.repository.TestimonialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;

@RestController
public class TestimonialController {

	@Autowired
	private TestimonialRepository testimonialRepository;
	
	@GetMapping("/api/user/testimonials")
    public Page<Testimonial> getTestimonials(Pageable pageable) {
        return testimonialRepository.findAll(pageable);
    }


    @PostMapping("/api/user/testimonials")
    public Testimonial createTestimonial(@Valid @RequestBody Testimonial testimonial) {
        return testimonialRepository.save(testimonial);
    }

    @PutMapping("/api/user/testimonials/{testimonialId}")
    public Testimonial updateTestimonial(@PathVariable Long testimonialId,
                                   @Valid @RequestBody Testimonial testimonialRequest) {
        return testimonialRepository.findById(testimonialId)
                .map(testimonial -> {
                    testimonial.setTitle(testimonialRequest.getTitle());
                    testimonial.setDescription(testimonialRequest.getDescription());
                    return testimonialRepository.save(testimonial);
                }).orElseThrow(() -> new ResourceNotFoundException("Testimonial not found with id " + testimonialId));
    }


    @DeleteMapping("/api/user/testimonials/{testimonialId}")
    public ResponseEntity<?> deleteTestimonial(@PathVariable Long testimonialId) {
        return testimonialRepository.findById(testimonialId)
                .map(testimonial -> {
                    testimonialRepository.delete(testimonial);
                    return ResponseEntity.ok().build();
                }).orElseThrow(() -> new ResourceNotFoundException("Testimonial not found with id " + testimonialId));
    }
    
    @GetMapping("/api/user/testimonials/{testimonialId}")
	public Testimonial fetchUserById(@PathVariable Long testimonialId) {
		return testimonialRepository.findById(testimonialId)
				.orElseThrow(() -> new ResourceNotFoundException("Testimonial not found with id " + testimonialId));
	}
}
