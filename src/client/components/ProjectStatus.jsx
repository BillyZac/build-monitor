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
    <span style={{
      margin: '0 0.2rem 0 0',
      width: '0.7rem',
      height: '0.7rem',
      display: 'inline-block',
      background: buildResult ? '#37de0d' : '#ee1497',
      borderRadius: '50%',
    }}
    />
    <span style={{
      margin: '0 0.2rem 0 0',
      width: '0.7rem',
      height: '0.7rem',
      display: 'inline-block',
      background: pingResult ? '#37de0d' : '#ee1497',
      borderRadius: '50%',
    }}
    />
    <span style={{
      margin: '0',
    }}
    >{ name }</span>
  </div>
  )

export default ProjectStatus
