import React from 'react'
import fetchBuilds from './services/fetchBuilds'
import fetchBuildStatus from './services/fetchBuildStatus'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      buildUrl: 'https://api.travis-ci.org/repos/buildit/bookit-web/builds',
      buildStatusBadgeUrl: 'https://api.travis-ci.org/buildit/bookit-web.svg',
      builds: [],
      status: true,
    }
  }

  componentDidMount() {
    fetchBuilds(this.state.buildUrl)
      .then((builds) => {
        this.setState({ builds })
      })

    fetchBuildStatus(this.state.buildStatusBadgeUrl)
      .then((status) => {
        this.setState({ status })
      })
  }

  render() {
    return (
      <div>
        <h2>Status</h2>
        <p>{ this.state.status ? ':)' : ':(' }</p>
        <h2>Build history</h2>
        { this.state.builds.map(build => (
          <p>
            {build.result ? ':)' : ':('} {build.number} {build.message}
          </p>),
        )}
      </div>
    )
  }
}

export default App
