// @flow

import React from 'react'
import StatusIndicator from './StatusIndicator'

type Props = {
  name: string,
  buildResult: boolean,
  pingResult: boolean,
  buildState: string,
}

const tdStyle = {
  textAlign: 'center',
}

const StatusTableRow = ({ name, buildResult, pingResult, buildState }: Props) => (
  <tr>
    <td style={tdStyle}><StatusIndicator result={buildResult} state={buildState} /></td>
    <td style={tdStyle}><StatusIndicator result={pingResult} state={buildState} /></td>
    <td><span style={{ marginLeft: '0.5rem' }}>{ name }</span></td>
  </tr>
  )

export default StatusTableRow
