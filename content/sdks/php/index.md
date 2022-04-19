---
title: Verify JWT Token - PHP
description: "A quick implementation guide to verify MojoAuth token using PHP."
---

# PHP SDK

## Setup PHP

To add the sdk in your PHP project you can download or pull the mojoauth php-sdk from the [github repo](https://github.com/MojoAuth/mojoauth-php), and configure it using your MojoAuth API KEY.

### Configure Project

```PHP
<?php

require_once(__DIR__."mojoAuthAPI.php");

// Get your MojoAuth API Key from MojoAuth Dashboard
$mojoAuth = new mojoAuthAPI("Your MojoAuth API Key");
```

### Verify JWT Token

Use the MojoAuth `verifyToken()` Method to verify the MojoAuth JWT token.

```PHP

//Step 1 Get Public Key / Certificate from MojoAuth Server

$result = $mojoAuth->getPublicKey();
$publicKey = json_decode($result['response']);

//Step 2 Pass JWT token and publickey to verify user
$userProfileData = $mojoAuth->getUserProfileData($access_token, $publicKey->data)

```
