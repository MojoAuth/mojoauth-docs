---
title: Verify JWT Token - Golang
description: "A quick implementation guide to verify MojoAuth token using Golang SDK."
---

# JAVA SDK

## Setup and Install SDK

### Manual Installation

- Right click on your project in eclipse.
- Select Build Path.
- Click on Configure Build Path.
- Click on Libraries and select Add External JARs.
- Select the jar file from your computer.
- Hit and Apply button.

### Automatic Installation

MojoAuth is now using Maven. At present the jars are available from a public maven repository.

Use the following dependency in your project.

```JAVA
<dependency>
  <groupId>com.mojoauth.sdk</groupId>
  <artifactId>java-sdk</artifactId>
  <version>1.1.0</version>
</dependency>

```

> The jars are also available [here](https://mvnrepository.com/artifact/com.mojoauth.sdk/java-sdk/1.0.0). Select the directory for the latest version and download the jar files.

### Configure Project

Before using the SDK, you must initialize the SDK with the help of following code: API Key and secret of your MojoAuth site.

```java
MojoAuthSDK.Initialize init = new MojoAuthSDK.Initialize();
init.setApiKey("___MOJOAUTH_APIKEY___");
```

### Verify JWT Token

Use the MojoAuth `verifyAccessToken()` Method to verify the MojoAuth JWT token.

```java
  String token = "<token>";
Jwks jwks = new Jwks();
jwks.verifyAccessToken(token, new AsyncHandler<VerifyTokenResponse>() {

	@Override
	public void onSuccess(VerifyTokenResponse data) {
		System.out.println(data.getAccessToken());
		System.out.println(data.getIsValid());
	}

	@Override
	public void onFailure(ErrorResponse errorcode) {
		System.out.println(errorcode.getMessage());
		System.out.println(errorcode.getDescription());
	}
});
```
