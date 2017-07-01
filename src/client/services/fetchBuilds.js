const fetch = require('isomorphic-fetch')

const fetchBuilds = url => new Promise((resolve, reject) => {
  fetch(url, { method: 'GET' })
    .then((response) => {
      if (response.status >= 400) {
        reject(new Error('Bad response from server'))
      }
      return response.json()
    })
    .then((rawBuildData) => {
      const cleanBuildData = rawBuildData.map(build => ({
        id: build.id,
        number: Number(build.number),
        status: build.state !== 'failed',
        message: build.message,
      }))
      resolve(cleanBuildData)
    })
    .catch((err) => {
      reject(err)
    })
})

module.exports = fetchBuilds
