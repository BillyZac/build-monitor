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
        <h1>Bookit web</h1>
        <div>
          <span style={{ margin: '1rem' }}>{status.result ? ':)' : ':('}</span>
          <span style={{ margin: '1rem' }}>#{status.number}</span>
          <span style={{ margin: '1rem' }}>{status.message}</span>
        </div>
      </div>
    )
  }
}

export default App
