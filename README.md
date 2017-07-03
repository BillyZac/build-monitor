## Install stuff
yarn

## Dev: start server and client
yarn start
yarn dev:wds

## Prod
yarn prod:build
yarn prod:start
yarn prod:stop

## Notes
Using Compat, which gives a linting warning if you try to use syntax not supported by all browsers with >1% market share.

Using a Babel plugin called flow-react-proptypes, which automatically generates PropTypes from Flow annotations for your React components.
