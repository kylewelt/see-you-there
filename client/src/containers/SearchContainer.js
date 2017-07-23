import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import SearchForm from '../components/SearchForm'

class SearchContainer extends Component {
  render () {
    return (
      <Segment>
        <SearchForm />
      </Segment>
    )
  }
}

export default SearchContainer
