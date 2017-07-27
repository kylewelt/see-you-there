import React, { Component } from 'react'
import PlacesMap from '../components/PlacesMap'

class PlaceContainer extends Component {

  render () {
    return (
      <PlacesMap {...this.props} />
    )
  }
}

export default PlaceContainer
