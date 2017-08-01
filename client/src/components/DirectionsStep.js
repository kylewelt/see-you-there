import { default as React, Component } from 'react'
import { Item } from 'semantic-ui-react'

class DirectionsStep extends Component {
  render () {
    return (
      <Item>
        <Item.Content>
          {this.props.step.instructions}
        </Item.Content>
      </Item>
    )
  }
}

export default DirectionsStep
