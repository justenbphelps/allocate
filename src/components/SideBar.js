import React, { Component } from 'react'
import styled from 'styled-components'

import '../css/Allocate.css'

const SideBarWrapper = styled.div`
    grid-column: 3;
    padding: 20px;
    border-radius: 0.6rem;
    background-color: #F9FAFB;
    box-shadow: 0px 2px 4px rgba(100,100,100,0.1);
`

export default class SideBar extends Component {
  render() {
    return (
        <SideBarWrapper>
            <h2>Sidebar</h2>
        </SideBarWrapper>
    )
  }
}

