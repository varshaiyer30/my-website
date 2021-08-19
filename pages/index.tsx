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
import IntroArtDiv from '../components/IntroArtDiv'
import IntroAbtDiv from '../components/IntroAbtDiv'
import AboutDiv1 from '../components/AboutDiv1'
import AboutDiv2 from '../components/AboutDiv2'
import AboutDiv3 from '../components/AboutDiv3'

const FirstDiv = styled.div`
  width: calc(100vw - (100vw - 100%));
  height: 100vh;
  text-align: center;
  scroll-snap-type: y mandatory;
  flex-direction: column;
  align-items: center;
  scroll-padding: 0px;
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
      {/* <Header page={'home'} /> */}
      <FirstDiv>
        <Head>
          <title>home</title>
        </Head>
        <GlobalStyle />
        <IntroDiv />
        <SpottDiv />
        <IthTrailsDiv />
        <VscoDiv />
        <IntroAbtDiv />
        <AboutDiv1 />
        <AboutDiv2 />
        <AboutDiv3 />
        <IntroArtDiv />
        <Contacts/>
      </FirstDiv>
    </div>
  )
}
{/* <Header page={'home'} /> */}
        {/* <Contacts /> */}
