# Home automation App - PoC
<p align="center">
  A proof of concept for an home automation App
</p>

- [About](#about)
- [Getting Started](#getting-started)
- [How It Works ( concepts )](#how-it-works)

## About

This proof of concept aims to showcase a possible approach for an Home Automation app. 
Some features have only been sketched (e.g. loading UI, error message UI) for matter of time. I've put more focus on the big picture rather than implementation details.

### What technologies have I used for this PoC?
-	Web Components
-	Typescript
-	Css Modules (scss)
-	Webpack
-	Mock Service Worker
-	Oauth 2.0 PKCE (mocked and simplified. i.a. I didn't implement refresh token and token validation)
-	JWT

### What programming paradigms and patterns are showcased in this sample?

-	Really simple Redux like pattern implementation based on Pub/Sub and event streams
-	Functional programming
-	Object oriented programming
-	Singleton pattern
-	Component based architecture ( container/presentational, component composition )


### What does the repo look like?

Here below the folder structure:

```
app/
  assets/ -> /* static assets */
  components/ -> /* container components */
    authenticate/
    login/
    not-found/
    room-settings/
    rooms/
  lib/ -> /* library with core components and services */
    api/ -> /* data model of request/responses and service that call apis */ 
    core/ -> /* base component, components registry, router, auth service */
    store/ -> /* application state management */
    ui/ -> /* presentational components */
  styles/ -> /* application theme */
```

## Getting Started

Let's start by executing a couple of commands from the root of the project.

```
npm install
npm start
```

## <div id="how-it-works">How It Works ( Concepts )</div>

The overall idea is to have our application communicating with a central hub service in the cloud where our application and our home hardware devices are connected to and can talk through that to each other.
In my concept this hub in the cloud can be reached via this imaginary endpoint: https://adobe.home-central-hub.com/v1 and it exposes three endpoint  `sync` `query` and `execute`.

### Assumptions
For my demo I've made the assumption that my devices/rooms were already created/added to the cloud central hub.

### How does the app works?
When a user launch the app, it checks if a user is logged in. If not it kicks off an Oauth 2.0 PKCE flow with authorization code flow. 

The user log in and gets redirected to the `/authenticate` route. From there an access token and an id token get requested. The first get stored in the auth service to be sent in the headers together with each request to the central hub api, the latter it gets parsed, and the user data taken out of it is stored in the application state.

After this authentication process the user gets redirected to the `/rooms` route. 
Worth to mention that the root component `HomeAutomationApp` listen to `RouteChange` event stream and check whether the user is logged in and haven't performed a devices sync yet.

If this is the case it performs a devices sync operation by calling the `/sync` api. That means basically that it gets a list, kind of a schema, of all available devices in the house and store it in the app state as well as a list of rooms that have devices.

So after the sync operation a list of links with rooms are presented to the user and by clicking on them a redirection is performed to `/room-settings?room=room_name` where the details of the devices for that particular room is shown, and the user has the possibility to turn on/off the lights of the room and adjust the temperature. 

The device details data is fetched from the `/query` endpoint and the action of turning on/off a light or adjust the temperature is performed via the `/execute` api.

### Browser support

I've tested it on Chrome and Edge latest version, but might be working also in other browsers like Safari and Firefox.
