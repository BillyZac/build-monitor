// @flow

import React from 'react'

import StatusTableRow from './StatusTableRow'
import StatusTableHead from './StatusTableHead'

const style = {
  margin: '50px',
}

type Props = {
  projectStatuses: Array<any>
}

const StatusTable = ({ projectStatuses }: Props) => (
  <table style={style}>
    <StatusTableHead />
    { projectStatuses.map(
      status => (
        <StatusTableRow
          name={status.name}
          buildResult={status.buildResult}
          pingResult={status.pingResult}
          buildState={status.state}
        />),
      )}
  </table>
)

export default StatusTable
