import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container, Grid } from 'semantic-ui-react'

import Navigation from './components/Navigation'
import SearchForm from './components/SearchForm'
import LocationMapContainer from './containers/LocationMapContainer'
import PlacesMapContainer from './containers/PlacesMapContainer'

class App extends Component {
  render () {
    return (
      <Router >
        <div className='App'>
          <Route component={Navigation} path='/' />
          <Container>
            <Grid>

              <Grid.Row>
                <Grid.Column>
                  <Route render={() => <SearchForm />} path='/' />
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column>
                  <Route component={LocationMapContainer} path='/' />
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column>
                  <Route component={PlacesMapContainer} path='/' />
                </Grid.Column>
              </Grid.Row>

            </Grid>
          </Container>
        </div>
      </Router>
    )
  }
}

export default App
