import React, { Component } from 'react'
import { Container, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class NavContainer extends Component {
  render () {
    return (
      <Menu>
        <Container>
          <Menu.Item as={Link} to='/'>
            WSWM
          </Menu.Item>
        </Container>
      </Menu>
    )
  }
}

export default NavContainer
