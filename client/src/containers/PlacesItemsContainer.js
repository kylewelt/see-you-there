import { default as React, Component } from 'react'
import { Header, Item } from 'semantic-ui-react'

import PlaceItem from '../components/PlaceItem'

class PlacesItemsContainer extends Component {
  render () {
    return (
      <div>
        <Header>
          {this.props.places.length > 0 ? this.props.places.length + ' results near your midpoint' : null}
        </Header>
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
