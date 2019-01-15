import React, { Component } from 'react'
import styled from 'styled-components'

import Nav from './Nav'

import '../css/Allocate.css'

const JoinContent = styled.div`
    padding: 20px;
    width: 85%;
    margin: 0 auto;
`

const ContentWindow1 = styled.div`
    background-color: #F9FAFB;
    padding: 20px;
    border-radius: 0.6rem;
    box-shadow: 0px 2px 4px rgba(100,100,100,0.1);
`

export default class Join extends Component {
  render() {
    return (
      <div>
        <Nav />
        <JoinContent>            
            <ContentWindow1>
              <h2>Join content</h2>
            </ContentWindow1>
        </JoinContent>
      </div>
    )
  }
}

