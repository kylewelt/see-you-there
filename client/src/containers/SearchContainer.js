/* global google */
import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import SearchForm from '../components/SearchForm'
import geocoder from 'geocoder'

class SearchContainer extends Component {

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('Clicked submit!')
    // dispatch an action to geocode and store our endpoints
    // dispatch an action to fetch and store our directions
  }

  // this needs to be moved to our actions/reducer?
  geocodeEndpoint = (endpoint) => {
    geocoder.geocode(endpoint, function ( err, data ) {
      if (!err) {
        return data
      } else {
        console.error(`error fetching geocode ${err}`)
      }
    })
  }

  // this needs to be moved to our actions/reducer?
  getDirections = () => {
    const DirectionsService = new google.maps.DirectionsService();
    const geocodedOrigin = this.geocodeEndpoint()

    DirectionsService.route({
      origin: '',
      destination: '',
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

  render () {
    return (
      <Segment>
        <SearchForm handleSubmit={this.handleSubmit}/>
      </Segment>
    )
  }
}

export default SearchContainer
