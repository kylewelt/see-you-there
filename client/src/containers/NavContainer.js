import React, { Component } from 'react'
import { Container, Menu } from 'semantic-ui-react'

class NavContainer extends Component {
  render () {
    return (
      <Menu pointing>
        <Container>
          <Menu.Item>
            WTFSWM
          </Menu.Item>
        </Container>
      </Menu>
    )
  }
}

export default NavContainer
