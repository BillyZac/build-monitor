/* eslint-disable no-use-before-define */

const test = require('tape')
const proxyquire = require('proxyquire')

// Set up stub for the isomorphic-fetch module
const fetchBuilds = proxyquire('./fetchBuilds', {
  'isomorphic-fetch': isomorphicFetchStub,
})

// Do the actual tests
test('Builds fetcher returns the right number of builds', (t) => {
  fetchBuilds()
    .then((builds) => {
      t.equal(builds.length, 3, 'The fetcher should return the same number of builds as in the original response.')
    })

  t.end()
})

test('Builds fetcher correctly maps the build information', (t) => {
  fetchBuilds()
    .then((builds) => {
      const desiredResult = {
        id: 123,
        result: false,
        message: 'Fix everything',
        number: 629,
        branch: 'master',
      }

      t.deepEqual(builds[0], desiredResult, 'The build info should be translated to our domain.')
    })

  t.end()
})


// Test data
function isomorphicFetchStub() {
  const serializedData = `[
    {
      "id": 123,
      "repository_id": 12568571,
      "number": "629",
      "state": "failed",
      "result": 1,
      "started_at": "2017-06-30T14:59:47Z",
      "finished_at": "2017-06-30T15:03:16Z",
      "duration": 209,
      "commit": "c5df4106547d469962b84fbf8f1c4b7e3d0d8300",
      "branch": "master",
      "message": "Fix everything",
      "event_type": "push"
    }, {
      "id": 248521833,
      "repository_id": 12568571,
      "number": "628",
      "state": "finished",
      "result": 0,
      "started_at": "2017-06-29T20:21:20Z",
      "finished_at": "2017-06-29T20:22:28Z",
      "duration": 68,
      "commit": "b61b1fda2ecef188cacd0a61b739842fb11594b3",
      "branch": "better-builds",
      "message": "trying another angle...",
      "event_type": "push"
    }, {
      "id": 248448169,
      "repository_id": 12568571,
      "number": "627",
      "state": "finished",
      "result": 0,
      "started_at": "2017-06-29T16:45:45Z",
      "finished_at": "2017-06-29T16:47:18Z",
      "duration": 93,
      "commit": "b2d37debf38cc5f8882ccba4b48bb0b4a0ea5b33",
      "branch": "better-builds",
      "message": "simple change to verify travis cache will be applied for the next build",
      "event_type": "push"
    }
  ]`

  const parsedData = JSON.parse(serializedData)

  return Promise.resolve({
    json: () => parsedData,
  })
}
