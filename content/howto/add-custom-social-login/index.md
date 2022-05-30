---
title: Getting Started - Custom Social Login
tags: ["Google", "Facebook", "Apple", "integration", "GetStarted"]
description: "A quick implementation guide to add custom Social Login through API to authenticate your users."
---

# Get Started - Custom Social Login

## Integrate Custom Social Login

You can implement Social Login for a quick and convenient approach for consumer registration and login by following given steps:-

1. Create a button in your preferred UI, and on the button click, call this browser API:--

```
https://api.mojoauth.com/oauth/social?api_key={apiKey}&provider={provider}&redirect_url={redirect_url}

```

<br/>

- **apiKey**: Your MojoAuth API Key
- **provider**: Your configured social login provider name(google, facebook, or apple)
- **redirect_url**: Your whitelisted URL where you want to redirect your users after successful social login.

### Example

```
https://api.mojoauth.com/oauth/social?api_key=1234-5678-1234-5678-1234&provider=google&redirect_url=www.example.com/profile
```

> Redirect URL is a required parameter to configure social login in your application. [Whitelist your domain](/configurations/redirection/) to get social login working on your app.

3. On successful login, you will be redirected to your whitelisted URL with the state ID appended to the search query.

```
https://example.com/profile/?state_id=1234567890
```

<br/>

4. You can catch that state id from the URL and call the **ping/check status** SDK function from the chosen teck stack and pass the state ID to get the authenticated token. You will receive the token in response to the above function.

5. Use the verify token function from the SDK and pass the token to validate the and get the user profile data.

## Supported Social Providers

The following is the list of supported social providers -

- Google

- Facebook

- Apple

We are working on more social login support. If you want a specific social login, please raise a request [here](https://mojoauthassist.freshdesk.com/support/tickets/new).

## Keep Reading

[Node JS SDK](https://mojoauth.com/docs/sdks/nodejs/)

[Golang SDK](https://mojoauth.com/docs/sdks/golang/)

[PHP SDK](https://mojoauth.com/docs/sdks/php/)

[JAVA](https://mojoauth.com/docs/sdks/java/)
