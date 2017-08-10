const fetchBuilds = require('./fetchBuilds')
const ping = require('./ping')

const fetchProjectStatus = project => new Promise((resolve, reject) => {
  const pingUrl = `https://api.travis-ci.org/repos/${project.repo}/builds`

  fetchBuilds(pingUrl)
    .then((builds) => {
      const latestMasterBuild = builds.filter(build => build.branch === 'master')[0]
      return {
        name: project.repo,
        id: latestMasterBuild.id,
        message: latestMasterBuild.message,
        number: latestMasterBuild.number,
        buildResult: latestMasterBuild.result,
        state: latestMasterBuild.state,
      }
    })
    .then((buildStatus) => {
      ping(project.deployedUrl)
        .then((pingResult) => {
          const projectStatus = Object.assign({ pingResult }, buildStatus)
          resolve(projectStatus)
        })
        .catch((err) => {
          console.error(err)
          const projectStatus = Object.assign({ pingResult: null }, buildStatus)
          resolve(projectStatus)
        })
    })
    .catch((err) => {
      reject(err)
    })
})

module.exports = fetchProjectStatus
