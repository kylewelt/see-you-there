import React, { Component } from 'react'
import PlacesMap from '../components/PlacesMap'

class PlaceContainer extends Component {
  render () {
    console.log(this.props)
    return (
      <PlacesMap />
    )
  }
}

export default PlaceContainer
