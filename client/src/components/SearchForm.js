import React, { Component } from 'react'
import { Button, Form, Icon } from 'semantic-ui-react'

class SearchForm extends Component {
  state = {
    locA: this.props.locA,
    locB: this.props.locB,
    travelMode: this.props.travelMode,
    placeType: this.props.placeType
  }

  onInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onButtonInputChange = (event, {name, value}) => {
    event.preventDefault()
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onSearchSubmit(this.state)
  }

  render () {

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>
            <Icon size='large' name='point' color='red' />
            Starting Location A
          </label>
          <input name='locA' type='text' onChange={this.onInputChange} value={this.state.locA} required/>
        </Form.Field>
        <Form.Field>
          <label>
            <Icon size='large' name='point' color='red' />
            Starting Location B
          </label>
          <input name='locB' type='text' onChange={this.onInputChange} value={this.state.locB} required />
        </Form.Field>

        <Form.Field>
          <Button.Group fluid>
            <Button icon='car' name='travelMode' value={'DRIVING'} active={this.state.travelMode === 'DRIVING'} onClick={this.onButtonInputChange} />
            <Button icon='subway' name='travelMode' value={'TRANSIT'} active={this.state.travelMode === 'TRANSIT'} onClick={this.onButtonInputChange} />
            <Button icon='blind' name='travelMode' value={'WALKING'} active={this.state.travelMode === 'WALKING'} onClick={this.onButtonInputChange} />
            <Button icon='bicycle' name='travelMode' value={'BICYCLING'} active={this.state.travelMode === 'BICYCLING'} onClick={this.onButtonInputChange} />
          </Button.Group>
        </Form.Field>

        <Form.Field>
          <Button.Group fluid>
            <Button icon='food' name='placeType' value={'restaurant'} active={this.state.placeType === 'restaurant'} onClick={this.onButtonInputChange} />
            <Button icon='cocktail' name='placeType' value={'bar'} active={this.state.placeType === 'bar'} onClick={this.onButtonInputChange} />
            <Button icon='coffee' name='placeType' value={'cafe'} active={this.state.placeType === 'cafe'} onClick={this.onButtonInputChange} />
          </Button.Group>
        </Form.Field>

        <Form.Button fluid color='blue' disabled={this.state.locA === '' || this.state.locB === ''}>
          Find a place to meet
        </Form.Button>
      </Form>
    )
  }
}

export default SearchForm
