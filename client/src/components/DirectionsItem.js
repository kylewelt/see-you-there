import { default as React, Component } from 'react'
import { Grid, Header } from 'semantic-ui-react'

class DirectionsItem extends Component {
  render () {
    const leg = this.props.route.legs[0]
    return (
      <Grid.Row>
        <Grid.Column width={3}>
          <Header sub>Route Distance</Header>
          <span>{leg.distance.text}</span>
        </Grid.Column>
        <Grid.Column width={3}>
          <Header sub>Route Duration</Header>
          <span>{leg.duration.text}</span>
        </Grid.Column>
        <Grid.Column width={5}>
          <Header sub>Starting Address</Header>
          <span>{leg.start_address}</span>
        </Grid.Column>
        <Grid.Column width={5}>
          <Header sub>Ending Address</Header>
          <span>{leg.end_address}</span>
        </Grid.Column>
      </Grid.Row>
    )
  }
}

export default DirectionsItem
