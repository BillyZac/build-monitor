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

## Tests
proxyquire seems to need a `.default` in order to get the thing that was `export`ed using ES 6 syntax. Hm. Is there a better way?

[See my issue](https://github.com/thlorenz/proxyquire/issues/169)

Could use Sinon to mock the fetch api instead of using my homemade mock.
