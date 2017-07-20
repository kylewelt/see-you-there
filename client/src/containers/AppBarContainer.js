import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import FontIcon from 'material-ui/FontIcon'
import IconButton from 'material-ui/IconButton'

class AppBarContainer extends Component {
  render () {
    return (
      <AppBar
        title='WTFSWM'
        showMenuIconButton={false}
        // iconElementRight={
        //   <IconButton>
        //     <FontIcon className='material-icons'>
        //       account_circle
        //     </FontIcon>
        //   </IconButton>
        // }
      />
    )
  }
}

export default AppBarContainer
