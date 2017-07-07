const fetchRepoStatus = require('./fetchRepoStatus')

const fetchRepoStatuses = repos => Promise.all(
  repos.map(fetchRepoStatus),
)

module.exports = fetchRepoStatuses
