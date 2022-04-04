---
title: Getting Started - React App
tags: ["HTML5", "CSS", "JS", "GetStarted", "React"]
description: "A quick implementation guide to use MojoAuth for Passwordless using Create React App"
---

# Get Started - React

To communicate with MojoAuth you will need some details about the application. These details are required for setup and initiate the implementation of Passwordless Login.

## Getting Credentials

### Register at MojoAuth

Here you just need to follow three simple steps:

- Login to [MojoAuth](https://mojoauth.com/signin) Dashboard:

<div id="mojoauth-preview "style="text-align:center">
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

- Swtich webauthn on from the settings tab on the dashboard. Then choose the type of Authenticator you want to select for webAuthn.

<div style="text-align:center">
  <img src="../../assets/common-images/webauthn-config.png" alt="webauthn config" />
</div>
<br/>

## Integrate MojoAuth

To start Integrating MojoAuth in react, first create a react app using create-react-app and follow the following steps:

```
npm install create-react-app
```

1. Install MojoAuth npm module to creact a MojoAuth instance.

```
npm install mojoauth-web-sdk
```

2. Import React from 'React' in your App component.

```jsx
import React from "react"
```

3. Import MojoAuth from 'mojoauth-web-sdk' in your App Component.

```jsx
import MojoAuth from "mojoauth-web-sdk"
```

4. Use the UseState hook to create a state that would hold the user data after login. Set the initial state to null.

```jsx
const [payload, setPayload] = React.useState(null)
```

> You can manage your data/state using react core APIs like context and useState or with any of the state management frameworks like Redux, MobX etc for complex data structures.

5. Create the MojoAuth instance using your API Key obtained from your MojoAuth dashboard in the Login component,and pass the source object.

```jsx
React.useEffect(() => {
  const mojoauth = new MojoAuth("Your MojoAuth API Key", {
    language: "language_code",
    redirect_url: "your_redirect_url",
    source: [{ type: "email", feature: "magiclink" }],
  })
}, [])
```

6. To login using Email OTP or SMS Authentication, just change the source object.

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

7. Add the following div on your return function where you want the MojoAuth passwordless login form to be rendered.

```jsx
<div id="mojoauth-passwordless-form"></div>
```

> MojoAuth passwordless login form will be rendered in the above div on your web page.

8. Add the MojoAuth passwordless login in the useEffect hook below the instance. Set the response to payload using setPayload in .then() function.

```jsx
mojoauth.signIn().then(payload => {
  setPayload(payload)
})
```

9. After you have been logged in, enable WebAuthn form will be rendered if you have enabled it in your MojoAuth dashboard.

<div style="text-align:center">
  <img src="../../assets/common-images/webauthn.png" alt="Company" />
</div>
<br/>

> You can enable webauthn here or you can skip it to log in to your web application. After enabling webauthn, the prompt to enter your Security Key/Fingerprint will appear. As soon as you enter your key/fingerprint, your device will be registered and you will be logged in.

The next time you log in, you will directly be prompted to enter the key/fingerprint. After verifying you will be logged in.

10. Display the user data in JSON format using the payload state in the return function after the user is successfully logged in.

```jsx
<pre>{JSON.stringify(payload, null, 4)}</pre>
```

## Example

```jsx
import React from "react"
import MojoAuth from "mojoauth-web-sdk"

function App() {
  const [payload, setPayload] = React.useState(null)

  //  1 Initialize and show the form
  React.useEffect(() => {
    const mojoauth = new MojoAuth("Your MojoAuth API Key", {
      language: "language_code",
      redirect_url: "your_redirect_url",
      source: [
        { type: "email", feature: "magiclink" },
        { type: "phone", feature: "otp" },
      ],
    })
    mojoauth.signIn().then(payload => {
      setPayload(payload)
    })
  }, [payload])

  return (
    <div>
      {/*  2 Put a <div> that will contain the form */}
      <div id="mojoauth-passwordless-form" />

      <pre>{JSON.stringify(payload, null, 4)}</pre>
    </div>
  )
}

export default App
```

## Mojouth Passwordless Login Flow

After completing the above steps the following will be the flow of passwordless login in your web application.

### MojoAuth Login Interface

- User will enter their email address and if they have enabled webauthn they will be asked to verify their security key/fingerprint

<div style="text-align:center">
  <img src="../../assets/common-images/company.png" alt="Company" />
</div>
<br/>

- After successfully verifying their security key/fingerprint, they will be logged into their web application.

- Alternatively, they can opt to receive a link to login to their email address. On clicking the magic link user will be successfully verified and logged into the web application.

<div style="text-align:center">
  <img src="../../assets/common-images/magic-link.png" alt="Magic Link" />
</div>
<br/>

## Enabling WebAuthn for logged-in user

- If the user skips enabling webauthn for the first time, 'Enable webauthn' function can be used to trigger webauthn registration once they have logged in

```js
mojoauth.enableWebauthn(payload.oauth.access_token)
```

- Access token would be available in the payload after successful login.

## Keep Reading

[How to handle MojoAuth token?](/howto/handle-jwt-token/)
