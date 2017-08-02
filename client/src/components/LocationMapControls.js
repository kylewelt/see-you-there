import { default as React, Component } from 'react'
import { Button, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class LocationMapControls extends Component {
  render () {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Button as={Link} to={'/directions'} fluid color='blue' disabled={this.props.meetupIndex === null}>
              Get directions
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default LocationMapControls
