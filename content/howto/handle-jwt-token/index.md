---
title: Handle Token
description: "A quick implementation guide to handle mojoauth token."
---

# Handle MojoAuth Token

## MojoAuth Access Token

After successful authentication, MojoAuth provides a JWT Token that is signed using asymmetric signing method RS256 with your own Secret Key. You can use this token for your further implementation. MojoAuth also provides the way you can verify the authenticity of this token.

## How to Verify Token

You can send the access token to your backend server in the header of your request and use a verify function in your middleware so it automatically handles the verification for each of your routes(where it is needed).

### MojoAuth Library

You can also verify JWT Token using the MojoAuth libraries.

- [NodeJS Library](/sdks/nodejs/)

- [Golang Library](/sdks/golang/)

- [Java Library](/sdks/java)

- [PHP Library](/sdks/php/)

- [ASP.Net Library](/sdks/asp-dot-net/)

