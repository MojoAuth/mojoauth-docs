---
title: Getting Started - Android
tags: ["Android", "GetStarted"]
description: "A quick implementation guide to use MojoAuth for Passwordless using Android."
---

# Get Started - Android

To communicate with MojoAuth you will need some details about the application. These details are required for setup and initiate the implementation of Passwordless Login.

## Getting Credentials

### Register at MojoAuth

Here you just need to follow three simple steps:

- Login to [MojoAuth](https://mojoauth.com/signin) and the below screen appear:

<div style="text-align:center">
  <img src="../../assets/common-images/login.png" alt="MojoAuth" />
</div>
<br/>

- Create your Fist Project by adding your **Website URL** and **Project Name** as displyed in the below screen:

<div style="text-align:center">
  <img src="../../assets/common-images/project.png" alt="Create MojoAuth Project" />
</div>
<br/>

- Get your API Credentials, The API key and API Secret are used to interact with MojoAuth's APIs.

<div style="text-align:center">
  <img src="../../assets/common-images/dashboard.png" alt="MojoAuth Dashboad" />
</div>
<br/>

## Integrate MojoAuth

To start Integrating MojoAuth using Android sdk, follow below mentioned steps:

- To download the SDK, please go to the [MojoAuth github repository](https://github.com/MojoAuth/android-sdk).

- For Gradle based installation, add the following dependency in your app's build.gradle:

```
implementation 'com.mojoauth.android:mojoauth-sdk:1.1.0'
```

### Prerequisites

1.  Android SDK Version >= 16
2.  Build Tools Version = 28.0.0 (changeable in build.gradle)
3.  Android Studio >= 3.4.1

### Initialize SDK

Before using the SDK, you must initialize the SDK with the help of following code:

```java
MojoAuthSDK.Initialize initialize = new MojoAuthSDK.Initialize();
initialize.setApiKey("<Enter_APIKEY>");
```

### Manifest Settings

After creating a new Android project, follow the installation section of this document. Ensure the MojoAuth Android SDK is linked to your new project as a library.

Add the following permissions to the AndroidManifest.xml:

```java
<uses-permission android:name="android.permission.INTERNET" />

```

### Login By MagicLink

The following code will be used to implement Login By MagicLink:<br><br>

```java
    public void loginByMagicLink() {
        MojoAuthApi mojoAuthApi = new MojoAuthApi();
        mojoAuthApi.loginByMagicLink("<email>", new AsyncHandler<LoginResponse>() {
            @Override
            public void onFailure(ErrorResponse error) {
                Log.d("Error",error.getDescription());
            }

            @Override
            public void onSuccess(LoginResponse data) {
                Log.d("Data",data.getStateId());
            }
        });
    }
```

### Check Status

The following code will be used to check magic link verification status:

```java
    public void checkStatus() {
        MojoAuthApi mojoAuthApi = new MojoAuthApi();
        mojoAuthApi.pingStatus("<stateId>", new AsyncHandler<UserResponse>() {
            @Override
            public void onFailure(ErrorResponse error) {
                Log.d("Error",error.getDescription());
            }

            @Override
            public void onSuccess(UserResponse data) {
                Log.d("IsAuthenticated",data.getAuthenticated().toString());
                Log.d("access_token",data.getOauth().getAccessToken());
            }
        });
    }
```

### Login By EmailOTP

The following code will be used to implement Login By EmailOTP:<br><br>

```java
    public void loginByEmailOTP() {
        MojoAuthApi mojoAuthApi = new MojoAuthApi();
        mojoAuthApi.loginByEmailOTP("<email>", new AsyncHandler<LoginResponse>() {
            @Override
            public void onFailure(ErrorResponse error) {
                Log.d("Error",error.getDescription());
            }

            @Override
            public void onSuccess(LoginResponse data) {
                Log.d("Data",data.getStateId());
            }
        });
    }
```

### Verify Email OTP

The following code will be used to verify email otp:<br><br>

```java
    public void verifyEmailOTP() {
        MojoAuthApi mojoAuthApi = new MojoAuthApi();
        mojoAuthApi.verifyEmailOTP("<OTP>","<stateId>", new AsyncHandler<UserResponse>() {
            @Override
            public void onFailure(ErrorResponse error) {
                Log.d("Error",error.getDescription());
            }

            @Override
            public void onSuccess(UserResponse data) {
                Log.d("IsAuthenticated",data.getAuthenticated().toString());
            }
        });
    }

```

### Verify JWT Token

Use the MojoAuth `verifyAccessToken()` Method to verify the MojoAuth JWT token.

```java
   public void verifyAccessToken(String token) {
        Jwks jwks = new Jwks();
        jwks.verifyAccessToken(token, new AsyncHandler<VerifyTokenResponse>() {
            @Override
            public void onFailure(ErrorResponse error) {

                error.getDescription();
            }

            @Override
            public void onSuccess(VerifyTokenResponse data) {
                data.getIsValid();
            }
        });
    }

```

## Keep Reading

[How to handle MojoAuth token?](/howto/handle-jwt-token/)
