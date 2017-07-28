/* global google */
import { default as React, Component } from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

const SimpleMapExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={14}
    center={props.center}
  >

    {props.places.map((marker, index) => (
      <Marker
        position={marker.geometry.location}
        key={index}
        animation={google.maps.Animation.DROP}
        onClick={() => props.onMarkerClick(index)}
        title={'PLACE'}
      />
    ))}

  </GoogleMap>
))

export default class SimpleMapExample extends Component {
  onMarkerClick = (index) => {
    console.log('clicked', index)
  }

  render () {
    console.log(this.props)
    return (
      <SimpleMapExampleGoogleMap
        containerElement={
          <div style={{ height: `100%` }} />
        }
        mapElement={
          <div style={{ height: `500px` }} />
        }
        center={this.props.geoMid}
        places={this.props.places}
        locations={this.props.geoLocs}
        onMarkerClick={this.onMarkerClick}
      />
    )
  }
}
