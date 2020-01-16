package com.example.demo.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name = "award")
public class Award extends AuditModel {

	@Id
    @GeneratedValue(generator = "award_generator")
    @SequenceGenerator(
            name = "award_generator",
            sequenceName = "award_sequence",
            initialValue = 1
    )
    private Long id;

    @NotBlank
    @Size(min = 3, max = 100)
    private String title;

    @Column(columnDefinition = "text")
    private String description;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
    
    
}
