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
    mojoClient, err := go_mojoauth.NewMojoAuth(&cfg, map[string]string{"token": "Enter your mojoauth token"})
    if err != nil {
        errors = errors + err.(mojoerror.Error).OrigErr().Error()
        //      respCode = 500
    }

```

## Verify JWT Token

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
