import { default as React, Component } from 'react'
import { Button, Grid } from 'semantic-ui-react'

class LocationMapControls extends Component {
  render () {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Button disabled fluid>Get directions</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default LocationMapControls
