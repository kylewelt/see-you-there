import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class NavContainer extends Component {
  render () {
    return (
      <Menu>
        <Link to={'/'}>
          <Menu.Item header>
            <Icon size='large' name='map outline' />
            WHERE SHOULD WE MEET?
          </Menu.Item>
        </Link>
      </Menu>
    )
  }
}

export default NavContainer
