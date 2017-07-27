import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'

class SearchForm extends Component {
  state = {
    locA: '',
    locB: ''
  }

  onInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmit(this.state)
  }
  //   event.preventDefault()
  //
  //   // get geocoded locationA, locationB, midpoint
  //   getGeocodeLocations(this.state.locA, this.state.locB)
  //     .then((geoData) => {
  //       // get places near geoMid
  //       getMidpointPlaces(geoData.geoMid)
  //         .then((placesData) => {
  //           this.setState({
  //             places: placesData
  //           })
  //         })
  //
  //       this.setState({
  //         geoLocs: geoData
  //       })
  //     })
  // }

  render () {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Start Location A</label>
          <input name='locA' type='text' onChange={this.onInputChange} />
        </Form.Field>
        <Form.Field>
          <label>Start Location B</label>
          <input name='locB' type='text' onChange={this.onInputChange} />
        </Form.Field>
        <Button>
          Find a place to meet
        </Button>
      </Form>
    )
  }
}

export default SearchForm
