// @flow

import React from 'react'

type Props = {
  name: string,
  buildResult: boolean,
  pingResult: boolean,
}

const ProjectStatus = ({ name, buildResult, pingResult }: Props) => (
  <div style={{
    display: 'flex',
    alignItems: 'baseline',
  }}
  >
    { buildResult ?
      <span>😎</span> :
      <span>💀</span> }

    { pingResult ?
      <span>😎</span> :
      <span>💀</span> }

    <span style={{
      margin: '0',
    }}
    >{ name }</span>
  </div>
  )

export default ProjectStatus
