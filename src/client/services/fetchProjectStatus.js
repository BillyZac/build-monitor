const fetchBuilds = require('./fetchBuilds')
const ping = require('./ping')

const fetchProjectStatus = project => new Promise((resolve, reject) => {
  const pingUrl = `https://api.travis-ci.org/repos/${project.repo}/builds`

  fetchBuilds(pingUrl)
    .then((builds) => {
      const latestBuild = builds[0]
      return {
        name: project.repo,
        id: latestBuild.id,
        message: latestBuild.message,
        number: latestBuild.number,
        buildResult: latestBuild.result,
      }
    })
    .then((latestBuild) => {
      ping(project.deployedUrl)
        .then((pingResult) => {
          resolve(Object.assign({ pingResult }, latestBuild))
        })
        .catch((err) => {
          console.error(err)
          resolve(Object.assign({ pingResult: null }, latestBuild))
        })
    })
    .catch((err) => {
      reject(err)
    })
})

module.exports = fetchProjectStatus
