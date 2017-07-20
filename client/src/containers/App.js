import React, { Component } from 'react'
import logo from '../images/logo.svg'
import './App.css'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBarContainer from './AppBarContainer'
import DirectionsContainer from './DirectionsContainer'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

class App extends Component {
  render () {
    return (
      <MuiThemeProvider>
        <div className='App'>
          <AppBarContainer />
          {/* <DirectionsContainer /> */}
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
