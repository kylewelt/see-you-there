import React, { Component } from 'react'
import { Header, Segment } from 'semantic-ui-react'
import DirectionsMap from '../components/DirectionsMap'

export default class DirectionsMapContainer extends Component {
  render () {
    return (
      <Segment>
        <Header>{this.props.header}</Header>
        <DirectionsMap {...this.props} />
      </Segment>
    )
  }
}
