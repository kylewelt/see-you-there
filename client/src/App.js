import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'

import './App.css'

import Navigation from './components/Navigation'
import SearchContainer from './containers/SearchContainer'
import LocationMapContainer from './containers/LocationMapContainer'
import DirectionsMapContainer from './containers/DirectionsMapContainer'

import getGeocodeLocations from './helpers/geocodeHelper.js'
import getMidpointPlaces from './helpers/placesHelper.js'

class App extends Component {
  state = {
    geoA: {},
    geoB: {},
    geoMid: {},
    placeTypes: ['restaurant'],
    places: [],
    meetupIndex: null,
    travelMode: 'DRIVING'
  }

  handleSearchSubmit = (searchInputs) => {
    this.setState({
      meetupIndex: null,
      travelMode: searchInputs.travelMode,
      placeTypes: searchInputs.placeTypes
    })
    // get geocoded locationA, locationB, midpoint
    getGeocodeLocations(searchInputs.locA, searchInputs.locB)
      .then((geoData) => {
        this.setState({
          geoA: geoData.geoA,
          geoB: geoData.geoB,
          geoMid: geoData.geoMid
        })
        // get places near geoMid
        getMidpointPlaces(geoData.geoMid, this.state.placeTypes)
          .then((placesData) => {
            this.setState({
              places: placesData
            })
          })
      })
  }

  handlePlaceClick = (index) => {
    this.setState({
      meetupIndex: index
    })
  }

  render () {
    return (
      <Router>
        <div className='App'>
          <Route component={Navigation} path='/' />
          <Grid stackable>

            <Grid.Row>
              <Grid.Column stretched width={4}>
                <Route exact path='/' render={() => <SearchContainer {...this.state} onSearchSubmit={this.handleSearchSubmit} onPlaceClick={this.handlePlaceClick} />} />
              </Grid.Column>
              <Grid.Column width={12}>
                <Route exact path='/' render={() => <LocationMapContainer {...this.state} onPlaceClick={this.handlePlaceClick} /> } />
              </Grid.Column>
              <Grid.Column width={8}>
                <Route path='/directions' render={() => <DirectionsMapContainer {...this.state} header={'Directions from Location A'} origin={this.state.geoA} destination={this.state.meetupIndex ? this.state.places[this.state.meetupIndex].geometry.location : this.state.geoMid} /> } />
              </Grid.Column>
              <Grid.Column width={8}>
                <Route path='/directions' render={() => <DirectionsMapContainer {...this.state} header={'Directions from Location B'} origin={this.state.geoB} destination={this.state.meetupIndex ? this.state.places[this.state.meetupIndex].geometry.location : this.state.geoMid} /> } />
              </Grid.Column>
            </Grid.Row>

          </Grid>
        </div>
      </Router>
    )
  }
}

export default App
