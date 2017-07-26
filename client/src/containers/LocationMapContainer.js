import React, { Component } from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import LocationMap from '../components/LocationMap'
import LocationMapControls from '../components/LocationMapControls'

export default class LocationMapContainer extends Component {
  render () {
    return (
      <Segment>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <LocationMap />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <LocationMapControls />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}
