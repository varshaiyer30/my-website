import * as React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { animated, config, useSpring } from 'react-spring'
import { Player } from '@lottiefiles/react-lottie-player'

const OuterDiv = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    scroll-snap-align: center;
`
const InnerDiv = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-between;
    width: 300px;
    height: 700px;
    cursor: pointer;
    padding-bottom: 70px;
    @media(min-width: 43em){
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        height: 520px;
        width: 580px;
        padding-bottom: 0px;
        padding-left: 10px;
    }
    @media (min-width: 62em){
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-between;
        width: 777px;
        height: 700px;
        padding-bottom: 0px;
    }
`
const ITMockup = styled(animated.img)`
    height: 450px;
    border-width: 1px;
    border-color: #666666;
    border-radius: 32px;
    border-style: solid;
    box-shadow: 0px 1px 4px 5px rgba(54, 93, 85, 0.6);
    filter: drop-shadow(0px 20px 40px rgba(0, 0, 0, 0.9)); 
    margin-bottom: 20px;
    @media(min-width: 43em){
        height: 550px;
        margin-bottom: 0px;
    }
    @media (min-width: 62em){
        height: 630px;
        margin-bottom: 35px;
    }
`
const LeftTitle = styled.div`
    color: white;
    font-size: 24px;
    font-weight: bold;
    text-align: left;
    width: 300px;
    @media(min-width: 43em){
        font-size: 36px;
        width: 400px;
    }
    @media (min-width: 62em){
        font-size: 48px;
        width: 400px;
    }   
`
const LeftDetail = styled.div`
    font-size: 16px;
    color: white;
    text-align: left;
    width: 300px;
    @media(min-width: 43em){
        font-size: 24px;
        width: 400px;
    }
    @media (min-width: 62em){
        font-size: 36px;
        width: 400px;
        /* font-weight: lighter; */
        margin-top: 5px;
    }
`

const LeftDates = styled.div`
    font-size: 16px;
    color: #8b8a8a;
    text-align: left;
    width: 300px;
    @media(min-width: 43em){
        font-size: 20px;
        width: 400px;
        margin-top: 5px;
    }
    @media (min-width: 62em){
        font-size: 24px;
        width: 400px;
        /* font-weight: lighter; */
        margin-top: 5px;
    }
`
const LeftDescription = styled.div`
    font-size: 14px;
    color: #ADACAC;
    text-align: left;
    width: 300px;
    @media(min-width: 43em){
        margin-top: 5px;
        width: 260px;
    }
    @media (min-width: 62em){
        font-size: 18px;
        width: 330px;
        /* font-weight: lighter; */
        margin-top: 5px;
    }
`

const IthacaTrailsText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 170px;
    width: 330px;
    padding-bottom: 30px;
    @media(min-width: 43em){
        display: flex;
        flex-direction: column;
        margin-top: 480px;
        margin-right: 20px;
        align-items: flex-start;
        justify-content: space-between;
        height: 170px;
        width: 280px;
        padding-bottom: 80px;
    }
    @media (min-width: 62em){
        display: flex;
        flex-direction: column;
        margin-top: 480px;
        align-items: flex-start;
        justify-content: space-between;
        height: 200px;
        width: 400px;
        margin-right: 60px;
        padding-bottom: 160px;
    }   
`
const RightClicktoLearn = styled.div`
    font-size: 14px;
    color: white;
    text-align: left;
    width: 300px;
    @media(min-width: 43em){
        width: 250px;
        text-align: left;
        margin-top: 5px;
    }
    @media (min-width: 62em){
        font-size: 18px;
        text-align: left;
        width: 330px;
        margin-top: 5px;
    }
`
const ExternalLink = styled.a`
    text-decoration: none;
`
export default function IthTrailsDiv(){
    const [iHover, setIHover] = useState(false)
    const iHoverState = useSpring({
        boxShadow: iHover ? '0px 4px 4px 7px rgba(230, 210, 161, 0.20)' : '0px 0px 0px 0px rgba(230, 210, 161, 0.2)',
        transform: iHover ? 'translateY(-2%)' : 'translateY(0%)',
        config: {
            mass: 1,
            tension: 170,
            friction: 26,
        }

    })

    const notion = () => {
        window.open('https://varshaiyer.notion.site/spott-19007c5d5131439ebcd7dddf15d5e5e3', '_blank')
    }

    return(
        <OuterDiv>
            <InnerDiv onClick={notion}>
                <IthacaTrailsText onMouseEnter={() => setIHover(true)}
                    onMouseLeave={() => setIHover(false)}>
                    <LeftTitle>spott</LeftTitle>
                    <LeftDetail>UI/UX design intern</LeftDetail>
                    <LeftDates>{"May \'21 - Aug \'21"}</LeftDates>
                    <LeftDescription>{"spott is a social map for finding what’s happening around you. I designed screens for a new groups feature, improved the current UI, developed some screens in the cross-platform Flutter app, and designed a waitlist website to build hype around the app."}</LeftDescription>
                    <RightClicktoLearn>click to learn more
                    </RightClicktoLearn>
                </IthacaTrailsText>
                <ITMockup 
                    onMouseEnter={() => setIHover(true)}
                    onMouseLeave={() => setIHover(false)}
                    src='/spott.png'
                    style={iHoverState}>
                </ITMockup>
                <Player
                    autoplay
                    loop
                    src="https://assets1.lottiefiles.com/packages/lf20_yjh6sxqn.json"
                    style={{ height: '130px', width: '130px'}}
                >
            </Player>
            </InnerDiv>
        </OuterDiv>
    )
}