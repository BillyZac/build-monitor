// @flow

import React from 'react'

type Props = {
  result: boolean,
}

const StatusIndicator = ({ result }: Props) => (
  result ?
    <span role="img" aria-label="Success">😎</span> :
    <span role="img" aria-label="Failure">💀</span>
)

export default StatusIndicator
