import React, { Component } from 'react'
import styled from 'styled-components'

import FeedPost from './FeedPost'

import '../css/Allocate.css'

const FeedWrapper = styled.div`
  grid-column: 1 / 3;
  padding: 20px;
  background-color: #F9FAFB;
  box-shadow: 0px 2px 4px rgba(100,100,100,0.1);
`

const FeedTitle = styled.h3`
  font-size: 14px;
  text-transform: uppercase;
  opacity: 0.7;
  margin-bottom: 20px;
`
const FeedSection1 = styled.div`
  height: 1000px;
  margin: 0 auto;
  background-color: #F4F6F8;
  padding: 32px;
  box-shadow: 2px 4px 6px rgba(100,100,100,0.1);
`


export default class Feed extends Component {
  render() {
    return (
      <FeedWrapper>
        <FeedTitle>Your Feed</FeedTitle>
        <FeedSection1>
          <FeedPost/>
          <FeedPost/>
          <FeedPost/>
        </FeedSection1>
      </FeedWrapper>
    );
  }
}

