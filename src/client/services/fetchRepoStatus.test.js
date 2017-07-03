/* eslint-disable no-use-before-define */

const test = require('tape')
const proxyquire = require('proxyquire')

const fetchRepoStatus = proxyquire('./fetchRepoStatus', {
  './fetchBuilds': fetchBuildsStub,
})

test('Builds fetcher correctly maps the build information', (t) => {
  fetchRepoStatus('mockGithubUser/mock-repo-name')
    .then((currentBuildStatus) => {
      const desiredResult = {
        id: 123,
        message: 'Add stuff',
        number: 639,
        result: true,
      }

      t.deepEqual(currentBuildStatus, desiredResult, 'The latest build status should be returned.')
    })
    .catch((err) => {
      t.deepEqual(true, false, err.message)
    })

  t.end()
})


// Test data
function fetchBuildsStub() {
  const data = [
    {
      id: 123,
      message: 'Add stuff',
      number: 639,
      result: true,
    },
    {
      id: 456,
      message: 'Do things',
      number: 638,
      result: false,
    },
    {
      id: 789,
      message: 'Break a leg, killa',
      number: 637,
      result: true,
    },
  ]

  return Promise.resolve(data)
}
