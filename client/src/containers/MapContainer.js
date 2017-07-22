import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import DirectionsMap from '../components/DirectionsMap'

export default class MapContainer extends Component {
  render () {
    return (
      <Segment>
        <DirectionsMap />
      </Segment>
    )
  }
}
