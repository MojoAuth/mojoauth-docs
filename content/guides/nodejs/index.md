---
title: Getting Started - NodeJS
tags: ["HTML5", "CSS", "JS", "GetStarted"]
description: "A quick implementation guide to use MojoAuth for Passwordless using NodeJS."
---

# Get Started - NodeJS

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

To start Integrating MojoAuth in your web app, add MojoAuth javascript sdk in the head of your webpage and follow below mentioned steps:

```js
<script
  src="https://cdn.mojoauth.com/js/mojoauth.min.js"
  type="text/javascript"
></script>
```

1. Create MojoAuth instance with your apikey

```js
const mojoauth = new MojoAuth("Your API Key")
```

2. Add the following div on your web page where you want the MojoAuth passwordless login form to be rendered

```js
<div id="mojoauth-passwordless-form"></div>
```

> MojoAuth passwordless login form will be rendered in the above div on your web page

3. Add the MojoAuth passwordless login using **Magic Link** with the following method. The response would be handled in .then() function.

```js
mojoauth.signInWithMagicLink().then(response => console.log(response))
```

**or**

4. Add the MojoAuth passwordless login using **Email OTP** with the following method. The response would be handled in .then() function.

```js
mojoauth.signInWithEmailOTP().then(response => console.log(response))
```

## Example

```js
<!DOCTYPE html>
  <head>
   <script    src="https://cdn.mojoauth.com/js/mojoauth.min.js">
   </script>
  </head>
  <body>
     <h2>MojoAuth Demo </h2>
     <div id="mojoauth-passwordless-form"></div>
      <script>
        const mojoauth = new MojoAuth("Your API Key");
        // Use signInWithEmailOTP() for authentication using Email OTP
        mojoauth.signInWithMagicLink().then(response => console.log(response));
      </script>

  </body>
</html>
```

## Mojouth Passwordless Login Flow

After completing the above steps the following will be the flow of passwordless login in your web application.

### MojoAuth Login Interface

- User will enter their email address to receive a link to login to their email address.

<div style="text-align:center">
  <img src="../../assets/common-images/company.png" alt="Company" />
</div>
<br/>

- On clicking the magic link user will be successfully logged into the web application.

<div style="text-align:center">
  <img src="../../assets/common-images/magic-link.png" alt="Magic Link" />
</div>
<br/>

## MojoAuth Token

After successful authentication, MojoAuth provides a JWT Token. You can use this token for your further implementation. MojoAuth also provides the way you can verify the authenticity of this token using MojoAuth NodeJS SDK.

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

### Install SDK

Add project dependency and MojoAuth SDK using npm by running the following command in the command line:

```
npm install express body-parser mojoauth-sdk
```

Upon installation, you will find MojoAuth Node.js SDK under the node module.

### Configure Project

```
var config = {
    apiKey: '<Your API Key>',
};

var ma = require('mojoauth-sdk')(config);
```

### Verify JWT Token

Use the MojoAuth `verifyToken()` Method to verify the MojoAuth JWT token.

```
var jwtToken = "<Your JWT Token>";

ma.mojoAPI.verifyToken(jwtToken).then(function (response) {
    console.log(response)
}).catch(function (error) {
    console.log(error)
});
```

## Keep Reading

[How to handle MojoAuth token?](/resources/jwt-token/)
