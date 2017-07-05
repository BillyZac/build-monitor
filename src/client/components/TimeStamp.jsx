// @flow

import React from 'react'

type Props = {
  lastUpdated: any,
}

const TimeStamp = ({ lastUpdated }: Props) => (
  <div style={{
    fontSize: '16px',
    position: 'absolute',
    margin: '0',
    padding: '10px',
    background: 'white',
    color: '#333333',
    bottom: '0',
    width: '100%',
  }}
  >Last updated: {
    lastUpdated.format ?
      lastUpdated.format('MMMM D H:mm:ss') :
      'Never'
  }
  </div>
)

export default TimeStamp
