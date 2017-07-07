[![Build Status](https://travis-ci.org/BillyZac/build-monitor.svg?branch=master)](https://travis-ci.org/BillyZac/build-monitor)

## Install dependencies
```
yarn
```

## Dev: start server and client
```
yarn start
yarn dev:wds
```

## Build and run a Docker image locally
```
yarn dockerize
```
Visit http://localhost/


## Prod
```
yarn prod:build
yarn prod:start
yarn prod:stop
```

## Configuring projects
The app will list build status for any repository listed in `PROJECTS` in `src/shared/config.js`. (This hard-coded list will be replaced by [a user-editable list at some point](https://github.com/BillyZac/build-monitor/issues/23).)

## Deployment
The current deployment strategy works like this:

Push to GitHub.
Travis validates. If everything passes and the branch is master
Travis attempts to do a dev deployment with Zeit's now.

Find the most recent deployment url with `now ls`.

If the `now` dev deployment looks good, upgrade it to prod with `now alias https://build-monitor-bicauqewhr.now.sh build-monitor`

## Notes
Using Compat, which gives a linting warning if you try to use syntax not supported by all browsers with >1% market share.

Using a Babel plugin called flow-react-proptypes, which automatically generates PropTypes from Flow annotations for your React components.
