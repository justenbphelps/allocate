import React, { Component } from 'react'
import styled from 'styled-components'

import '../css/Allocate.css'

const SideBarWrapper = styled.div`
  grid-column: 3;
  padding: 20px;
  background-color: #F9FAFB;
  box-shadow: 0px 2px 4px rgba(100,100,100,0.1);
`

const SidebarTitle = styled.h3`
  font-size: 14px;
  text-transform: uppercase;
  opacity: 0.7;
  margin-bottom: 20px;
`

export default class SideBar extends Component {
  render() {
    return (
        <SideBarWrapper>
            <SidebarTitle>Sidebar</SidebarTitle>
        </SideBarWrapper>
    )
  }
}

