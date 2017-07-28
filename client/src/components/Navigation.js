import React, { Component } from 'react'
import { Container, Icon, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class NavContainer extends Component {
  render () {
    return (
      <Menu>
        <Menu.Item header>
          <Icon size='large' name='point' color='red' />
          WHERE SHOULD WE MEET?
        </Menu.Item>
      </Menu>
    )
  }
}

export default NavContainer
