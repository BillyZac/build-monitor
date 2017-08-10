// @flow

const fetch = require('isomorphic-fetch')

const mapBuildData = build => ({
  id: build.id,
  number: Number(build.number),
  result: build.result === 0,
  message: build.message,
  branch: build.branch,
  state: build.state,
})

const fetchBuilds = (url: string) => new Promise((resolve, reject) => {
  fetch(url, { method: 'GET' })
    .then((response) => {
      if (response.status >= 400) {
        reject(new Error('Bad response from server'))
      }
      return response.json()
    })
    .then((rawBuildData) => {
      const cleanBuildData = rawBuildData.map(mapBuildData)
      resolve(cleanBuildData)
    })
    .catch((err) => {
      reject(err)
    })
})

module.exports = fetchBuilds
