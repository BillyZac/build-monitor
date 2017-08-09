// @flow

import React from 'react'

type Props = {
  result: boolean,
  state: string,
}

const StatusIndicator = ({ result, state }: Props) => {
  if (state !== 'finished') {
    return <span role="img" aria-label="In progress">💣</span>
  }
  return result ?
    <span role="img" aria-label="Success">😎</span> :
    <span role="img" aria-label="Failure">💀</span>
}

export default StatusIndicator
