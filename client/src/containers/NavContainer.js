import React, { Component } from 'react'
import { Container, Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

class NavContainer extends Component {
  render () {
    return (
      <Menu>
        <Container>
          <Menu.Item as={NavLink} to='/'>
            WTFSWM
          </Menu.Item>
        </Container>
      </Menu>
    )
  }
}

export default NavContainer
