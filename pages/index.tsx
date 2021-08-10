import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styled, { createGlobalStyle, keyframes } from 'styled-components'
import Header from '../components/Header'
import { animated, config, useSpring } from 'react-spring'
import { Player } from '@lottiefiles/react-lottie-player'
import SpottDiv from '../components/SpottDiv'
import IthTrailsDiv from '../components/IthTrailsDiv'
import VscoDiv from '../components/VscoDiv'
import IntroDiv from '../components/IntroDiv'
import Contacts from '../components/Contacts'

const FirstDiv = styled.div`
  width: calc(100vw - (100vw - 100%));
  height: 100vh;
  text-align: center;
  scroll-snap-type: y mandatory;
  scroll-padding: 10px;
  overflow-y: scroll;
  background-color: black;
`
const GlobalStyle = createGlobalStyle`
  body {
    /* margin: 50px; */
    margin: 0;
    background: black;
    font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif;
}
`
export default function Home() {
  return (
    <div>
      <FirstDiv>
        <Head>
          <title>home</title>
        </Head>
        <GlobalStyle />
        <IntroDiv />
        <SpottDiv />
        <IthTrailsDiv />
        <VscoDiv />
      </FirstDiv>
    </div>
  )
}
{/* <Header page={'home'} /> */}
        {/* <Contacts /> */}
