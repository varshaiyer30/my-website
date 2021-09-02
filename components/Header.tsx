import * as React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import HeaderText from './HeaderText'

const OuterDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  height: 20vh;
  width: 1330px;
  position: fixed;
  top: 0;
  background-color: clear;
  z-index: 5;
  /* margin-top: 7vh; */
`
const InnerDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 15vh;
  width: 500px;
  background-color: #00000071;
`
const Brand = styled.div`
  color: #ACDFFB;
  font-size: 48px;
  font-weight: bold;
  text-align: center;
`
const Logo = styled.img`
  width: 48px;
  height: 61px;
  /* margin-left: 50px; */
`

const TextDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-end;
`

const Spacer = styled.div`
    width:830px;
`

const GlobalStyle = createGlobalStyle`
  body {
    margin: 50px;
    background: black;
    font-family: SF Pro Display;
  }
`

interface HeaderProps {
  page: string
}

const Header = (props: HeaderProps): JSX.Element => {
  return (
    <OuterDiv>
      <InnerDiv>
      <TextDiv>
        <HeaderText text={'work'} selected={props.page === 'home'} link='/' />
        <HeaderText text={'about/resume'} selected={props.page === 'about'} link='/about' />
        <HeaderText text={'art'} selected={props.page === 'art'} link='/art' />
      </TextDiv>
      </InnerDiv>
    </OuterDiv>
  )
}

export default Header