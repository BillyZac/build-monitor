/* eslint-disable no-use-before-define */

const test = require('tape')
const proxyquire = require('proxyquire')

const fetchRepoStatus = proxyquire('./fetchProjectStatus', {
  './fetchBuilds': fetchBuildsStub,
  './ping': pingStub,
})

test('Status checker only cares about the master branch', (t) => {
  const project = {
    repo: 'mockGithubUser/mock-repo-name',
    deployedUrl: 'http://mock.com',
  }
  fetchRepoStatus(project)
    .then((currentBuildStatus) => {
      const desiredResult = {
        name: 'mockGithubUser/mock-repo-name',
        id: 456,
        message: 'Do things',
        number: 638,
        buildResult: false,
        pingResult: true,
        state: 'finished',
      }

      t.deepEqual(currentBuildStatus, desiredResult, 'Only master branch should be considered in status check.')
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
      branch: 'some-feature',
      state: 'finished',
    },
    {
      id: 456,
      message: 'Do things',
      number: 638,
      result: false,
      branch: 'master',
      state: 'finished',
    },
    {
      id: 789,
      message: 'Break a leg, killa',
      number: 637,
      result: true,
      branch: 'some-feature',
      state: 'created',
    },
  ]

  return Promise.resolve(data)
}

function pingStub() {
  return Promise.resolve(true)
}
