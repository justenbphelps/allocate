import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const LoginWrapper = styled.div`
    margin: 200px auto;
    padding: 20px;
    background-color: #F9FAFB;
    width: 600px;
    height: 400px;
    box-shadow: 0px 2px 10px rgb(0,0,0,0.1);
    border-radius: 0.6rem;

    :hover {
        box-shadow: 0px 4px 10px rgb(0,0,0,0.2);
    }
`

const LoginForm = styled.div`
    padding-top: 100px;
    width: 400px;
    margin: 0 auto;
`

const SubmitButton = styled.button`
    background-color: #E5401E;
    color: white;
    width: 50%;
    font-weight: 600;
    font-size: 16px;

    :hover {
        box-shadow: 0px 4px 10px rgb(0,0,0,0.2);
        background-color: #DE3618;
        color: white;
    }
`

export default class Login extends Component {
  render() {
    return (
      <LoginWrapper>
        <LoginForm>
            <form>
                <div class="form-group">
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"></input>
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                </div>   
                <Link to='/dashboard'>
                    <SubmitButton className="btn btn-lg">Login</SubmitButton>
                </Link>
                {/* Add Auth script for login / signup buttons
                    // If cookies are recognized, change button to login
                 */}            
            </form>    
        </LoginForm>
      </LoginWrapper>
    )
  }
}

