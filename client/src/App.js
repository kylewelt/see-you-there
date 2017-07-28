import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container, Grid } from 'semantic-ui-react'

import Navigation from './components/Navigation'
import SearchForm from './components/SearchForm'
import LocationMapContainer from './containers/LocationMapContainer'
import PlacesMapContainer from './containers/PlacesMapContainer'
import PlacesListContainer from './containers/PlacesListContainer'

import getGeocodeLocations from './helpers/geocodeHelper.js'
import getMidpointPlaces from './helpers/placesHelper.js'

class App extends Component {
  state = {
    geoA: {},
    geoB: {},
    geoMid: {
      lat: 40.783060,
      lng: -73.971249
    },
    places: []
  }

  handleSubmit = (locations) => {
    // get geocoded locationA, locationB, midpoint
    getGeocodeLocations(locations.locA, locations.locB)
      .then((geoData) => {
        this.setState({
          geoA: geoData.geoA,
          geoB: geoData.geoB,
          geoMid: geoData.geoMid
        })
        // get places near geoMid
        getMidpointPlaces(geoData.geoMid)
          .then((placesData) => {
            this.setState({
              places: placesData
            })
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

              <Grid.Row>
                <Grid.Column>
                  <Route render={() => <PlacesListContainer {...this.state} /> } path='/' />
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
