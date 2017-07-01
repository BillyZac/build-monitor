const fetch = require('isomorphic-fetch')

const fetchBuildStatus = url => new Promise((resolve, reject) => {
  fetch(url, { method: 'GET' })
    .then((response) => {
      if (response.status >= 400) {
        reject(new Error('Bad response from server'))
      }
      return response.text()
    })
    .then((statusBadgeSvg) => {
      const isPassing = statusBadgeSvg.indexOf('passing') !== -1
      resolve(isPassing)
    })
    .catch((err) => {
      reject(err)
    })
})

module.exports = fetchBuildStatus
