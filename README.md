# Mike Miller Violin Version 2.0

## Website

mikemillerviolin.com

## Description

A website to showcase Mike Miller as a performer and educator, provide links to listen and engage with Miller, and inform clients of future performances/events.

## Deployment

Two forms of deployment are available, either through a server-based hosting service or static hosting.  
The current deployed version is a static build.

### Server-Side Deployment

1. create a local copy of this repo and install dependencies

```console
git clone git@github.com:mimi5930/mike-miller-violin-v2.git
```

```console
npm install
```

2. In the root directory create a .env file with the following fields:

```
# react
REACT_APP_STATIC_BUILD=false

# google-calendar auth
CLIENT_EMAIL=#google service account
PRIVATE_KEY=#private key provided with your service account
CALENDAR_ID=#the calendar events are pulled from

# node-mailer auth
SERVICE=#mail service for sending an email
USER=#username for email service
PW=#password for email service
ADMIN=#admin for email service
```

- for information regarding these fields review documentation for [Google Calendar API](https://developers.google.com/calendar/api/guides/overview) and [Node Mailer](https://nodemailer.com/).

3. Run Development Server

- To exclusively run the back-end of this project, run the following script in the root directory

```console
npm start
```

- To run the project with a front-end, run the following script in the root directory

```console
npm run develop
```

### Static Deployment

1. create a local copy of this repo and install dependencies

```console
git clone git@github.com:mimi5930/mike-miller-violin-v2.git
```

```console
npm install
```

2. In the root directory create a .env file with the following fields:

```
# react
REACT_APP_STATIC_BUILD=true

# google-calendar auth
CLIENT_EMAIL=#google service account
PRIVATE_KEY=#private key provided with your service account
CALENDAR_ID=#the calendar events are pulled from

```

- for information regarding these fields review documentation for [Google Calendar API](https://developers.google.com/calendar/api/guides/overview).
