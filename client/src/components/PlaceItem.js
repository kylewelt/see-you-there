import { default as React, Component } from 'react'
import { Icon, Item, Label } from 'semantic-ui-react'

class PlaceItem extends Component {
  render () {
    return (
      <Item className={this.props.meetupIndex === this.props.index ? 'place-result selected-place' : 'place-result'} onClick={() => this.props.onPlaceClick(this.props.index)} >
        <Item.Content>
          <Item.Header>
            {this.props.place.name}
          </Item.Header>
          <Item.Description>
            <div>
              <Icon name='star' disabled={!this.props.place.rating || Math.round(this.props.place.rating) < 1} />
              <Icon name='star' disabled={!this.props.place.rating || Math.round(this.props.place.rating) < 2} />
              <Icon name='star' disabled={!this.props.place.rating || Math.round(this.props.place.rating) < 3} />
              <Icon name='star' disabled={!this.props.place.rating || Math.round(this.props.place.rating) < 4} />
              <Icon name='star' disabled={!this.props.place.rating || Math.round(this.props.place.rating) < 5} />
              <span> {this.props.place.rating}</span>
            </div>
            <div>
              <Icon name='dollar' disabled={!this.props.place.price_level || Math.round(this.props.place.price_level) < 1} />
              <Icon name='dollar' disabled={!this.props.place.price_level || Math.round(this.props.place.price_level) < 2} />
              <Icon name='dollar' disabled={!this.props.place.price_level || Math.round(this.props.place.price_level) < 3} />
              <Icon name='dollar' disabled={!this.props.place.price_level || Math.round(this.props.place.price_level) < 4} />
            </div>
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
