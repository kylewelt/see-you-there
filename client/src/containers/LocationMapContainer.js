import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import LocationMap from '../components/LocationMap'

export default class LocationMapContainer extends Component {
  render () {
    return (
      <Segment>
        <LocationMap />
      </Segment>
    )
  }
}
