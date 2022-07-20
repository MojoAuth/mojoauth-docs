---
title: Getting Started - Bubble.io
tags: ["bubble", "plugin", "integration", "GetStarted"]
description: "A quick implementation guide to use MojoAuth for Passwordless using Bubble.io Integration."
---

# Get Started - Bubble.io

To communicate with MojoAuth, you will need some details about the application. These details are required for setup and initiate the implementation of Passwordless Login.

## Getting Credentials

### Register at MojoAuth

Here you just need to follow three simple steps:

- Login to [MojoAuth](https://mojoauth.com/signin) Dashboard:

<div style="text-align:center">
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

## Bubble Setup

The integration uses two pages, the Index page, and the Members-only(protected) page.

### Install plugin

- Navigate to the Design tab under Input Forms. Click on Install More and install the **Mojoauth Login** plugin as displayed in the below screen.

<div style="text-align:center">
  <img src="/images/Install-New-Plugin.png" alt="Install plugin" />
</div>
<br/>

- Now navigate to the Plugins tab, click Mojoauth Login, and enter the MojoAuth API Key and language as displayed in the below screen.

For language codes, you can check the [localization doc](/configurations/localization/)

<div style="text-align:center">
  <img src="/images/Enter-API-Key.png" alt="Api Key ID" />
</div>
<br/>

- Once the installation is complete, you can find the Mojoauth PasswordLess LoginForm under Input Forms as displayed in the below screen.

<div style="text-align:center">
  <img src="/images/Passwordless-LoginForm.png" alt="Mojoauth Loginform" />
</div>
<br/>

### Index page

Drag and add the login form to your index page. A login form would be visible as displayed in the below screen

<div style="text-align:center">
  <img src="/images/Preview-LoginForm.png" alt="Mojoauth Form Preview" />
</div>
<br/>

Scale your login form to desired height and width and select your authentication method from the box.

<div style="text-align:center">
  <img src="/images/method-select.png" alt="Mojoauth Form Preview" />
</div>
<br/>

> Note:- To use Phone OTP as your authnetication method, Turn on the Twilio integration from the MojoAuth dashboard. Refer [this](/howto/add-sms-authentication) document for more details.

### Protected Page

Create a new page called the **Protected** page.

- Select **Add a new page** by clicking on the top left corner above the **Design** tab as displayed in the below screen.

<div style="text-align:center">
  <img src="/images/Add-a-new-page.png" alt="Add new page" />
</div>
<br/>

- Add a MojoAuth shield component to make this page protected. Find and Drag it from the left panel under the **Visual Elements**.

<div style="text-align:center">
  <img src="/images/MojoAuth-Shield.png" alt="MojoAuth Shield" />
</div>
<br/>

#### Show Protected Content

Add a group from **Containers** and change the name from **Group A** to **Protected Group** by clicking on the top part of the grey box as shown in the screen below.

<div style="text-align:center">
  <img src="/images/group-rename.png" alt="MojoAuth Shield" />
</div>
<br/>

Add all your protected content in that group, including text, buttons, images, and containers.
Make sure to uncheck `This element is visible on page load.` The logic will be added later to the workflow to make sure it is visible on successful login.

<div style="text-align:center">
  <img src="/images/Protected-Group.png" alt="Protected Group" />
</div>
<br/>

#### Show not Logged-in Content

Create another Group and name it `Group Not Logged-In.` just like previous one.

This group will be visible if you do not successfully log in. Add a text message saying **You did not log in** and a link to the index page. Make sure to uncheck `This element is visible on page load.`

<div style="text-align:center">
  <img src="/images/Group-not-logged-in.png" alt="Not logged in Grpoup" />
</div>
<br/>

### Login Logic

Now, let's create the login logic for the index page and protected page.

#### Index Page

When the user logs in, we want to direct them to the protected page.

- Navigate back to the index page by clicking on the top left corner as before.

- Here, go to workflow and add a new element: **Elements > A PasswordlessLogin form - `User_Pressed_Login`.**

<div style="text-align:center">
  <img src="/images/User-pressed-login.png" alt="User pressed login" />
</div>
<br/>

Now, click on the highlighted button in below screen to add an action to go to the **Protected page.**

<div style="text-align:center">
  <img src="/images/add-an-action.png" alt="User pressed login" />
</div>
<br/>

- Select **Action > Navigation > Go to a page**, and set the **protected** page as the destination.
- Enable **Send More Parameters on the page**. We need this to send the access token and email to the protected page.
- Put `access_token` as key and **This Passwordless login form’s access token** as the parameter.
- Put `email` as the key and **This Passwordless login form's email** as the parameter.

<div style="text-align:center">
  <img src="/images/Sending-access-token-and-email.png" alt="Send Data" />
</div>
<br/>

#### Protected Page

Here, we need to show the **Protected** content if the user successfully logs in, otherwise, show the **Not Logged In** content. Let's create a workflow for that.

- Navigate back to the protected page by clicking on the top left, and click workflow.
- Add an **Event** > **Elements** > **A MojoAuth Shield is loaded**. This enables us to take action whenever the Protected page is loaded.
- Then add an **Action** > **Plugins** > **Verify Token**

On this page, we will take data sent from the index page as the parameters.

- Set `access_token` as **Get data from page URL** and add the parameter name as `access_token`
- Set `email` as **Get data from page URL** and add the parameter name as `email`

<div style="text-align:center">
  <img src="/images/Verify-token.png" alt="Verify Token" />
</div>
<br/>

Now let's quickly create the logic to show the protected content when the user successfully logs in.

- Add another **Action** > **Element Actions** > **Show.**
- Then set the element as our Group Protected Content, and set **Only when: Result of Step 1 (Verify Token)'s logged_in is yes.**

<div style="text-align:center">
  <img src="/images/Show-protected-group.png" alt="Show protected Group" />
</div>
<br/>

To create the logic when the user fails to log in,

- Add another **Action** > **Element Actions** > **Show.**
- Then set the element as our Group Not Logged In, and set **Only when: Result of Step 1 (Check Logged-In) logged_in is no.**

<div style="text-align:center">
  <img src="/images/Show-group-not-logged-in.png" alt="Show not logged in group" />
</div>
<br/>

### LogOut Button

Now let's create a logout button to log the user out of the website.

- On the protected page, find the button on the left side of the page under the designs tab and drag it on the **Protected Page.**
- Make sure you uncheck `This element is visible on page load.`
  We want to show this button only if the user logs in. Continuing to the workflow above,
- Add another action by clicking on the **Action** > **Element Actions** > **Show.** just like the previous one.
- Set the **Button LogOut** as the element, and show **Only when: Result of Step 1 (Verify Token) logged_in is yes.**

This functionality would render the button only if the user gets logged in.

<div style="text-align:center">
  <img src="/images/Show-logout-button.png" alt="Logout Button" />
</div>
<br/>

#### Logout User

Finally, let's create the workflow of the Logout button.

- Go to **Workflow** and add another event **Event** > **Element** > **An element is clicked** beside the previously created event **A MojoAuth Shield is loaded** as shown in the image below.

<div style="text-align:center">
  <img src="/images/logout-element.png" alt="Logout element" />
</div>
<br/>

- Select **Log out Button** as the element.
- Then add an **Action** > **Navigation** > **Go to a page** under the same event and select the index page.

This will redirect you to the index page and log you out.
