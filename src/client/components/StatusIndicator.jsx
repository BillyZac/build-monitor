// @flow

import React from 'react'

type Props = {
  result: boolean,
}

const StatusIndicator = ({ result }: Props) => (
  result ?
    <span style={{ marginRight: '0.3rem' }} role="img" aria-label="Success">😎</span> :
    <span style={{ marginRight: '0.3rem' }} role="img" aria-label="Failure">💀</span>
)

export default StatusIndicator
