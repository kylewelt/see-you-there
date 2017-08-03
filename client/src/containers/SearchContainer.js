import React, { Component } from 'react'
import { Grid, Segment } from 'semantic-ui-react'

import SearchForm from '../components/SearchForm'
import PlacesItemsContainer from './PlacesItemsContainer'

class SearchContainer extends Component {
  render () {
    return (
      <Segment>
        <Grid divided='vertically'>
          <Grid.Row>
            <Grid.Column>
              <SearchForm {...this.props} onSearchSubmit={this.props.onSearchSubmit} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <PlacesItemsContainer results={this.props.results} places={this.props.places} meetupIndex={this.props.meetupIndex} onPlaceClick={this.props.onPlaceClick} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}

export default SearchContainer
