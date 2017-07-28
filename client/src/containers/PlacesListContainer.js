import { default as React, Component } from 'react'
import { List } from 'semantic-ui-react'

import PlaceItem from '../components/PlaceItem'

class PlacesListContainer extends Component {
  render () {
    return (
      <div>
        <List divided relaxed>
          {this.props.places.map((place, index) => (
            <PlaceItem place={place} key={index} index={index} onPlaceClick={this.props.onPlaceClick} />
          ))}
        </List>
      </div>
    )
  }
}

export default PlacesListContainer
