import React, { Component } from 'react'
import styled from 'styled-components'
import '../css/App.css'
import '../css/Allocate.css'

import Login from '../components/Login'


const AppTitle = styled.h1 `
  font-size: 14px;
  text-transform: uppercase;
  opacity: 0.6;
  letter-spacing: 0.1rem;
`


export default class App extends Component {
  render() {
    return (
      <div className="App">
      <AppTitle>Allocate</AppTitle>
        <Login />
      </div>
    );
  }
}

