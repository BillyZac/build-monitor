const fetchBuilds = require('./fetchBuilds')

const fetchRepoStatus = repo => new Promise((resolve, reject) => {
  const url = `https://api.travis-ci.org/repos/${repo}/builds`

  fetchBuilds(url)
    .then((builds) => {
      resolve(builds[0])
    })
    .catch((err) => {
      reject(err)
    })
})

module.exports = fetchRepoStatus
