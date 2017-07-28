import React, { Component } from 'react'
import { Grid, Segment } from 'semantic-ui-react'

import SearchForm from '../components/SearchForm'
import PlacesListContainer from './PlacesListContainer'

class SearchContainer extends Component {
  render () {
    return (
      <Segment>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <SearchForm onSearchSubmit={this.props.onSearchSubmit}/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <PlacesListContainer places={this.props.places} onPlaceClick={this.props.onPlaceClick} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}

export default SearchContainer
