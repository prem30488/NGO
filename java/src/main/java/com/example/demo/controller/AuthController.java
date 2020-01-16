package com.example.demo.controller;

import com.example.demo.exception.BadRequestException;
import com.example.demo.model.AuthProvider;
import com.example.demo.model.Award;
import com.example.demo.model.Leadership;
import com.example.demo.model.Mission;
import com.example.demo.model.Overview;
import com.example.demo.model.Testimonial;
import com.example.demo.model.User;
import com.example.demo.payload.ApiResponse;
import com.example.demo.payload.AuthResponse;
import com.example.demo.payload.LoginRequest;
import com.example.demo.payload.SignUpRequest;
import com.example.demo.repository.AwardRepository;
import com.example.demo.repository.LeadershipRepository;
import com.example.demo.repository.MissionRepository;
import com.example.demo.repository.OverviewRepository;
import com.example.demo.repository.TestimonialRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.security.TokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private TokenProvider tokenProvider;

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getEmail(),
                        loginRequest.getPassword()
                )
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token = tokenProvider.createToken(authentication);
        return ResponseEntity.ok(new AuthResponse(token));
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignUpRequest signUpRequest) {
        if(userRepository.existsByEmail(signUpRequest.getEmail())) {
            throw new BadRequestException("Email address already in use.");
        }

        // Creating user's account
        User user = new User();
        user.setName(signUpRequest.getName());
        user.setUsername(signUpRequest.getUsername());
        user.setEmail(signUpRequest.getEmail());
        user.setPassword(signUpRequest.getPassword());
        user.setProvider(AuthProvider.local);

        user.setPassword(passwordEncoder.encode(user.getPassword()));

        User result = userRepository.save(user);

        URI location = ServletUriComponentsBuilder
                .fromCurrentContextPath().path("/user/me")
                .buildAndExpand(result.getId()).toUri();

        return ResponseEntity.created(location)
                .body(new ApiResponse(true, "User registered successfully@"));
    }
    
    @Autowired
	private OverviewRepository overviewRepository;
	
	@GetMapping("/overviews")
    public Page<Overview> getOverviews(Pageable pageable) {
        return overviewRepository.findAll(pageable);
    }

	@Autowired
	private MissionRepository missionRepository;
	
	@GetMapping("/missions")
    public Page<Mission> getMissions(Pageable pageable) {
        return missionRepository.findAll(pageable);
    }
	
	@Autowired
	private LeadershipRepository leadershipRepository;
	
	@GetMapping("/leaderships")
    public Page<Leadership> getLeaderships(Pageable pageable) {
        return leadershipRepository.findAll(pageable);
    }
	
	@Autowired
	private AwardRepository awardRepository;
	
	@GetMapping("/awards")
    public Page<Award> getAwards(Pageable pageable) {
        return awardRepository.findAll(pageable);
    }
	
	@Autowired
	private TestimonialRepository testimonialRepository;
	
	@GetMapping("/testimonials")
    public Page<Testimonial> getTestimonials(Pageable pageable) {
        return testimonialRepository.findAll(pageable);
    }
}
/*
 * import com.example.demo.exception.AppException; import
 * com.example.demo.model.Role; import com.example.demo.model.RoleName; import
 * com.example.demo.model.User; import com.example.demo.payload.ApiResponse;
 * import com.example.demo.payload.JwtAuthenticationResponse; import
 * com.example.demo.payload.LoginRequest; import
 * com.example.demo.payload.SignUpRequest; import
 * com.example.demo.repository.RoleRepository; import
 * com.example.demo.repository.UserRepository; import
 * com.example.demo.security.JwtTokenProvider; import
 * org.springframework.beans.factory.annotation.Autowired; import
 * org.springframework.http.HttpStatus; import
 * org.springframework.http.ResponseEntity; import
 * org.springframework.security.authentication.AuthenticationManager; import
 * org.springframework.security.authentication.
 * UsernamePasswordAuthenticationToken; import
 * org.springframework.security.core.Authentication; import
 * org.springframework.security.core.context.SecurityContextHolder; import
 * org.springframework.security.crypto.password.PasswordEncoder; import
 * org.springframework.web.bind.annotation.PostMapping; import
 * org.springframework.web.bind.annotation.RequestBody; import
 * org.springframework.web.bind.annotation.RequestMapping; import
 * org.springframework.web.bind.annotation.RestController; import
 * org.springframework.web.servlet.support.ServletUriComponentsBuilder;
 * 
 * import javax.validation.Valid; import java.net.URI; import
 * java.util.Collections;
 * 
 * @RestController
 * 
 * @RequestMapping("/api/auth") public class AuthController {
 * 
 * @Autowired AuthenticationManager authenticationManager;
 * 
 * @Autowired UserRepository userRepository;
 * 
 * @Autowired RoleRepository roleRepository;
 * 
 * @Autowired PasswordEncoder passwordEncoder;
 * 
 * @Autowired JwtTokenProvider tokenProvider;
 * 
 * @PostMapping("/signin") public ResponseEntity<?>
 * authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
 * 
 * Authentication authentication = authenticationManager.authenticate( new
 * UsernamePasswordAuthenticationToken( loginRequest.getUsernameOrEmail(),
 * loginRequest.getPassword() ) );
 * 
 * SecurityContextHolder.getContext().setAuthentication(authentication);
 * 
 * String jwt = tokenProvider.generateToken(authentication); return
 * ResponseEntity.ok(new JwtAuthenticationResponse(jwt)); }
 * 
 * @PostMapping("/signup") public ResponseEntity<?>
 * registerUser(@Valid @RequestBody SignUpRequest signUpRequest) {
 * if(userRepository.existsByUsername(signUpRequest.getUsername())) { return new
 * ResponseEntity(new ApiResponse(false, "Username is already taken!"),
 * HttpStatus.BAD_REQUEST); }
 * 
 * if(userRepository.existsByEmail(signUpRequest.getEmail())) { return new
 * ResponseEntity(new ApiResponse(false, "Email Address already in use!"),
 * HttpStatus.BAD_REQUEST); }
 * 
 * // Creating user's account User user = new User(signUpRequest.getName(),
 * signUpRequest.getUsername(), signUpRequest.getEmail(),
 * signUpRequest.getPassword());
 * 
 * user.setPassword(passwordEncoder.encode(user.getPassword()));
 * 
 * Role userRole = roleRepository.findByName(RoleName.ROLE_USER) .orElseThrow(()
 * -> new AppException("User Role not set."));
 * 
 * user.setRoles(Collections.singleton(userRole));
 * 
 * User result = userRepository.save(user);
 * 
 * URI location = ServletUriComponentsBuilder
 * .fromCurrentContextPath().path("/api/users/{username}")
 * .buildAndExpand(result.getUsername()).toUri();
 * 
 * return ResponseEntity.created(location).body(new ApiResponse(true,
 * "User registered successfully")); } }
 */