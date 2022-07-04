---
title: Verify JWT Token - Golang
description: "A quick implementation guide to verify MojoAuth token using Golang SDK."
---

# Golang SDK

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

## Install SDK

Add project dependency of MojoAuth SDK by running the following commands in the command line:

go get github.com/mojoauth/go-sdk

Upon installation, you will find MojoAuth Golang SDK in the go.mod.

## Configure Project

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
    mojoClient, err := go_mojoauth.NewMojoAuth(&cfg)
    if err != nil {
        errors = errors + err.(mojoerror.Error).OrigErr().Error()
        //      respCode = 500
    }

```

## Sign In With Magic Link

Add the calling of the `SigninWithMagicLink()` function and pass the Email and optional query parameters to send the magiclink.

```go
    body := map[string]string{
        "email" : "Your Email",
    }
    queryParams := map[string]string{
        "language" : "Your language",
        "redirect_url" : "Your redirect URL",
    }
    res, err := api.Mojoauth{mojoClient}.SigninWithMagicLink(body, queryParams)
	if err != nil {
		errors = errors + err.(mojoerror.Error).OrigErr().Error()
		//		respCode = 500
	}
	if errors != "" {
		log.Printf(errors)

		return
	}
	fmt.Println(res.Body)

```

## Ping Status

Add the calling of the `PingStatus()` function and pass the state id received from the `SigninWithMagicLink()` function.

```go

    body := map[string]string{
        "state_id" : "Your StateID",
    }
    res, err := api.Mojoauth{mojoClient}.PingStatus(body)
	if err != nil {
		errors = errors + err.(mojoerror.Error).OrigErr().Error()
		//		respCode = 500
	}
	if errors != "" {
		log.Printf(errors)

		return
	}
	fmt.Println(res.Body)

```

## Resend Magic Link

Add the calling of the `ResendMagicLink()` function and pass the state id received from the `SigninWithMagicLink()` function.

```go
    body := map[string]string{
        "state_id" : "Your StateID",
    }
    res, err := api.Mojoauth{mojoClient}.ResendMagicLink(body)
	if err != nil {
		errors = errors + err.(mojoerror.Error).OrigErr().Error()
		//		respCode = 500
	}
	if errors != "" {
		log.Printf(errors)

		return
	}
	fmt.Println(res.Body)

```

## Sign In With Email OTP

Add the calling of the `SigninWithEmailOTP()` function and pass the Email and optional query parameters to send the OTP.

```go

    body := map[string]string{
        "email" : "Your Email",
    }
    queryParams := map[string]string{
        "language" : "Your language",
    }

    res, err := api.Mojoauth{mojoClient}.SigninWithEmailOTP(body,queryParams)
	if err != nil {
		errors = errors + err.(mojoerror.Error).OrigErr().Error()
		//		respCode = 500
	}
	if errors != "" {
		log.Printf(errors)

		return
	}
	fmt.Println(res.Body)

```

## Verify Email OTP

Add the calling of the `VerifyEmailOTP()` function and pass the OTP and state id received from the `SigninWithEmailOTP()` function.

```go

    body := map[string]string{
        "state_id" : "Your StateID",
        "otp" : "Your OTP",
    }
    res, err := api.Mojoauth{mojoClient}.VerifyEmailOTP(body)
	if err != nil {
		errors = errors + err.(mojoerror.Error).OrigErr().Error()
		//		respCode = 500
	}
	if errors != "" {
		log.Printf(errors)

		return
	}
	fmt.Println(res.Body)

```

## Resend Email OTP

Add the calling of the `ResendEmailOTP()` function and pass the state id received from the `SigninWithEmailOTP()` function.

```go


    body := map[string]string{
        "state_id" : "Your StateID",
    }
    res, err := api.Mojoauth{mojoClient}.ResendEmailOTP(body)
	if err != nil {
		errors = errors + err.(mojoerror.Error).OrigErr().Error()
		//		respCode = 500
	}
	if errors != "" {
		log.Printf(errors)

		return
	}
	fmt.Println(res.Body)

```

## Sign In With Phone OTP

Add the calling of the `SigninWithPhoneOTP()` function and pass the phone number and optional query parameters to send the OTP.

```go

    body := map[string]string{
        "phone" : "Your Phone", // pass the phone number in the international format e.g for US, +1XXXXXXXXXX
    }
    queryParams := map[string]string{
        "language" : "Your language",
    }
    res, err := api.Mojoauth{mojoClient}.SigninWithPhoneOTP(body, queryParams)
	if err != nil {
		errors = errors + err.(mojoerror.Error).OrigErr().Error()
		//		respCode = 500
	}
	if errors != "" {
		log.Printf(errors)

		return
	}
	fmt.Println(res.Body)

```

## Verify Phone OTP

Add the calling of the `VerifyPhoneOTP()` function and pass the OTP and state id received from the `SigninWithPhoneOTP()` function.

```go

    body := map[string]string{
        "state_id" : "Your StateID",
        "otp" : "Your OTP",
    }
    res, err := api.Mojoauth{mojoClient}.VerifyPhoneOTP(body)
	if err != nil {
		errors = errors + err.(mojoerror.Error).OrigErr().Error()
		//		respCode = 500
	}
	if errors != "" {
		log.Printf(errors)

		return
	}
	fmt.Println(res.Body)

```

## Resend Phone OTP

Add the calling of the `ResendPhoneOTP()` function and pass the state id received from the `SigninWithPhoneOTP()` function.

```go

    body := map[string]string{
        "state_id" : "Your StateID",
    }
    res, err := api.Mojoauth{mojoClient}.ResendPhoneOTP(body)
	if err != nil {
		errors = errors + err.(mojoerror.Error).OrigErr().Error()
		//		respCode = 500
	}
	if errors != "" {
		log.Printf(errors)

		return
	}
	fmt.Println(res.Body)

```

## Verify JWT Token

Add the calling of the `VerifyToken()` function and pass the MojoAuth JWT Token to verify the token.

```go
    res, err := api.Mojoauth{mojoClient}.VerifyToken("Enter Token")
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
