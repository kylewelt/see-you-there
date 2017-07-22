import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import DirectionsSearchForm from '../components/DirectionsSearchForm'

class DirectionsContainer extends Component {
  render () {
    return (
      <Segment>
        <DirectionsSearchForm />
      </Segment>
    )
  }
}

export default DirectionsContainer
