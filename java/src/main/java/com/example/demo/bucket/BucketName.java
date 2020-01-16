package com.example.demo.bucket;

public enum BucketName {
	
	PROFILE_IMAGE("giftinglife-images");

	private final String bucketName;
	
	BucketName(String bucketName){
		this.bucketName = bucketName;
	}
	
	public String getBucketName() {
		return bucketName;
	}
}
