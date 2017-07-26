import React, { Component } from 'react'
import './App.css'
import { Container, Grid } from 'semantic-ui-react'
import Navigation from './components/Navigation'
import SearchContainer from './containers/SearchContainer'
import LocationMapContainer from './containers/LocationMapContainer'

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
                <LocationMapContainer />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    )
  }
}

export default App
