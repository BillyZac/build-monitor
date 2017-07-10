// @flow

import React from 'react'
import StatusIndicator from './StatusIndicator'

type Props = {
  name: string,
  buildResult: boolean,
  pingResult: boolean,
}

const ProjectStatus = ({ name, buildResult, pingResult }: Props) => (
  <div>
    <StatusIndicator result={buildResult} />
    <StatusIndicator result={pingResult} />
    <span style={{ margin: '0' }}>{ name }</span>
  </div>
  )

export default ProjectStatus
