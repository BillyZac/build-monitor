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
To deploy to a "staging" environment:
```
cat .env #I keep my Zeit Now token in here. 
./scripts/deploy.sh <the zeit now token>
```

### Upgrading a dev deployment to Production
Run `now ls`. This lists deployment urls, with the most recent at the top. (Each deployment url is also available in the raw Travis logs for every build.)

Look at `./scripts/upgrade-to-prod.sh`. Replace the existing dev url with the new one. (This is checked into version control, which gives us some minimal way of tracking these upgrades.)

Run `./scripts/upgrade-to-prod.sh`.

## Notes
Using Compat, which gives a linting warning if you try to use syntax not supported by all browsers with >1% market share.

Using a Babel plugin called flow-react-proptypes, which automatically generates PropTypes from Flow annotations for your React components.
