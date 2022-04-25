---
title: Getting Started - Golang
tags: ["HTML5", "CSS", "JS", "GetStarted"]
description: "A quick implementation guide to use MojoAuth for Passwordless using Golang."
---

# Get Started - Golang

To communicate with MojoAuth you will need some details about the application. These details are required for setup and initiate the implementation of Passwordless Login.

## Getting Credentials

### Register at MojoAuth

Here you just need to follow three simple steps:

- Login to [MojoAuth](https://mojoauth.com/signin) Dashboard:

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

To start Integrating MojoAuth in your web app, add MojoAuth javascript SDK in the head of your webpage and follow the mentioned steps:

```js
<script
  src="https://cdn.mojoauth.com/js/mojoauth.min.js"
  type="text/javascript"
></script>
```

1. Create MojoAuth instance with your api key and pass the source as an object.

```js
const mojoauth = new MojoAuth("Your MojoAuth API Key", {
  language: "language_code",
  redirect_url: "your_redirect_url",
  source: [{ type: "email", feature: "magiclink" }],
})
```

2. To login using Email OTP or SMS Authentication, just change the source object.

```js
{
  language: 'language_code',
  redirect_url: "your_redirect_url",
  source: [{ type: "email", feature: "otp" }],
})
```

**OR**

```js
{
  language: 'language_code',
  redirect_url: "your_redirect_url",
  source: [{ type: "phone", feature: "otp" }],
})
```

> You can also use multiple Authentication methods by passing multiple objects in source Array.

```js
const mojoauth = new MojoAuth("Your MojoAuth API Key", {
  language: "language_code",
  redirect_url: "your_redirect_url",
  source: [
    { type: "email", feature: "magiclink" },
    { type: "phone", feature: "otp" },
  ],
})
```

3. Add the following div on your web page where you want the MojoAuth passwordless login form to be rendered

```js
<div id="mojoauth-passwordless-form"></div>
```

> MojoAuth passwordless login form will be rendered in the above div on your web page

4. Add the MojoAuth passwordless login with the following method. The response would be handled in .then() function.

```js
mojoauth.signIn().then(response => console.log(response))
```

## Example

```js
<!DOCTYPE html>
  <head>
   <script    src="https://cdn.mojoauth.com/js/mojoauth.min.js">
   </script>
  </head>
  <body>
     <div id="mojoauth-passwordless-form"></div>
      <script>
        const mojoauth = new MojoAuth("Your MojoAuth API Key", {
          language: 'language_code',
          redirect_url: "your_redirect_url",
          source: [{ type: "email", feature: "magiclink" }],
        })
        // Use source:[{type: "email", feature: "otp"}] for authentication using Email OTP
        // Use source:[{type: "phone", feature: "otp"}] for authentication using SMS Authentication

        mojoauth.signIn().then(response => console.log(response));
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

## Setup Golang

- Create an empty project with the name `golang-sdk-tutorial` and run the following command in the command line:

  go mod init `golang-sdk-tutorial`

  > Upon completion, it will add a go.mod file in the project folder.

- Create a main file in the project and name it `main.go`.

- Add the following code snippet to the `main.go` file.

```go
package main
import (
  "fmt"
  go_mojoauth "github.com/mojoauth/go-sdk"
  "github.com/mojoauth/go-sdk/api"
  "github.com/mojoauth/go-sdk/mojoerror"
  "log"
)

func main()  {
  PasswordlessAuth()
}

func PasswordlessAuth() {
    // your MojoAuth implementation
}

```

> Note: Make sure you add further code (given in steps below) in place of // your MojoAuth API implementation goes here text mentioned in the above file.

### Install SDK

Add project dependency of MojoAuth SDK by running the following commands in the command line:

go get github.com/mojoauth/go-sdk

Upon installation, you will find MojoAuth Golang SDK in the go.mod.

### Configure Project

Add the MojoAuth dependency in the import section of the main.go file:

```go
    "fmt"
  go_mojoauth "github.com/mojoauth/go-sdk"
  "github.com/mojoauth/go-sdk/api"
  "github.com/mojoauth/go-sdk/mojoerror"
```

Add the following config object in the `main.go` file:

```go
    var errors string

    cfg := go_mojoauth.Config{
    ApiKey:    "MojoAuth API Key"
  }
    mojoClient, err := go_mojoauth.NewMojoAuth(&cfg, map[string]string{"token": "Enter your mojoauth token"})
  if err != nil {
    errors = errors + err.(mojoerror.Error).OrigErr().Error()
    //    respCode = 500
  }

```

### Verify JWT Token

Add the calling of the `VerifyToken()` function and pass the MojoAuth JWT Token to verify the token.

```go
  res, err := api.Mojoauth{mojoClient}.VerifyToken("<Enter Token>")
	if err != nil {
		errors = errors + err.(mojoerror.Error).OrigErr().Error()
		//		respCode = 500
	}
	if errors != "" {
		log.Printf(errors)

		return
	}
	fmt.Println(res.IsValid)

```

## Keep Reading

[How to handle MojoAuth token?](/howto/handle-jwt-token/)
