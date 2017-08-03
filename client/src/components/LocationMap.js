/* global google */
import canUseDOM from 'can-use-dom'
import raf from 'raf'
import { default as React, Component } from 'react'
import { withGoogleMap, GoogleMap, Circle, Marker, InfoWindow } from 'react-google-maps'
import { Dimmer, Icon,  Loader } from 'semantic-ui-react'

const geolocation = ( canUseDOM && navigator.geolocation ? navigator.geolocation : ({ getCurrentPosition(success, failure) { failure(`Your browser doesn't support geolocation.`) }, }) )

const GeolocationExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={13}
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
        icon={'https://mts.googleapis.com/vt/icon/name=icons/spotlight/spotlight-waypoint-a.png&text=A&psize=16&font=fonts/Roboto-Regular.ttf&color=ff333333&ax=44&ay=48&scale=1'}
      />
    )}

    {(Object.keys(props.geoB).length === 0 && props.geoB.constructor === Object) ? null : (
      <Marker
        position={props.geoB}
        icon={'https://mts.googleapis.com/vt/icon/name=icons/spotlight/spotlight-waypoint-a.png&text=B&psize=16&font=fonts/Roboto-Regular.ttf&color=ff333333&ax=44&ay=48&scale=1'}
      />
    )}

    {(Object.keys(props.geoMid).length === 0 && props.geoMid.constructor === Object) ? null : (
      <Marker
        position={props.geoMid}
        icon={'https://mts.googleapis.com/vt/icon/name=icons/spotlight/spotlight-waypoint-blue.png&psize=16&font=fonts/Roboto-Regular.ttf&color=ff333333&ax=44&ay=48&scale=1'}

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
          geoMid={this.props.geoMid}
          meetupIndex={this.props.meetupIndex}
        />
      </div>
    )
  }
}
