import React, { Component } from 'react'
import styled from 'styled-components'


import '../css/Allocate.css'

import Login from '../components/Login'

const AppTitle = styled.h1 `
  margin-top: 20px;
  display: inline-block;
  font-size: 14px;
  text-transform: uppercase;
  opacity: 0.6;
  letter-spacing: 0.1rem;

  :hover {
    color: #E4401D;
  }
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

