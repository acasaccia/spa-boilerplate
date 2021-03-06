If you are looking for a quick and painless way to start a React application, please look no further and head to [`create-react-app`](https://github.com/facebookincubator/create-react-app). This repository is the result of my research about React, Webpack, Redux and their seamless integration with CircleCI and Heroku. [`create-react-app`](https://github.com/facebookincubator/create-react-app) is awesome for starting, but baking my own solution gave me deeper understanding of the technologies involved, so it might be useful to do that once you got familiar with React!

# Single Page Application Boilerplate

This repo can be downloaded and used as a starting point for a new single page web application with [React](https://facebook.github.io/react/), [Redux](http://redux.js.org/) and [Webpack](https://webpack.github.io/).
It is integrated with [React router](https://github.com/ReactTraining/react-router) and [Redux Logger](https://github.com/evgenyrodionov/redux-logger).
[Jest](https://facebook.github.io/jest/) and [Selenium web driver](http://www.seleniumhq.org/projects/webdriver/) are available for unit and system testing.
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
