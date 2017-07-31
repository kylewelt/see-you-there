/* global google */
import canUseDOM from 'can-use-dom'
import raf from 'raf'
import { default as React, Component } from 'react'
import { withGoogleMap, GoogleMap, Circle, Marker, InfoWindow } from 'react-google-maps'
import { Dimmer, Loader } from 'semantic-ui-react'

const geolocation = ( canUseDOM && navigator.geolocation ? navigator.geolocation : ({ getCurrentPosition(success, failure) { failure(`Your browser doesn't support geolocation.`) }, }) )

const GeolocationExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={14}
    center={props.center}
  >

    {props.center && (
      <Circle
        center={props.center}
        radius={props.radius}
        options={{
          fillColor: `red`,
          fillOpacity: 0.20,
          strokeColor: `red`,
          strokeOpacity: 0.50,
          strokeWeight: 0.80
        }}
      />
    )}

    {(Object.keys(props.geoA).length === 0 && props.geoA.constructor === Object) ? null : (
      <Marker
        position={props.geoA}
        animation={google.maps.Animation.DROP}
        label='A'
      />
    )}

    {(Object.keys(props.geoB).length === 0 && props.geoB.constructor === Object) ? null : (
      <Marker
        position={props.geoB}
        animation={google.maps.Animation.DROP}
        label='B'
      />
    )}

    {props.places.map((marker, index) => (
      <Marker
        position={marker.geometry.location}
        key={index}
        animation={google.maps.Animation.DROP}
        onClick={() => props.onMarkerClick(index)}
      >
        {props.meetupIndex === index ? <InfoWindow><div>{marker.name}</div></InfoWindow> : null}
      </Marker>
    ))}

  </GoogleMap>
))

export default class GeolocationExample extends Component {
  state = {
    center: this.props.geoMid,
    radius: 2000,
    loading: true
  }

  isUnmounted = false

  componentWillReceiveProps (nextProps) {
    if (this.props.geoMid === nextProps.geoMid) {
      this.setState({
        center: this.props.geoMid,
        radius: 0
      })
    }
  }

  componentDidMount () {
    const tick = () => {
      if (this.isUnmounted) {
        return
      }

      this.setState({ radius: Math.max(this.state.radius - 20, 0) })
      if (this.state.radius > 80) {
        raf(tick)
      }
    }

    geolocation.getCurrentPosition((position) => {
      if (this.isUnmounted) {
        return
      }

      this.setState({
        center: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      })

      this.setState({ loading: false })

      raf(tick)
    }, (reason) => {
      if (this.isUnmounted) {
        return
      }

      this.setState({
        center: {
          lat: 40.783060,
          lng: -73.971249
        }
      })
    })
  }

  componentWillUnmount () {
    this.isUnmounted = true
  }

  onMarkerClick = (index) => {
    this.props.onPlaceClick(index)
  }

  render () {
    return (
      <div>
        <Dimmer active={this.state.loading} inverted>
          <Loader inverted>Finding location...</Loader>
        </Dimmer>
        <GeolocationExampleGoogleMap
          containerElement={
            <div style={{ height: `100%` }} />
          }
          mapElement={
            <div id='location-map' style={{ height: `750px` }} />
          }
          center={this.state.center}
          radius={this.state.radius}
          places={this.props.places}
          locations={this.props.geoLocs}
          onMarkerClick={this.onMarkerClick}
          geoA={this.props.geoA}
          geoB={this.props.geoB}
          meetupIndex={this.props.meetupIndex}
        />
      </div>
    )
  }
}
