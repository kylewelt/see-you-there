/* global google */
import { default as React, Component } from "react"
import { withGoogleMap, GoogleMap, DirectionsRenderer } from "react-google-maps"
import { Grid } from 'semantic-ui-react'

import DirectionsList from './DirectionsList'

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
    travelMode: this.props.travelMode
  }

  getTravelMode = () => {
    switch (this.props.travelMode) {
      case 'TRANSIT':
        return google.maps.TravelMode.TRANSIT
      case 'WALKING':
        return google.maps.TravelMode.WALKING
      case 'BICYCLING':
        return google.maps.TravelMode.BICYCLING
      default:
        return google.maps.TravelMode.DRIVING

    }
  }

  componentDidMount() {
    const DirectionsService = new google.maps.DirectionsService();

    DirectionsService.route({
      origin: this.state.origin,
      destination: this.state.destination,
      travelMode: this.getTravelMode()
    }, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        this.setState({
          directions: result
        })
      } else {
        console.error(`error fetching directions ${result}`);
      }
    })
  }

  render() {
    return (
      <Grid divided='vertically'>
        <Grid.Row>
          <Grid.Column stretched>
            <DirectionsExampleGoogleMap
              containerElement={
                <div style={{ height: `100%` }} />
              }
              mapElement={
                <div style={{ height: `300px` }} />
              }
              center={this.state.origin}
              directions={this.state.directions}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <DirectionsList directions={this.state.directions} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
