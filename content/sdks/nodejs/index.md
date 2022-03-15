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

```
var config = {
    apiKey: '<Your API Key>',
};

var ma = require('mojoauth-sdk')(config);
```

## Verify JWT Token

Add the calling of the `verifyToken()` function and pass the MojoAuth JWT Token to verify the token.

```
var jwtToken = Your JWT Token";

ma.mojoAPI.verifyToken(jwtToken).then(function (response) {
    console.log(response)
}).catch(function (error) {
    console.log(error)
});
```
