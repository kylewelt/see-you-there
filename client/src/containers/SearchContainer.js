/* global google */
import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import SearchForm from '../components/SearchForm'

class SearchContainer extends Component {
  handleSubmit = (event) => {
    console.log(event.target['origin'].value)
    event.preventDefault()
    // dispatch an action to store origin, destination
    // dispatch an action to fetch and store directions
  }

  // this needs to be moved to our actions/reducer
  getDirections = () => {
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

  render () {
    return (
      <Segment>
        <SearchForm handleSubmit={this.handleSubmit}/>
      </Segment>
    )
  }

  mapDispatchToProps = (dispatch) => {

  }


}

export default SearchContainer
