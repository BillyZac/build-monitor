import React from 'react'
import moment from 'moment'
import fetchProjectStatuses from './services/fetchProjectStatuses'
import StatusTable from './components/StatusTable'
import TimeStamp from './components/TimeStamp'

import { PROJECTS } from '../shared/config'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      projects: PROJECTS,
      lastUpdated: {},
      projectStatuses: [],
    }
  }

  componentDidMount() {
    const POLLING_INTERVAL = 1000
    setInterval(() => {
      fetchProjectStatuses(this.state.projects)
        .then((projectStatuses) => {
          const lastUpdated = moment()
          this.setState({ projectStatuses, lastUpdated })
        })
        .catch((err) => {
          console.error(err)
        })
    }, POLLING_INTERVAL)
  }

  render() {
    const { lastUpdated, projectStatuses } = this.state

    return (
      <div>
        { projectStatuses.length > 0 ?
          <StatusTable projectStatuses={projectStatuses} /> :
          <div>Loading...</div>
        }
        <TimeStamp lastUpdated={lastUpdated} />
      </div>
    )
  }
}

export default App
