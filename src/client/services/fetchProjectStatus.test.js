/* eslint-disable no-use-before-define */

const test = require('tape')
const proxyquire = require('proxyquire')

const fetchRepoStatus = proxyquire('./fetchRepoStatus', {
  './fetchBuilds': fetchBuildsStub,
  './ping': pingStub,
})

test('Status checker correctly maps the build and ping information', (t) => {
  const project = {
    repo: 'mockGithubUser/mock-repo-name',
    deployedUrl: 'http://mock.com',
  }
  fetchRepoStatus(project)
    .then((currentBuildStatus) => {
      const desiredResult = {
        name: 'mockGithubUser/mock-repo-name',
        id: 123,
        message: 'Add stuff',
        number: 639,
        buildResult: true,
        pingResult: true,
      }

      t.deepEqual(currentBuildStatus, desiredResult, 'The latest project status should be returned.')
    })
    .catch((err) => {
      t.fail(err)
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

function pingStub() {
  return Promise.resolve(true)
}
