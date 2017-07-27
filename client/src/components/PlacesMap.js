/* global google */
import { default as React, Component } from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

const SearchBoxExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapMounted}
    defaultZoom={15}
    center={props.center}
    onBoundsChanged={props.onBoundsChanged}
  >
    {props.markers.map((marker, index) => (
      <Marker position={marker.position} key={index} />
    ))}
  </GoogleMap>
))

/*
 * Add <script src='https://maps.googleapis.com/maps/api/js'></script> to your HTML to provide google.maps reference
 */
export default class SearchBoxExample extends Component {

  state = {
    bounds: null,
    center: {
      lat: 47.6205588,
      lng: -122.3212725,
    },
    markers: [],
  }

  handleMapMounted = this.handleMapMounted.bind(this)
  handleBoundsChanged = this.handleBoundsChanged.bind(this)
  handlePlacesChanged = this.handlePlacesChanged.bind(this)

  handleMapMounted(map) {
    this._map = map
  }

  handleBoundsChanged() {
    this.setState({
      bounds: this._map.getBounds(),
      center: this._map.getCenter(),
    })
  }

  handlePlacesChanged() {
    // TODO pass places in as props
    const places = []

    const bounds = new google.maps.LatLngBounds()

    places.map(place => {
      place.geometry.viewport ? bounds.union(place.geometry.viewport) : bounds.extend(place.geometry.location)
    })

    const markers = places.map(place => ({
      position: place.geometry.location,
    }))

    const mapCenter = markers.length > 0 ? markers[0].position : this.state.center

    this.setState({
      center: mapCenter,
      markers,
    })

    this._map.fitBounds(bounds)
  }

  render() {
    return (
      <SearchBoxExampleGoogleMap
        containerElement={
          <div style={{ height: `500px` }} />
        }
        mapElement={
          <div style={{ height: `500px` }} />
        }
        center={this.state.center}
        onMapMounted={this.handleMapMounted}
        onBoundsChanged={this.handleBoundsChanged}
        bounds={this.state.bounds}
        onPlacesChanged={this.handlePlacesChanged}
        markers={this.state.markers}
      />
    )
  }
}
