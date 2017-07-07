import React from 'react'
import moment from 'moment'
import fetchRepoStatuses from './services/fetchRepoStatuses'
import TimeStamp from './components/TimeStamp'
import ProjectStatus from './components/ProjectStatus'
import { PROJECTS } from '../shared/config'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      repos: PROJECTS,
      lastUpdated: {},
      projectStatuses: [],
    }
  }

  componentDidMount() {
    const POLLING_INTERVAL = 1000 // milliseconds
    setInterval(() => {
      fetchRepoStatuses(this.state.repos)
        .then((projectStatuses) => {
          const lastUpdated = moment()
          this.setState({ projectStatuses, lastUpdated })
        })
        .catch((err) => {
          console.log(err.message)
        })
    }, POLLING_INTERVAL)
  }

  render() {
    const { lastUpdated, projectStatuses } = this.state

    return (
      <div>
        <div className="statusList">
          { projectStatuses.map(
            status => <ProjectStatus name={status.name} buildResult={status.result} />,
          )}
        </div>
        <TimeStamp lastUpdated={lastUpdated} />
      </div>
    )
  }
}

export default App
