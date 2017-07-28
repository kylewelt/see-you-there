import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container, Grid } from 'semantic-ui-react'

import Navigation from './components/Navigation'
import SearchContainer from './containers/SearchContainer'
import SearchForm from './components/SearchForm'
import LocationMapContainer from './containers/LocationMapContainer'
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
    places: [],
    meetupIndex: null,
  }

  handleSearchSubmit = (locations) => {
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

  handlePlaceClick = (index) => {
    console.log('selected:', this.state.places[index])
    this.setState({
      meetupIndex: index
    })
  }

  render () {
    return (
      <Router >
        <div className='App'>
          <Route component={Navigation} path='/' />
          <Grid stackable>

            <Grid.Row>
              <Grid.Column stretched width={4}>
                <Route render={() => <SearchContainer onSearchSubmit={this.handleSearchSubmit} places={this.state.places} onPlaceClick={this.handlePlaceClick} />} path='/' />
              </Grid.Column>
              <Grid.Column width={12}>
                <Route render={() => <LocationMapContainer {...this.state} onPlaceClick={this.handlePlaceClick} /> } path='/' />
              </Grid.Column>

            </Grid.Row>

          </Grid>
        </div>
      </Router>
    )
  }
}

export default App
