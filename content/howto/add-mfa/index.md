---
title: How To Add Multi Factor Authentication
tags: ["MFA", "Login", "OTP", "SMS","Magiclink"]
description: "A quick implementation guide to configure MFA to authenticate your users."
---

# Get Started - Multi Factor Authentication

This guide explains how to add and configure MFA(multi factor authentication) on your application. You can implement MFA for a secure and convenient approach for consumer registration and login.


## Integrate MFA

MFA (multi-factor authentication) uses more than one authentication factor to verify a user's identity. For Example, you are using email and password for authentication, and now, for more security, you want to add an extra layer in the user authentication cycle. So here we are, mojoauth comes into the picture.

By the below steps, you can add MFA (Email OTP) to your Application in 5 min easily :

Step 1 : Add an authentication feature like an email OTP after the email & password login.

Step 2 : So after the Successful login, prompt MFA login using our [Email OTP API](https://mojoauth.com/docs/api/#send-email-otp).

Step 3 : Users will check OTP in their respective email and enter the OTP in your UI.

Step 4 : After entering the OTP, you can use call [verify email OTP  API](https://mojoauth.com/docs/api/#verify-email-otp), get the access token, and [verify that access token](https://mojoauth.com/docs/howto/handle-jwt-token/) by checking our [docs](https://mojoauth.com/docs/howto/handle-jwt-token/). 

So this is how you can check out our other features like email magic link and phone login as MFA. 

An extra layer of authentication without hassle makes your site data more secure.

## Advantages of multi-factor authentication?

1. Multi-factor authentication increases security with third parties and organizations.
2. It takes away password risks.  
3. It offers a variety of choices to meet your security needs.
4. MFA helps meet regulatory requirements.
5. MFA better controls who has access to your files.

## Keep Reading

[How to Integrate Mailazy to your application?](/howto/integrate-mailazy/)

[How to add SMS Authentication for your application users?](/howto/add-sms-authentication/)

[How to add custom redirection to your application?](/configurations/redirection/)