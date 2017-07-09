/* eslint-disable no-use-before-define */

const test = require('tape')
const proxyquire = require('proxyquire')

const ping = proxyquire('./ping', {
  superagent: superagentStub,
})


test('Ping a healthy site', (t) => {
  ping('healthy-site')
    .then((result) => {
      t.equal(result, true, 'Pinging a healthy site should return true.')
    })
    .catch((err) => {
      t.fail(err)
    })

  t.end()
})

test('Ping a sick site', (t) => {
  ping('sick-site')
    .then((result) => {
      t.equal(result, false, 'Pinging a sick site should return false.')
    })
    .catch((err) => {
      t.fail(err)
    })

  t.end()
})

// Test data
function superagentStub(url) {
  if (url === '/ping?deployedUrl=sick-site') {
    return Promise.resolve({
      status: 200,
      text: 'false',
    })
  }

  if (url === '/ping?deployedUrl=healthy-site') {
    return Promise.resolve({
      status: 200,
      text: 'true',
    })
  }

  return Promise.reject(`The stub has rejected you.
    This may be an issue with how you wrote the test.
    Or maybe the stub doesn't match the service it's meant to stub.`)
}
