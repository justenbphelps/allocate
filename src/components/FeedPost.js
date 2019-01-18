import React, { Component } from 'react'
import styled from 'styled-components'

import '../css/Allocate.css'

const FeedPostWrapper = styled.div`
    display: grid;
    grid-template-columns: 10% 50% 40%;
    grid-template-rows: repeat(2, 1fr);
    align-items: center;
    grid-gap: 5px;
    margin: 20px 0;
    padding: 10px;
    border: 1px solid rgba(0,0,0,0.1);
    background-color: #F9FAFB;
`

const FeedPostBox = styled.div`
    grid-row: 1 / 4;
    padding: 10px;
    border-right: 1px solid rgba(0,0,0,0.1);
`
const FeedPostImg = styled.img`
    width: 65px;
    padding: 5px;
`

const FeedPostTitle = styled.h4`
    text-align: left;
    font-weight: bold;
    font-size: 14px;
    grid-column: 2 / 3;
    grid-row: 1;
    margin: 0 20px;
`

const FeedPostDescription = styled.h4`
    text-align: left;
    font-size: 14px;
    grid-column: 2 / 3;
    grid-row: 2;
    margin: 0 20px;
`

const FeedPostButton = styled.button`
    padding: 10px;
    margin-right: 10px;
    border: none;
    grid-row: 2;
    justify-self: end;
    background-color: #E4401D;
    border-radius: 0.2rem;
    color: white;
    font-weight: bold;
    font-size: 12px;
`

const FeedPostRate = styled.span`
    justify-self: end;
    margin-right: 20px;
`

export default class FeedPost extends Component {
  render() {
    return (
        <FeedPostWrapper>
            <FeedPostBox>
                <FeedPostImg src="./shopify_logo.png"></FeedPostImg>                
            </FeedPostBox>
            <FeedPostTitle>Web Developer - Full Stack - Full Time</FeedPostTitle>
            <FeedPostDescription>This is the job description. All of the information regarding the position will go here.</FeedPostDescription>
            <FeedPostRate>$25/hr</FeedPostRate>
            <FeedPostButton>Learn More</FeedPostButton>
        </FeedPostWrapper>
    )
  }
}

