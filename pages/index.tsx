import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Header from '../components/Header'
import Card from '../components/Card'

const Picture = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 1px solid #ACDFFB;
  margin-left: 50px;
  margin-bottom: 10px;
`
const HiDiv = styled.div`
  font-weight: 300;
  font-size: 72px;
  color: white;
  margin-left: 60px;
  /* margin-bottom: 10px; */
`
const ILikeToDiv = styled.div`
  color: white;
  font-weight: 400;
  font-size: 72px;
  margin-left: 60px;
`
const PeriodDiv = styled.div`
  color: white;
  font-weight: bold;
  font-size: 72px;
  margin-left: 2px;
`
const DesignDiv = styled.div`
  color: #ACDFFB;
  font-weight: bold;
  font-size: 72px;
  margin-left:15px;
`
const OuterDiv2 = styled.div`
/* hi + i'm varsha */
display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  position: static;
  /* width: 968px; */
  height: 136px;
  margin-top: 40px;
  margin-bottom: 100px;
  
`

const OuterDiv3 = styled.div`
/* I'm Varsha */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* width: 425px; */
  height: 81px;
`
const OuterDiv4 = styled.div`
/* picture + hi i'm varsha */
  margin-top: 9%;
  margin-bottom: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 410px;
`

const GlobalStyle = createGlobalStyle`
  body {
    margin: 50px;
    background: black;
    font-family: SF Pro Display;
  }
`

export default function Home() {
  return (
    <div>
      <Head>
        <title>home</title>
      </Head>
      <GlobalStyle />
      <Header page={'home'} />
      <OuterDiv4>
        <Picture src='/profile.jpg '></Picture>
        <HiDiv>{"Hi, I\'m Varsha."}</HiDiv>
        <OuterDiv3>
          <ILikeToDiv>I like to</ILikeToDiv>
          <DesignDiv>design</DesignDiv>
          <PeriodDiv>.</PeriodDiv>
        </OuterDiv3>
      </OuterDiv4>
      <Card />
    </div>
  )
}
