/* global google */
import { default as React, Component } from "react"
import { withGoogleMap, GoogleMap, DirectionsRenderer } from "react-google-maps"

const DirectionsExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap defaultZoom={7} defaultCenter={props.center} >
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
))

/*
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
export default class DirectionsExample extends Component {
  state = {
    origin: this.props.origin,
    destination: this.props.destination,
    directions: null,
  }

  componentDidMount() {
    const DirectionsService = new google.maps.DirectionsService();

    DirectionsService.route({
      origin: this.state.origin,
      destination: this.state.destination,
      travelMode: google.maps.TravelMode.DRIVING,
    }, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        this.setState({
          directions: result,
        })
      } else {
        console.error(`error fetching directions ${result}`);
      }
    })
  }

  render() {
    console.log('directions:', this.state.directions)
    return (
      <DirectionsExampleGoogleMap
        containerElement={
          <div style={{ height: `100%` }} />
        }
        mapElement={
          <div style={{ height: `500px` }} />
        }
        center={this.state.origin}
        directions={this.state.directions}
      />
    )
  }
}
