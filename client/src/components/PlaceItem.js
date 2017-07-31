import { default as React, Component } from 'react'
import { Item, Label } from 'semantic-ui-react'

class PlaceItem extends Component {
  render () {
    return (
      <Item className={this.props.meetupIndex === this.props.index ? 'place-result selected-place' : 'place-result'} onClick={() => this.props.onPlaceClick(this.props.index)} >
        <Item.Content>
          <Item.Header>
            {this.props.place.name}
          </Item.Header>
          <Item.Description>
            <Label icon='star' color='yellow' content={this.props.place.rating ? this.props.place.rating + ' / 5' : <i>n/a</i>} />
            <Label icon='dollar' color='green' content={this.props.place.price_level ? this.props.place.price_level + ' / 4' : <i>n/a</i>} />
          </Item.Description>
          <Item.Extra>
            {this.props.place.types.map((type, index) => {
              return <Label key={index} size='mini'>{type.replace(/_/g, ' ')}</Label>
            })}
          </Item.Extra>
        </Item.Content>
        {this.props.place.photos ? <Item.Image shape='rounded' size='tiny' src={this.props.place.photos[0].getUrl({'maxWidth': 100, 'maxHeight': 100})} /> : null }
      </Item>
    )
  }
}

export default PlaceItem
