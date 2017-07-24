import React, { Component } from 'react'
import './App.css'
import { Container, Grid, Header } from 'semantic-ui-react'
import Navigation from './components/Navigation'
import SearchContainer from './containers/SearchContainer'
import MapContainer from './containers/MapContainer'
import PlaceContainer from './containers/PlaceContainer'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Navigation />
        <Container>
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <SearchContainer />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Header>Starting Locations</Header>
                <MapContainer />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Header>Person 1 Directions</Header>
                <MapContainer />
              </Grid.Column>
              <Grid.Column>
                <Header>Person 2 Directions</Header>
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
