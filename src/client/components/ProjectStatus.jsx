// @flow

import React from 'react'

type Props = {
  name: string,
  buildResult: boolean,
}

const Repo = ({ name, buildResult }: Props) => (
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
      background: buildResult ? '#37de0d' : '#ee1497',
      borderRadius: '50%',
    }}
    />
    <span style={{
      margin: '0',
    }}
    >{ name }</span>
  </div>
  )

export default Repo
