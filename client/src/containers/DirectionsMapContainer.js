import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import DirectionsMap from '../components/DirectionsMap'

export default class DirectionsMapContainer extends Component {
  render () {
    return (
      <Segment>
        <DirectionsMap />
      </Segment>
    )
  }
}
