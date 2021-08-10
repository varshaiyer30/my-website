import * as React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import HeaderText from './HeaderText'

const OuterDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 7vh;
  margin-right: 7vh;
  height: 20vh;
  position: relative;
  /* margin-top: 7vh; */
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
    align-items: center;
`

const Spacer = styled.div`
    flex-grow: 1;
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
      <Logo src='/logo.png '></Logo>
      <Spacer />
      <TextDiv>
        <HeaderText text={'home'} selected={props.page === 'home'} link='/' />
        <HeaderText text={'about'} selected={props.page === 'about'} link='/about' />
        <HeaderText text={'resume'} selected={props.page === 'resume'} link='/resume' />
        <HeaderText text={'art'} selected={props.page === 'art'} link='/art' />
      </TextDiv>
    </OuterDiv>
  )
}

export default Header