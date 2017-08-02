import { default as React, Component } from 'react'
import { Header, Item } from 'semantic-ui-react'

import PlaceItem from '../components/PlaceItem'

class PlacesItemsContainer extends Component {
  render () {
    console.log(this.props.geoMid)
    return (
      <div>
        <Header>
          {this.props.places.length > 0 ? 'Choose your destination:' : null}
        </Header>
        <Item.Group divided className='place-results'>
          {this.props.places.map((place, index) => (
            <PlaceItem place={place} key={index} index={index} meetupIndex={this.props.meetupIndex} onPlaceClick={this.props.onPlaceClick} />
          ))}
        </Item.Group>
      </div>
    )
  }
}

export default PlacesItemsContainer
