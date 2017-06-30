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
covering all browsers with >1% market share with compat

Flow is broken in the cli, but works in the IDE.
[Possible solution](https://github.com/verekia/js-stack-walkthrough/issues/5)

Prod build doesn't work. Can't find /static/index.js

a Babel plugin called flow-react-proptypes which automatically generates PropTypes from Flow annotations for your React components.
