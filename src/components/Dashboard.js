import React, { Component } from 'react'
import styled from 'styled-components'

import Nav from './Nav'
import Feed from './Feed'
import SideBar from './SideBar'
import Footer from './Footer'

import '../css/Allocate.css'

const DashboardWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 20px;
  display: grid;
  grid-template-columns: 2(70%, 30%);
  grid-gap: 20px;
`

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Nav />
        <DashboardWrapper>
          <Feed />
          <SideBar />
        </DashboardWrapper>
        <Footer />
      </div>
    )
  }
}

