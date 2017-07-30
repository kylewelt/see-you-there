import React, { Component } from 'react'
import { Button, Container, Form, Segment } from 'semantic-ui-react'

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
    this.props.onSearchSubmit(this.state)
  }

  render () {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Starting Location A</label>
          <input name='locA' type='text' onChange={this.onInputChange} required />
        </Form.Field>
        <Form.Field>
          <label>Starting Location B</label>
          <input name='locB' type='text' onChange={this.onInputChange} required />
        </Form.Field>
        <Form.Button fluid color='blue' >
          Find a place to meet
        </Form.Button>
      </Form>
    )
  }
}

export default SearchForm
