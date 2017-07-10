// @flow

import React from 'react'
import StatusIndicator from './StatusIndicator'

type Props = {
  name: string,
  buildResult: boolean,
  pingResult: boolean,
}

const tdStyle = {
  textAlign: 'center',
}

const StatusTableRow = ({ name, buildResult, pingResult }: Props) => (
  <tr>
    <td style={tdStyle}><StatusIndicator result={buildResult} /></td>
    <td style={tdStyle}><StatusIndicator result={pingResult} /></td>
    <td><span style={{ marginLeft: '0.5rem' }}>{ name }</span></td>
  </tr>
  )

export default StatusTableRow
