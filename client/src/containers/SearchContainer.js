import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import SearchForm from '../components/SearchForm'
import getGeosFromAddresses from '../helpers/geoLocatorDispatch.js'

class SearchContainer extends Component {

  handleSubmit = (event) => {
    //TODO don't do anything if both values passed arent valid addr strings
    event.preventDefault()
    getGeosFromAddresses(event.target[0].value, event.target[1].value)
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
