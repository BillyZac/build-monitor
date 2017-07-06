[![Build Status](https://travis-ci.org/BillyZac/build-monitor.svg?branch=master)](https://travis-ci.org/BillyZac/build-monitor)

## Install stuff
yarn

## Dev: start server and client
yarn start
yarn dev:wds

## Build and run a Docker image locally
yarn dockerize
Visit http://localhost/

## Prod
yarn prod:build
yarn prod:start
yarn prod:stop

## Deployment
I deployed via `now`. This is a very naive, very basic first step, just to get something up on the internet.

## Notes
Using Compat, which gives a linting warning if you try to use syntax not supported by all browsers with >1% market share.

Using a Babel plugin called flow-react-proptypes, which automatically generates PropTypes from Flow annotations for your React components.










:)
