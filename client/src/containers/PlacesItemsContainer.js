import { default as React, Component } from 'react'
import { Item } from 'semantic-ui-react'

import PlaceItem from '../components/PlaceItem'

class PlacesItemsContainer extends Component {
  render () {
    return (
      <div>
        <Item.Group divided>
          {this.props.places.map((place, index) => (
            <PlaceItem place={place} key={index} index={index} meetupIndex={this.props.meetupIndex} onPlaceClick={this.props.onPlaceClick} />
          ))}
        </Item.Group>
      </div>
    )
  }
}

export default PlacesItemsContainer
