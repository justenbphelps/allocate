import React, { Component } from 'react'
import styled from 'styled-components'

import '../css/Allocate.css'

const FeedWrapper = styled.div`
    grid-column: 1 / 3;
    padding: 20px;
    border-radius: 0.6rem;
    background-color: #F9FAFB;
    box-shadow: 0px 2px 4px rgba(100,100,100,0.1);
`

export default class Feed extends Component {
  render() {
    return (
      <FeedWrapper>
        <h2>Feed</h2>
      </FeedWrapper>
    );
  }
}

