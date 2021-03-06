---
title: Localization
tags: ["HTML5", "CSS", "JS", "GetStarted"]
description: "A quick implementation guide to localizing your project according to country or region."
---

# Localization

This document takes you through the various ways MojoAuth can help you localize your website according to a country or region.

MojoAuth allows customization for all the login, verification screens and Email templates. You can achieve this by passing one `language` param in the script where you are creating the instance of MojoAuth.

```js
const mojoauth = new MojoAuth("Your MojoAuth API Key", {
  language: "it",
  redirect_url: "localhost:5000",
})
```

Get started with our [HTML and JS guide](/guides/html-and-js/), or check out our [APIs](/api/#api-references) if you are implementing MojoAuth using APIs.

## Supported Language

| Language    | Code |
| :-------    | :--- |
| Arabic      | ar   |
| Dutch       | nl   |
| English     | en   |
| Filipino    | ph   |
| French      | fr   |
| German      | de   |
| Indonesian  | id   |
| Italian     | it   |
| Portuguese  | pt   |
| Russian     | ru   |
| Spanish     | es   |
| Turkish     | tr   |

We are working on more language support. If you didn't find yours, please raise a request [here](https://mojoauthassist.freshdesk.com/support/tickets/new).
