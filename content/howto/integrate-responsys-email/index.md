---
title: Integrate Oracle Responsys Email
tags: ["Login", "Email", "Oracle", "Responsys"]
description: "A quick implementation guide to configure Oracle Responsys Email to send transactional email to your application users with custom sender name and email."
---

# Get Started - Oracle Responsys Email

This guide explains adding and configuring the Oracle Responsys Email to your application using MojoAuth Dashboard. You can implement Email Authentication using Responsys Email for a quick and convenient consumer registration and login approach.

## Dashboard Configuration

#### Sign in to your MojoAuth Account

After signing in to your [MojoAuth Account](https://mojoauth.com/dashboard/overview), navigate to Marketplace and click on Add Integrations.

<div style="text-align:center">
  <img src="./images/marketplace.png" alt="Company" />
</div>
<br/>

#### Select Responsys Email Provider

Pick the Email provider you want to integrate into your application.

<div style="text-align:center">
  <img src="./images/integrations.png" alt="Company" />
</div>
<br/>

#### Configure Responsys Email

Click on Add Integration to configure Responsys Email.

<div style="text-align:center">
  <img src="./images/oracle-responsys-email.png" alt="Company" />
</div>
<br/>

To get your Responsys Email credentials, create your campaign on Oracle Responsys Email.

The very first REST API request needs to authenticate to a specific Responsys account using a username and a password or certificates. Enter your Campaign Name, Username and password to allow MojoAuth to send transactional Emails to your users.

<div style="text-align:center">
  <img src="./images/responsys-email-credentials.png" alt="Company" />
</div>
<br/>

This is the sample request body we send to your campaign. You can access the magic link using the MOJO_LINK variable.

```json
"mergeTriggerRecordData": {
          "mergeTriggerRecords": [
              {
                  "fieldValues": [
                      "example@mojoauth.com",
                      "I"
                  ],
                  "optionalData": [
                  {
                      "name": "MOJO_LINK",
                      "value": "https://api.mojoauth.com/users/magiclink/verify?api_key=xxxxxxxxx&state_id=xxxxxxxxx&magictext=xxxxxxxxxx"
                  },
              ]

              },

         ],
        "fieldNames": [
              "EMAIL_ADDRESS_",
              "EMAIL_PERMISSION_STATUS_"
         ]
      },
```

## Integrate Email Authentication

To start Integrating MojoAuth in your web app, add MojoAuth javascript SDK at the head of your webpage and follow the mentioned steps:

```js
<script
  src="https://cdn.mojoauth.com/js/mojoauth.min.js"
  type="text/javascript"
></script>
```

- Create MojoAuth instance with your apikey

```js
config = {
  language: "en",
  redirect_url: "http://localhost:8080/test",
  source: [{ type: "email", feature: "magiclink" }],
}

const mojoauth = new MojoAuth("Your API Key", config)
mojoauth.signIn().then(response => console.log(response))
```

> Localize your website according to a country or region, checkout [Localization](/configurations/localization/) guide for more details.

> In case multiple sources are required, pass the source in the array.

```js
config = {
  language: "en",
  redirect_url: "http://localhost:8080/test",
  source: [
    { type: "email", feature: "magiclink" },
    { type: "phone", feature: "otp" },
  ],
}
```

- Add the following div on your web page where you want the MojoAuth passwordless login form to be rendered

```js
<div id="mojoauth-passwordless-form"></div>
```

> MojoAuth passwordless login form will be rendered in the above div on your web page.

- Add the MojoAuth passwordless login using **Email Authentication** with the following method. The response would be handled in the .then() function.

```js
mojoauth.signIn().then(response => console.log(response))
```

### Example

```js
<!DOCTYPE html>
  <head>
   <script    src="https://cdn.mojoauth.com/js/mojoauth.min.js">
   </script>
  </head>
  <body>
     <div id="mojoauth-passwordless-form"></div>
      <script>
    config = {
            language: "en",
            redirect_url: "http://localhost:8080/test",
            source: [ { type : 'email' , feature : 'magiclink' } ],
        }
    const mojoauth = new MojoAuth( "API_KEY", config);
    mojoauth.signIn().then( response => {

            console.log( response )
        } );
      </script>
  </body>
</html>
```

## Keep Reading

[How to handle MojoAuth token?](/howto/handle-jwt-token/)

[How to add custom redirection to your application?](/configurations/redirection/)

[How to add Social Login for your application users?](/howto/social-login/)
