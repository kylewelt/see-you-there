import React, { Component } from 'react'
import './App.css'
import { Container, Grid } from 'semantic-ui-react'
import NavContainer from './containers/NavContainer'
import SearchContainer from './containers/SearchContainer'
import MapContainer from './containers/MapContainer'
import PlaceContainer from './containers/PlaceContainer'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <NavContainer />
        <Container>
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <SearchContainer />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <MapContainer />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
              <Grid.Column>
                <MapContainer />
              </Grid.Column>
              <Grid.Column>
                <MapContainer />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <PlaceContainer />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    )
  }
}

export default App
