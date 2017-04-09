# ChatApp

## Description
An app that allows users to chat with each other and log in with their Google accounts.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Setup
* clone repository from https://github.com/sleahy115/chat-app-js.git
* `npm install -g @angular/cli`
* ` cd chat-app-js`
* `npm install`
* `ng-serve`
*  To add firebase...
   * `touch api-keys.ts` in the app folder
   * go to  https://firebase.google.com/ to set up an account
   * create a project in firebase called chat-app-js
   * select the option to add firebase to web app
   * copy the information from the pop up into the api-keys.ts file
   * code example- in src/app-keys.ts
   `export var masterFirebaseConfig = {
      apiKey: "xxxx",
      authDomain: "xxxx.firebaseapp.com",
      databaseURL: "https://xxxx.firebaseio.com",
      storageBucket: "xxxx.appspot.com",
      messagingSenderId: "xxxx"
    };`
    * add the api-keys file to the gitignore file.

## Technologies used
* Angular 2 CLI -https://cli.angular.io/
* Bootstrap -http://getbootstrap.com/
* Firebase -https://firebase.google.com/
* Node JS -https://nodejs.org/en/

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

Copyright (c) 2017 Sarah Leahy  All Rights Reserved.
