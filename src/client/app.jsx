import React from 'react'
import moment from 'moment'
import fetchProjectStatuses from './services/fetchProjectStatuses'
import TimeStamp from './components/TimeStamp'
import ProjectStatus from './components/ProjectStatus'
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
    fetchProjectStatuses(this.state.projects)
      .then((projectStatuses) => {
        const lastUpdated = moment()
        this.setState({ projectStatuses, lastUpdated })
      })
      .catch((err) => {
        console.error(err)
      })
  }

  render() {
    const { lastUpdated, projectStatuses } = this.state

    return (
      <div>
        <div className="statusList">
          { projectStatuses.map(
            status => (
              <ProjectStatus
                name={status.name}
                buildResult={status.buildResult}
                pingResult={status.pingResult}
              />),
          )}
        </div>
        <TimeStamp lastUpdated={lastUpdated} />
      </div>
    )
  }
}

export default App
