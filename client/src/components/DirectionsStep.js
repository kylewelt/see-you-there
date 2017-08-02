import { default as React, Component } from 'react'
import { Item } from 'semantic-ui-react'

class DirectionsStep extends Component {
  createMarkup = () => {
    return {__html: this.props.step.instructions}
  }

  render () {
    return (
      <Item>
        <Item.Content>
          <div dangerouslySetInnerHTML={this.createMarkup()} />
        </Item.Content>
      </Item>
    )
  }
}

export default DirectionsStep
