---
title: Verify JWT Token - PHP
description: "A quick implementation guide to verify MojoAuth token using PHP."
---

# PHP SDK

## Setup PHP

To add the sdk in your PHP project you can download or pull the mojoauth php-sdk from the [github repo](https://github.com/MojoAuth/mojoauth-php), and configure it using your MojoAuth API KEY.

### Configure Project

```PHP
<?php

require_once(__DIR__."mojoAuthAPI.php");

// Get your MojoAuth API Key from MojoAuth Dashboard
$mojoAuth = new mojoAuthAPI("Your MojoAuth API Key");
```

## Sign In With Magic Link

Add the calling of the `sendLinkOnEmail()` function and pass the Email and optional query parameters to send the magiclink.

```PHP
$email = "Your Email";

$language = "Your language";
$redirect_url = "Your redirect URL";

$response = $mojoauth->sendLinkOnEmail($email, $language, $redirect_url);

var_dump($response);
```

## Ping Status

Add the calling of the `checkLoginStatus()` function and pass the state id received from the `sendLinkOnEmail()` function.

```PHP
$state_id = "Your StateID";

$response = $mojoauth->checkLoginStatus($state_id);

var_dump($response);
```

## Resend Magic Link

Add the calling of the `resendMagicLink()` function and pass the state id received from the `sendLinkOnEmail()` function.

```PHP
$state_id = "Your StateID";

$language = "Your language";
$redirect_url = "Your redirect URL";

$response = $mojoauth->resendMagicLink($state_id, $language, $redirect_url);

var_dump($response);
```

## Sign In With Email OTP

Add the calling of the `sendEmailOTP()` function and pass the Email and optional query parameters to send the OTP.

```PHP
$email = "Your Email";

$language = "Your language";

$response = $mojoauth->sendEmailOTP($email, $language);

var_dump($response);
```

## Verify Email OTP

Add the calling of the `verifyEmailOTP()` function and pass the OTP and state id received from the `sendEmailOTP()` function.

```PHP
$state_id = "Your StateID"
$otp = "Your OTP"

$response = $mojoauth->verifyEmailOTP($state_id, $otp);

var_dump($response);

```

## Resend Email OTP

Add the calling of the `resendEmailOTP()` function and pass the state id received from the `sendEmailOTP()` function.

```PHP
$state_id = "Your StateID";

$language = "Your language";

$response = $mojoauth->resendEmailOTP($state_id, $language);

var_dump($response);
```

## Sign In With Phone OTP

Add the calling of the `sendPhoneOTP()` function and pass the phone number and optional query parameters to send the OTP.

```PHP
$phone = "Your Phone" // pass the phone number in the international format e.g for US, +1XXXXXXXXXX
$language = "Your language"

$response = $mojoauth->sendPhoneOTP($email, $language);

var_dump($response);
```

## Verify Phone OTP

Add the calling of the `verifyPhoneOTP()` function and pass the OTP and state id received from the `sendPhoneOTP()` function.

```PHP
$state_id = "Your StateID"
$otp = "Your OTP"

$response = $mojoauth->verifyPhoneOTP($state_id, $otp);

var_dump($response);
```

## Resend Phone OTP

Add the calling of the `ResendPhoneOTP()` function and pass the state id received from the `sendPhoneOTP()` function.

```PHP
$state_id = "Your StateID";

$language = "Your language";

$response = $mojoauth->resendPhoneOTP($state_id, $language);

var_dump($response);
```

### Get User Profile Data

Use the MojoAuth `getUserProfileData()` Method to get User Profile Data from MojoAuth JWT token.

```PHP

//Step 1 Get Public Key / Certificate from MojoAuth Server

$result = $mojoAuth->getPublicKey();
$publicKey = json_decode($result['response']);

//Step 2 Pass JWT token and publickey to verify user
$userProfileData = $mojoAuth->getUserProfileData($access_token, $publicKey->data)

```
