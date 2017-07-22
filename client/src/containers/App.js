import React, { Component } from 'react'
import './App.css'
import { Container } from 'semantic-ui-react'
import NavContainer from './NavContainer'
import DirectionsContainer from './DirectionsContainer'
import MapContainer from './MapContainer'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <NavContainer />
        <Container>
          <DirectionsContainer />
          <MapContainer />
        </Container>
      </div>
    )
  }
}

export default App
