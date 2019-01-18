import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import '../css/Allocate.css'

const NavBar = styled.div`
    height: 100px;
    padding: 20px;
    background-color: #F9FAFB;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    width: 100%;
`

const LogoH1 = styled.h1`
  color: #E4401D;
  font-size: 14px;
  float: left;
  text-transform: uppercase;
  opacity: 0.8;
  letter-spacing: 0.1rem;

  :hover {
    color: #252525;
  }
`

const NavLinks = styled.ul`
    margin: 20px 0 0;
    padding: 0;
    list-style-type: none;
    text-align: right;

    >li {
        display: inline-block;
        padding: 0 10px; 
        opacity: 0.4;
        text-transform: uppercase;
        font-size: 14px;
    }
`

export default class Nav extends Component {
  render() {
    return (
      <div className="nav-container">
        <NavBar>
        <Link to='/'>
            <LogoH1>Allocate</LogoH1>
        </Link>
        <NavLinks>
            <li>
                <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
            <Link to="/login">Login</Link>
            </li>            
        </NavLinks>
        </NavBar>
      </div>
    )
  }
}

