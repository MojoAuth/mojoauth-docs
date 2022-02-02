---
title: Getting Started - Mailazy
tags: ["Mailazy", "integration", "GetStarted"]
description: "A quick implementation guide to configure Mailazy to send transactional email to your application users."
---

# GetStarted - Mailazy

This document provides instructions to configure Mailazy integration for sending out transactional emails.

## MojoAuth Dashboard Configuration

This section covers the required configurations that you need to perform in the MojoAuth Dashboard under Marketplace for configuring Mailazy integration.

1. Log in to your MojoAuth Dashboard account, select your app and navigate to Marketplace.
   The following screen will appear:

<div style="text-align:center">
  <img src="/images/marketplace.png" alt="MojoAuth" />
</div>
<br/>

2. Click the Add Integrations button, locate Mailazy under the 'All Available Integrations' section and click on the card.

<div style="text-align:center">
  <img src="/images/available-integrations.png" alt="MojoAuth" />
</div>
<br/>

The following screen will appear:

<div style="text-align:center">
  <img src="/images/mailazy.png" alt="MojoAuth" />
</div>
<br/>

3. Click on Add Integration button to configure Mailazy.

4. Click the Create User button given next to your email id to create an Account.

<div style="text-align:center">
  <img src="/images/create-account.png" alt="MojoAuth" />
</div>
<br/>

> Note: Your account email id is prefilled here and you cannot change it. Also, it automatically creates a Mailazy account, if it does not exist for the given email address.
> An OTP will be sent to your email id.

5. Enter OTP received on your email id and click the Verify button.

<div style="text-align:center">
  <img src="/images/verify-otp.png" alt="MojoAuth" />
</div>
<br/>

> Note: Click the Resend OTP link to receive another OTP.

The following screen will appear upon email id verification:

<div style="text-align:center">
  <img src="/images/add-domain.png" alt="MojoAuth" />
</div>
<br/>

6. Enter your Domain Name and click the Add Domain button. The following screen will appear with CNAME key and value.

<div style="text-align:center">
  <img src="/images/verify-domain.png" alt="MojoAuth" />
</div>
<br/>

7. Copy the CNAME records and update them on your Domain.

> Note: Sometimes it might take up to 24 hours to reflect the DNS changes. If verification fails, you should wait and verify later.

8. Click the Verify button to verify your domain.

9. Upon successful verification, it generates Key and Secret that you can use to configure Mailazy as SMTP provider in MojoAuth. The configuration has been explained below.

> Note: You can use generated Key and Secret to integrate Mailazy for sending emails in any application.

> Note: Make sure to copy Key and Secret. To get these values later, you will have to regenerate/reset.

> If you reset API Key and Secret, any API calls you have developed will stop working until you update them with new values.

10. Add your From Name and From Email which you want to use in sending Emails from Mailazy and click update.

You can view your added integration under Configured Intergations.
