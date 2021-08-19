import React from 'react'
import styled, { createGlobalStyle, keyframes } from 'styled-components'
import { Player } from '@lottiefiles/react-lottie-player'

const OuterDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    scroll-snap-align: end;
`
const InnerDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 60%;
    cursor: default;
`
const OuterILikeToDesignDiv = styled.div`
/* I'm Varsha */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const Picture = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  border: 1px solid #ACDFFB;
  margin-bottom: 10px;
  margin-top: 8%; 
  @media (min-width: 43em){
  width: 200px;
  height: 200px;
}

@media (min-width: 62em){
  width: 200px;
  height: 200px;
}
`
const HiDiv = styled.div`
font-weight: 300;
  font-size: 48px;
  color: white;
  margin-bottom: 10px;
  @media (min-width: 43em){
  font-size: 72px;
}
@media (min-width: 62em){
  font-size: 72px;
}
`
const ILikeToDiv = styled.div`
color: white;
  font-weight: 400;
  font-size: 48px;
  @media (min-width: 43em){
  font-size: 72px;
}
@media (min-width: 62em){
  font-size: 72px;
}
`
const PeriodDiv = styled.div`
color: white;
  font-weight: bold;
  font-size: 48px;
  margin-left: 2px;
  @media (min-width: 43em){
  font-size: 72px;
}
@media (min-width: 62em){
  font-size: 72px;
}
`
const DesignDiv = styled.div`
color: #ACDFFB;
  font-weight: bold;
  font-size: 48px;
  margin-left:15px;
  @media (min-width: 43em){
  font-size: 72px;
}
@media (min-width: 62em){
  font-size: 72px;
}
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
