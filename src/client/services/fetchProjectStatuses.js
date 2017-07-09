const fetchProjectStatus = require('./fetchProjectStatus')

const fetchProjectStatuses = repos => Promise.all(
  repos.map(fetchProjectStatus),
)

module.exports = fetchProjectStatuses
