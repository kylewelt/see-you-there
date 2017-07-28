import { default as React, Component } from 'react'
import { Header, List } from 'semantic-ui-react'

import PlaceItem from '../components/PlaceItem'

class PlacesListContainer extends Component {
  render () {
    return (
      <div>
        <Header>Places</Header>
        <List>
          {this.props.places.map((place, index) => (
            <PlaceItem place={place} key={index} />
          ))}
        </List>
      </div>
    )
  }
}

export default PlacesListContainer
