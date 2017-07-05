import React from 'react'
import fetchRepoStatus from './services/fetchRepoStatus'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      repo: 'buildit/bookit-web',
      status: {},
    }
  }

  componentDidMount() {
    fetchRepoStatus(this.state.repo)
      .then((status) => {
        this.setState({ status })
      })
  }

  render() {
    const status = this.state.status
    return (
      <div>
        <div style={{
          display: 'flex', alignItems: 'baseline',
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
    )
  }
}

export default App
