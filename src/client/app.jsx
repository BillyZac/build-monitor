import React from 'react'
import moment from 'moment'
import fetchRepoStatus from './services/fetchRepoStatus'
import TimeStamp from './components/TimeStamp'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      repo: 'buildit/bookit-web',
      status: {},
      lastUpdated: {},
    }
  }

  componentDidMount() {
    const POLLING_INTERVAL = 10000 // milliseconds
    setInterval(() => {
      fetchRepoStatus(this.state.repo)
        .then((status) => {
          const lastUpdated = moment()
          this.setState({ lastUpdated, status })
        })
    }, POLLING_INTERVAL)
  }

  render() {
    const { status, lastUpdated } = this.state
    return (
      <div>
        <div className="statusList">
          <div style={{
            display: 'flex',
            alignItems: 'baseline',
          }}
          >
            <span style={{
              margin: '0 0.5rem',
              width: '0.7rem',
              height: '0.7rem',
              display: 'inline-block',
              background: status.result ? '#37de0d' : '#ee1497',
              borderRadius: '50%',
            }}
            />
            <span style={{
              margin: '0',
            }}
            >Bookit web</span>
          </div>
        </div>
        <TimeStamp lastUpdated={lastUpdated} />
      </div>
    )
  }
}

export default App
