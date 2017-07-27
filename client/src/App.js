import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container, Grid } from 'semantic-ui-react'

import Navigation from './components/Navigation'
import SearchForm from './components/SearchForm'
import LocationMapContainer from './containers/LocationMapContainer'
import PlacesMapContainer from './containers/PlacesMapContainer'

import getGeocodeLocations from './helpers/geocodeHelper.js'
import getMidpointPlaces from './helpers/placesHelper.js'

class App extends Component {
  state = {
    geoLocs: {},
    places: [],
  }

  handleSubmit = (locations) => {
    console.log('clicked', locations)

    // get geocoded locationA, locationB, midpoint
    getGeocodeLocations(locations.locA, locations.locB)
      .then((geoData) => {
        // get places near geoMid
        getMidpointPlaces(geoData.geoMid)
          .then((placesData) => {
            this.setState({
              places: placesData
            })
          })

        this.setState({
          geoLocs: geoData
        })
      })
  }

  render () {
    return (
      <Router >
        <div className='App'>
          <Route component={Navigation} path='/' />
          <Container>
            <Grid>

              <Grid.Row>
                <Grid.Column>
                  <Route render={() => <SearchForm onSubmit={this.handleSubmit}/>} path='/' />
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column>
                  <Route component={LocationMapContainer} path='/' />
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column>
                  <Route render={() => <PlacesMapContainer {...this.state} /> } path='/' />
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
