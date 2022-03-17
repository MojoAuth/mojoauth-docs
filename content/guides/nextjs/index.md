---
title: Getting Started - Next JS App
tags: ["HTML5", "CSS", "JS", "GetStarted", "React", "Nextjs"]
description: "A quick implementation guide to use MojoAuth for Passwordless using Create Next App"
---

# Get Started - Next JS

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

To start Integrating MojoAuth in NextJS, first create a next app using create-next-app and follow the given steps:

```
npm install create-next-app
```

Install MojoAuth npm module to create a MojoAuth instance.

```
npm install mojoauth-web-sdk
```

### Login component

Create a Login component in your pages folder called `login.js` and do the following:-

1. Import React from 'react' in your Login component.

```jsx
import React from "react"
```

2. Import MojoAuth from 'mojoauth-web-sdk' in your Login Component.

```jsx
import MojoAuth from "mojoauth-web-sdk"
```

3. You can use the UseState hook to create a state that would hold the user data after login. Set the initial state to null.

```jsx
const [payload, setPayload] = React.useState(null)
```

> You can manage your data/state using react core APIs like context and useState or with any of the state management frameworks like Redux, MobX etc. for complex data structures.

4. Create the MojoAuth instance using your API Key obtained from your MojoAuth dashboard in the Login component.

```jsx
React.useEffect(() => {
  const mojoauth = new MojoAuth("Your MojoAuth API Key") // 👈 Specify your API KEY ID here
}, [])
```

5. Add the following div on your return function where you want the MojoAuth passwordless login form to be rendered.

```jsx
<div id="mojoauth-passwordless-form"></div>
```

> MojoAuth passwordless login form will be rendered in the above div on your web page.

6. Add the MojoAuth passwordless login using **Magic Link** in the useEffect hook below the instance. Set the response to payload using setPayload in .then() function.

```jsx
mojoauth.signInWithMagicLink().then(payload => {
  setPayload(payload)
})
```

**or**

6. Add the MojoAuth passwordless login using **Email OTP** in the useEffect hook below the instance. Set the response to payload using setPayload in .then() function.

```jsx
mojoauth.signInWithEmailOTP().then(payload => {
  setPayload(payload)
})
```

7. After you have been logged in, enable WebAuthn form will be rendered if you have enabled it in your MojoAuth dashboard.

<div style="text-align:center">
  <img src="../../assets/common-images/webauthn.png" alt="Company" />
</div>
<br/>

> You can enable webauthn here or you can skip it to log in to your web application. After enabling webauthn, the prompt to enter your Security Key/Fingerprint will appear. As soon as you enter your key/fingerprint, your device will be registered and you will be logged in.

The next time you log in, you will directly be prompted to enter the key/fingerprint. After verifying you will be logged in.

8. Display the user data in JSON format using the payload state in the return function after the user is successfully logged in.

```jsx
<pre>{JSON.stringify(payload, null, 4)}</pre>
```

#### Example

```jsx
import React from "react"
import MojoAuth from "mojoauth-web-sdk"

function Login() {
  const [payload, setPayload] = React.useState(null)

  //  1 Initialize and show the form
  React.useEffect(() => {
    const mojoauth = new MojoAuth("Your MojoAuth API Key") // 👈 Specify your API KEY ID here
    mojoauth.signInWithMagicLink().then(payload => {
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

export default Login
```

### MyApp component

1. Now in the MyApp component, import the `dynamic` module from the next library.

```jsx
import dynamic from "next/dynamic"
```

2. Dynamically import the Login component with ssr value set to false to avoid server side rendering error in NextJS.

```jsx
const Login = dynamic(() => import("./login"), {
  ssr: false,
})
```

Return the Login Component along with your other components.

```jsx
return (<Login/>
        ...)
```

#### Example

```jsx
import dynamic from "next/dynamic"

function MyApp({ Component, pageProps }) {
  const Login = dynamic(() => import("./login"), {
    ssr: false,
  })
  return <Login />
}

export default MyApp
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
