/* global google */
import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'

class SearchForm extends Component {
  state = {
    origin: '',
    destination: '',
    directions: null,
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    this.setState({
      origin: '',
      destination: ''
    }, this.getDirections())
  }

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
      <Form onSubmit={this.handleOnSubmit}>
        <Form.Input label='Starting Location 1' name='origin' onChange={this.handleOnChange} placeholder='enter starting point...' type='text' value={this.state.origin} />
        <Form.Input label='Starting Location 2' name='destination' onChange={this.handleOnChange} placeholder='enter starting point...' type='text' value={this.state.destination} />
        {/* <Form.Group inline>
          <label>Travel Mode</label>
          <Form.Radio label='Driving' name='travel_mode' onChange={this.handleOnChange} />
          <Form.Radio label='Transit' name='travel_mode' onChange={this.handleOnChange} />
          <Form.Radio label='Walking' name='travel_mode' onChange={this.handleOnChange} />
          <Form.Radio label='Cycling' name='travel_mode' onChange={this.handleOnChange} />
        </Form.Group>
        <Form.Group inline>
          <label>Destination Type</label>
          <Form.Checkbox label='Bars' onChange={this.handleOnChange} />
          <Form.Checkbox label='Cafes' onChange={this.handleOnChange} />
          <Form.Checkbox label='Restaurants' onChange={this.handleOnChange} />
        </Form.Group> */}
        <Button type='submit'>Go</Button>
      </Form>
    )
  }
}

export default SearchForm
