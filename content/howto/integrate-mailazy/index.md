---
title: Integrate Mailazy
tags: ["Mailazy", "integration", "Email White Labeling"]
description: "A quick implementation guide to configure Mailazy to send transactional email to your application users with custom sender name and email."
---

# Integrate Mailazy - White Lable Email

This document provides instructions to configure Mailazy integration to send transactional emails with a custom sender name and email.

## MojoAuth Dashboard Configuration

This section covers the required configurations you need to perform in the MojoAuth Dashboard under Marketplace to configure Mailazy integration.

Log in to your MojoAuth Dashboard account, select your project and navigate to Marketplace.
  The following screen will appear:

<div style="text-align:center">
  <img src="/images/marketplace.png" alt="MojoAuth" />
</div>
<br/>

Click the Add Integrations button, locate Mailazy under the 'All Available Integrations' section and click on the card.

<div style="text-align:center">
  <img src="/images/available-integrations.png" alt="MojoAuth" />
</div>
<br/>

Click on Add Integration button to configure Mailazy as displayed in the below screen:

<div style="text-align:center">
  <img src="/images/mailazy.png" alt="MojoAuth" />
</div>
<br/>

Click the Create User button given next to your email id to create an Account.

<div style="text-align:center">
  <img src="/images/create-account.png" alt="MojoAuth" />
</div>
<br/>

> Note: Your account email id is prefilled here and you cannot change it. It will send an OTP to your email address and also, it automatically creates a Mailazy account if it does not exist for the given email address.

Enter the OTP received on your email id and click the Verify button.

<div style="text-align:center">
  <img src="/images/verify-otp.png" alt="MojoAuth" />
</div>
<br/>

The following screen will appear upon email id verification:

<div style="text-align:center">
  <img src="/images/add-domain.png" alt="MojoAuth" />
</div>
<br/>

Enter your Domain Name and click the Add Domain button. The following screen will appear with CNAME key and value.

<div style="text-align:center">
  <img src="/images/verify-domain.png" alt="MojoAuth" />
</div>
<br/>

Copy the CNAME records and update them on your Domain.

> Sometimes, it might take up to 24 hours to reflect the DNS changes. If verification fails, you should wait and verify later.

Click the Verify button to verify your Domain.


<div style="text-align:center">
  <img src="/images/access-keys.png" alt="MojoAuth" />
</div>
<br/>

Add your From Name and From Email, which you want to use to send Emails from Mailazy and click update.

<div style="text-align:center">
  <img src="/images/mail-name-update.png" alt="MojoAuth" />
</div>
<br/>

> Upon configuration, MojoAuth will start sending white-labeled transactional emails using Mailazy with the given From Name and Email Address.

You can view your added integration under Configured Integrations.

<div style="text-align:center">
  <img src="/images/configured.png" alt="MojoAuth" />
</div>
<br/>

## Keep Reading

[How to handle MojoAuth token?](/howto/handle-jwt-token/)

[How to add Social Login for your application users?](/howto/social-login/)

[How to add custom redirection to your application?](/configurations/redirection/)
