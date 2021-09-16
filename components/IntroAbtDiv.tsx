import React from 'react'
import styled, { createGlobalStyle, keyframes } from 'styled-components'
import { Player } from '@lottiefiles/react-lottie-player'
import { resolveModuleName } from 'typescript'

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
    @media (min-width: 43em){
  height: 40%
}
@media (min-width: 62em){
  height: 60%;
}
`
const OuterILikeToDesignDiv = styled.div`
/* I'm Varsha */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
    margin-top: 120px;
`
const HiDiv = styled.div`
font-weight: 300;
  font-size: 38px;
  color: white;
  width: 300px;
  margin-bottom: 10px;
  @media (min-width: 43em){
  font-size: 50px;
  margin-top: 20px;
}
@media (min-width: 62em){
  font-size: 50px;
  margin-top: 60px;
}
`
const ILikeToDiv = styled.div`
color: white;
  font-weight: 400;
  font-size: 35px;
  width: 190px;
  @media (min-width: 43em){
  font-size: 64px;
}
@media (min-width: 62em){
  font-size: 72px;
}
`
const PeriodDiv = styled.div`
color: white;
  font-weight: bold;
  font-size: 35px;
  margin-left: 2px;
  @media (min-width: 43em){
  font-size: 64px;
}
@media (min-width: 62em){
  font-size: 72px;
}
`
const DesignDiv = styled.div`
color: #ACDFFB;
  font-weight: bold;
  font-size: 35px;
  margin-left:8px;
  @media (min-width: 43em){
  font-size: 64px;
  margin-left:15px;
}
@media (min-width: 62em){
  font-size: 72px;
  margin-left:15px;
}
`
const Link = styled.a`
  text-decoration: underline;
  text-decoration-color: #ACDFFB;
  text-decoration-thickness: 3.5px;
  color: #ACDFFB;
  font-weight: 300;
  cursor: pointer;

`
export default function IntroDiv() {
  const pdf = () => {
    window.open('resume.pdf', '_blank')
}
    return(
        <OuterDiv>
            <InnerDiv>
                {/* <Picture src='/profile.jpg '></Picture> */}
                {/* <HiDiv>{"Hi, I\'m Varsha."}</HiDiv> */}
                <OuterILikeToDesignDiv>
                    <ILikeToDiv>A little about</ILikeToDiv>
                    <DesignDiv>me</DesignDiv>
                    <PeriodDiv>...</PeriodDiv>
                </OuterILikeToDesignDiv>
                <HiDiv>Click <Link onClick={pdf}>here</Link> to view my resume.
                </HiDiv>
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
