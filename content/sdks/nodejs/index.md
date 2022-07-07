---
title: Verify JWT Token - NodeJS
description: "A quick implementation guide to verify MojoAuth token using NodeJS."
---

# NodeJS SDK

## Setup Node.js

This implementation uses the express framework to create Node.js API.

- Create a node project by running the following command in the command line:

  `npm init`

  > Upon completion, it will add a package.json file in the project folder.

- Create a server file in the project and name it `server.js`.

- Add the following code snippet to the `server.js` file.

```
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var PORT = 3000;
app.use(bodyParser.urlencoded({
extended: true
}));

// your MojoAuth API implementation goes here

app.listen(PORT, () => console.log('App can be accessed at localhost:' + PORT ));
```

> **Note**: Make sure you add further code (given in steps below) in place of // your MojoAuth API implementation goes here text mentioned in the above file.

## Install SDK

Add project dependency and MojoAuth SDK using npm by running the following command in the command line:

```
npm install express body-parser mojoauth-sdk
```

Upon installation, you will find MojoAuth Node.js SDK under the node module.

## Configure Project

```js
var config = {
  apiKey: "Your API Key",
}

var ma = require("mojoauth-sdk")(config)
```

## Sign In With Magic Link

Add the calling of the `SigninWithMagicLink()` function and pass the Email and optional query parameters to send the magiclink.

```js
let email = "Your Email"
let query = {}
query.language = "Your language"
query.redirect_url = "Your redirect URL"

ma.mojoAPI
  .signinWithMagicLink(email, query)
  .then(response => {
    console.log(response)
  })
  .catch(function (error) {
    console.log(error)
  })
```

## Ping Status

Add the calling of the `PingStatus()` function and pass the state id received from the `SigninWithMagicLink()` function.

```js
let state_id = "Your StateID"

ma.mojoAPI
  .pingStatus(state_id)
  .then(response => {
    console.log(response)
  })
  .catch(function (error) {
    console.log(error)
  })
```

## Resend Magic Link

Add the calling of the `ResendMagicLink()` function and pass the state id received from the `SigninWithMagicLink()` function.

```js
let state_id = "Your State ID"
let query = {}
query.language = "Your language"
query.redirect_url = "Your redirect URL"

ma.mojoAPI
  .resendMagicLink(state_id, query)
  .then(response => {
    console.log(response)
  })
  .catch(function (error) {
    console.log(error)
  })
```

## Sign In With Email OTP

Add the calling of the `SigninWithEmailOTP()` function and pass the Email and optional query parameters to send the OTP.

```js
let email = "Your Email"
let query = {}
query.language = "Your language"

ma.mojoAPI
  .signinWithEmailOTP(email, query)
  .then(response => {
    console.log(response)
  })
  .catch(function (error) {
    console.log(error)
  })
```

## Verify Email OTP

Add the calling of the `VerifyEmailOTP()` function and pass the OTP and state id received from the `SigninWithEmailOTP()` function.

```js
let state_id = "Your StateID"
let otp = "Your OTP"

ma.mojoAPI
  .verifyEmailOTP(otp, state_id)
  .then(response => {
    console.log(response)
  })
  .catch(function (error) {
    console.log(error)
  })
```

## Resend Email OTP

Add the calling of the `ResendEmailOTP()` function and pass the state id received from the `SigninWithEmailOTP()` function.

```js
let state_id = "Your State ID"
let query = {}
query.language = "Your language"

ma.mojoAPI
  .resendEmailOTP(state_id, query)
  .then(response => {
    console.log(response)
  })
  .catch(function (error) {
    console.log(error)
  })
```

## Sign In With Phone OTP

Add the calling of the `SigninWithPhoneOTP()` function and pass the phone number and optional query parameters to send the OTP.

```js
let phone = "Your Phone" // pass the phone number in the international format e.g for US, +1XXXXXXXXXX
let query = {}
query.language = "Your language"

ma.mojoAPI
  .signinWithPhoneOTP(phone, query)
  .then(response => {
    console.log(response)
  })
  .catch(function (error) {
    console.log(error)
  })
```

## Verify Phone OTP

Add the calling of the `VerifyPhoneOTP()` function and pass the OTP and state id received from the `SigninWithPhoneOTP()` function.

```js
let state_id = "Your StateID"
let otp = "Your OTP"

ma.mojoAPI
  .verifyPhoneOTP(otp, state_id)
  .then(response => {
    console.log(response)
  })
  .catch(function (error) {
    console.log(error)
  })
```

## Resend Phone OTP

Add the calling of the `ResendPhoneOTP()` function and pass the state id received from the `SigninWithPhoneOTP()` function.

```js
let state_id = "Your State ID"
let query = {}
query.language = "Your language"

ma.mojoAPI
  .resendPhoneOTP(state_id, query)
  .then(response => {
    console.log(response)
  })
  .catch(function (error) {
    console.log(error)
  })
```

## Verify JWT Token

Add the calling of the `verifyToken()` function and pass the MojoAuth JWT Token to verify the token.

```js
var jwtToken = Your JWT Token";

ma.mojoAPI.verifyToken(jwtToken).then(function (response) {
    console.log(response)
}).catch(function (error) {
    console.log(error)
});
```
