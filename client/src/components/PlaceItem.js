import { default as React, Component } from 'react'
import { List } from 'semantic-ui-react'

class PlaceItem extends Component {
  render () {
    return (
      <List.Item>
        <List.Icon name='marker' />
        <List.Content>
          <List.Header>
            {this.props.place.name}
          </List.Header>
          <List.Description>
            
          </List.Description>
        </List.Content>
      </List.Item>
    )
  }
}

export default PlaceItem
