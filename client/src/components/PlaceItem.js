import { default as React, Component } from 'react'
import { List } from 'semantic-ui-react'

class PlaceItem extends Component {
  render () {
    return (
      <List.Item onClick={() => this.props.onPlaceClick(this.props.index)}>
        <List.Icon name='marker' color='red' />
        <List.Content>
          <List.Header>
            {this.props.place.name}
          </List.Header>
          <List.Description>
            Description
          </List.Description>
        </List.Content>
      </List.Item>
    )
  }
}

export default PlaceItem
