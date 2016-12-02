# Single Page Application Boilerplate

This repo can be downloaded and used as a starting point for a new single page web application with [React](https://facebook.github.io/react/), [Redux](http://redux.js.org/) and [Webpack](https://webpack.github.io/).
It is integrated with [React router](https://github.com/ReactTraining/react-router) and [Redux Logger](https://github.com/evgenyrodionov/redux-logger).
[Jasmine](http://jasmine.github.io/) and [Selenium web driver](http://www.seleniumhq.org/projects/webdriver/) are available for unit and system testing.
The boilerplate is designed to be continuously deployed on [Heroku](https://www.heroku.com/) and [CircleCI](https://circleci.com).

## Prerequisites

Get [Node.js](https://nodejs.org/en/).

## Install

Download the [zip package](https://github.com/acasaccia/spa-boilerplate/archive/master.zip) and unpack it.

Move to the project folder:

    $ cd spa-boilerplate

Install dependencies:

    $ npm install

## Serve locally

Run the development server:

    $ npm run dev

The development server will be listening on port 8080. It will automatically:
- detect changes to any of the modules
- repackage the application managing changes incrementally
- refresh the browser

## Test

    $ npm test
    
Will run the specs defined in the `/spec` folder
