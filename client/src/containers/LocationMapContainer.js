import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import LocationMap from '../components/LocationMap'
import LocationMapControls from '../components/LocationMapControls'

class LocationMapContainer extends Component {
  render () {
    return (
      <Grid>

        <Grid.Row>
          <Grid.Column>
            <LocationMap {...this.props} />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <LocationMapControls />
          </Grid.Column>
        </Grid.Row>

      </Grid>
    )
  }
}

export default LocationMapContainer
