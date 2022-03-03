---
title: SDK - ASP.NET
description: "A quick implementation guide for using MojoAuth using ASP.NET SDK."
---

# ASP.NET SDK

## Setup and Install SDK

## Installation

Run the following command in the NuGet Package Manager Console:

`PM> Install-Package MojoAuth.NET`

### Configure Project

Before making any API calls, the MojoAuth API client must be initialized with your MojoAuth API Key and Secret.

Sample code:

```
using MojoAuth.NET;

var mojoAuthHttpClient = new MojoAuthHttpClient("____key____", "____secret____");

```

### Send magic link on the email

Use the MojoAuth `SendMagicLink()` Method to send magic link on the email.

```
var email = “abc@abc.com”;  //Required
var resp = await mojoAuthHttpClient.SendMagicLink(email);

Console.WriteLine(resp.Result);
```

### Check Authentication status

Use the MojoAuth `CheckAuthenticationStatus()` Method to check authentication status.

```
var stateId = “<state_id>”;  //Required
var resp = await mojoAuthHttpClient.CheckAuthenticationStatus(stateId);

Console.WriteLine(resp.Result);
```

### Check WebAuthn status

Use the MojoAuth `CheckWebAuthnRequest()` Method to check WebAuthn status.

```
var email = “abc@abc.com”;  //Required
var resp = await mojoAuthHttpClient.CheckWebAuthnRequest(email);

Console.WriteLine(resp.Result);
```

### Send EmailOTP

Use the MojoAuth `SendEmailOTP()` Method to send Email OTP.

```
var email = “abc@abc.com”;  //Required
var resp = await mojoAuthHttpClient.SendEmailOTP("email.address@example.com");

Console.WriteLine(resp.Result);
```

### Verify EmailOTP

Use the MojoAuth `VerifyOTP()` Method to verify the MojoAuth JWT token.

```
var stateId = “<state_id>”;  //Required
var otp = “<otp>”;  //Required

var resp = await mojoAuthHttpClient.VerifyOTP(stateId,otp);

Console.WriteLine(resp.Result);
```

### JWKS

This function provides a valid public key set for the user to validate their tokens.

```
var resp = await mojoAuthHttpClient.GetJWKS();

Console.WriteLine(resp.Result);
```

### Verify JWT Token

Use the MojoAuth `verifyAccessToken()` Method to verify the MojoAuth JWT token.

```
var token = “<token>”;  //Required
var resp = await mojoAuthHttpClient.ValidateToken(token);

Console.WriteLine(resp.Result);
```
