import React from 'react'
import styled, { createGlobalStyle, keyframes } from 'styled-components'
import { Player } from '@lottiefiles/react-lottie-player'

const OuterDiv = styled.div`
/* picture + hi i'm varsha */
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  /* border-style: solid;
  border-color: white; */
  /* width: 100vw; */
  height: 100%;
  scroll-snap-align: end;
  /* max-width: 100%;
  max-height: 100%; */
`
const InnerDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 60%;
    /* border-style: solid;
    border-color: white; */

`
const OuterILikeToDesignDiv = styled.div`
/* I'm Varsha */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* width: 425px; */
 
`
const Picture = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 1px solid #ACDFFB;
  margin-bottom: 10px;
  margin-top: 8%;
`
const HiDiv = styled.div`
  font-weight: 300;
  font-size: 72px;
  color: white;
  margin-bottom: 10px;
`
const ILikeToDiv = styled.div`
  color: white;
  font-weight: 400;
  font-size: 72px;
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
export default function IntroDiv() {
    return(
        <OuterDiv>
            <InnerDiv>
                <Picture src='/profile.jpg '></Picture>
                <HiDiv>{"Hi, I\'m Varsha."}</HiDiv>
                <OuterILikeToDesignDiv>
                    <ILikeToDiv>I like to</ILikeToDiv>
                    <DesignDiv>design</DesignDiv>
                    <PeriodDiv>.</PeriodDiv>
                </OuterILikeToDesignDiv>
                <Player
                    autoplay
                    loop
                    src="https://assets1.lottiefiles.com/packages/lf20_yjh6sxqn.json"
                    style={{ height: '200px', width: '200px'}}
                >
                </Player>
            </InnerDiv>
        </OuterDiv>

    )
    
}
