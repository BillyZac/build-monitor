// @flow

import React from 'react'

const tdStyle = {
  textAlign: 'center',
  width: '1.3rem',
}

const StatusTableHead = () => (
  <tr style={{ fontSize: '0.2rem' }}>
    <th style={tdStyle}>build</th>
    <th style={tdStyle}>smoke</th>
  </tr>
)

export default StatusTableHead
