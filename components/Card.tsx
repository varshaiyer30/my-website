import * as React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { animated, config, useSpring } from 'react-spring'
import Contacts from './Contacts'
import { Player } from '@lottiefiles/react-lottie-player'

const OuterDiv = styled.div`
    /* margin-left: 337px;
    margin-right: 337px; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
const OuterCardDiv = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    max-height: 100%;
    border-style: solid;
    border-color: white;
    margin-bottom: 120px;
`
const CardDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    /* margin-bottom: 120px; */
    /* width: 100vw;
    height: 100vh; */
    width: 777px;
    height: 700px;
`
const SMockup = styled(animated.img)`
    height: 700px;
    width: 322px;
    border-width: 1px;
    border-color: #666666;
    border-radius: 32px;
    border-style: solid;
    box-shadow: 0px 1px 4px 5px rgba(230, 210, 161, 0.25);
/* filter: drop-shadow(0px 20px 40px rgba(102, 102, 102, 0.25)); */
`
const ITMockup = styled(animated.img)`
    height: 700px;
    width: 322px;
    border-width: 1px;
    border-color: #666666;
    border-radius: 32px;
    border-style: solid;
    box-shadow: 0px 1px 4px 5px rgba(54, 93, 85, 0.6);
filter: drop-shadow(0px 20px 40px rgba(0, 0, 0, 0.9)); 
`
const VMockup = styled(animated.img)`
    height: 700px;
    width: 322px;
    border-width: 1px;
    border-color: #666666;
    border-radius: 32px;
    border-style: solid;
    box-shadow: 0px 1px 4px 5px rgba(255, 255, 255, 0.25);
filter: drop-shadow(0px 20px 40px rgba(102, 102, 102, 0.25));
`
const SpottText = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 480px;
    align-items: flex-end;
    justify-content: space-between;
    height: 200px;
    width: 400px;
    margin-bottom: 200px;
`
const LeftTitle = styled.div`
    color: white;
    font-size: 48px;
    font-weight: bold;
    text-align: left;
    width: 400px;
    font-family: SF Pro Display;
    
`
const LeftDetail = styled.div`
    font-size: 36px;
    color: white;
    text-align: left;
    width: 400px;
    /* font-weight: lighter; */
    margin-top: 5px;
`

const LeftDates = styled.div`
    font-size: 24px;
    color: #666666;
    text-align: left;
    width: 400px;
    /* font-weight: lighter; */
    margin-top: 5px;
`
const LeftDescription = styled.div`
    font-size: 18px;
    color: #ADACAC;
    text-align: left;
    width: 330px;
    /* font-weight: lighter; */
    margin-top: 5px;
`

const IthacaTrailsText = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 480px;
    align-items: flex-start;
    justify-content: space-between;
    height: 200px;
    width: 400px;
    margin-bottom: 220px;
    
`
const VSCOText = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 480px;
    align-items: flex-end;
    justify-content: space-between;
    height: 200px;
    width: 400px;
    margin-bottom: 200px;
    
`

const RightTitle = styled.div`
    color: white;
    font-size: 48px;
    font-weight: bold;
    text-align: right;
    width: 400px;   
`
const RightDetail = styled.div`
    font-size: 36px;
    color: white;
    text-align: right;
    width: 400px;
    /* font-weight: lighter; */
    margin-top: 5px;
`

const RightDates = styled.div`
    font-size: 24px;
    color: #666666;
    text-align: right;
    width: 400px;
    /* font-weight: lighter; */
    margin-top: 5px;
`
const RightDescription = styled.div`
    font-size: 18px;
    color: #ADACAC;
    text-align: right;
    width: 330px;
    /* font-weight: lighter; */
    margin-top: 5px;
`
const ExternalLink = styled.a`
    text-decoration: none;
`


export default function Card() {
    const [sHover, setSHover] = useState(false)
    const [iHover, setIHover] = useState(false)
    const [vHover, setVHover] = useState(false)


    const sHoverState = useSpring({
        boxShadow: sHover ? '0px 4px 4px 7px rgba(230, 210, 161, 0.20)' : '0px 0px 0px 0px rgba(230, 210, 161, 0.2)',
        transform: sHover ? 'translateY(-2%)' : 'translateY(0%)',
        config: {
            mass: 1,
            tension: 170,
            friction: 26,
        }
    })

    const iHoverState = useSpring({
        boxShadow: iHover ? '0px 4px 4px 7px rgba(28, 77, 67, 0.50)' : '0px 0px 0px 0px rgba(54, 93, 85, 0.2)',
        transform: iHover ? 'translateY(-2%)' : 'translateY(0%)',
        config: {
            mass: 1,
            tension: 170,
            friction: 26,
        }

    })

    const vHoverState = useSpring({
        boxShadow: vHover ? '0px 4px 4px 7px rgba(255, 255, 255, 0.20)' : '0px 0px 0px 0px rgba(255, 255, 255, 0.20)',
        transform: vHover ? 'translateY(-2%)' : 'translateY(0%)',
        config: {
            mass: 1,
            tension: 170,
            friction: 26,
        }
    })

    return (
        <OuterDiv>
            {/* <OuterDiv4>
                <Picture src='/profile.jpg '></Picture>
                <HiDiv>{"Hi, I\'m Varsha."}</HiDiv>
                <OuterDiv3>
                    <ILikeToDiv>I like to</ILikeToDiv>
                    <DesignDiv>design</DesignDiv>
                    <PeriodDiv>.</PeriodDiv>
                </OuterDiv3>
                <Player
                    autoplay
                    loop
                    src="https://assets1.lottiefiles.com/packages/lf20_yjh6sxqn.json"
                    style={{ height: '150px', width: '150px'}}
                >
                </Player>
            </OuterDiv4> */}
            <OuterCardDiv>
            <CardDiv>
                <SMockup
                    onMouseEnter={() => setSHover(true)} 
                    onMouseLeave={() => setSHover(false)} 
                    src='/spott.png' 
                    style={sHoverState}/>
                <SpottText onMouseEnter={() => setSHover(true)} 
                    onMouseLeave={() => setSHover(false)} >
                    <RightTitle>spott</RightTitle>
                    <RightDetail>UI/UX design intern</RightDetail>
                    <RightDescription>spott is a social map for finding what’s happening around you. I designed screens for a new groups feature, improved the current UI, developed some screens in the cross-platform Flutter app, and designed and built a dashboard for enterprise users.</RightDescription>
                    <RightDates>{"May \'21 - Aug \'21"}</RightDates>
                </SpottText>
            </CardDiv>
            </OuterCardDiv>
            <OuterCardDiv>
            <ExternalLink href="https://varshaiyer.notion.site/varshaiyer/Ithaca-Trails-App-Dev-Hack-Challenge-FA-20-8b4df6cfb2d5428cb900a8af3b4eb565" target="_blank">
                <CardDiv>
                    <IthacaTrailsText onMouseEnter={() => setIHover(true)}
                        onMouseLeave={() => setIHover(false)}>
                        <LeftTitle>AppDev Hack Challenge</LeftTitle>
                        <LeftDetail>Ithaca Trails</LeftDetail>
                        <LeftDescription>{"As a part of hack challenge organized by Cornell University\'s AppDev project team, I designed a new app for finding trails in Ithaca, New York."}</LeftDescription>
                        <LeftDates>{"Dec \'20 - Feb \'21"}</LeftDates>
                    </IthacaTrailsText>
                    <ITMockup 
                        onMouseEnter={() => setIHover(true)}
                        onMouseLeave={() => setIHover(false)}
                        src='/ithacatrails.png'
                        style={iHoverState}>
                    </ITMockup>
                </CardDiv>
            </ExternalLink>
            </OuterCardDiv>
            <OuterCardDiv>
            <ExternalLink href="https://bootcamp.uxdesign.cc/vsco-filtering-main-feed-content-ef23a7c2c449" target="_blank">
                <CardDiv>
                    <VMockup 
                        onMouseEnter={() => setVHover(true)}
                        onMouseLeave={() => setVHover(false)}
                        src='/vsco.png'
                        style={vHoverState}>
                    </VMockup>
                    <VSCOText onMouseEnter={() => setVHover(true)}
                        onMouseLeave={() => setVHover(false)}>
                        <RightTitle>VSCO Case Study</RightTitle>
                        <RightDetail>Medium Bootcamp</RightDetail>
                        <RightDescription>{"This is my first case study I completed as a part of a digital product design class I took during my first semester as a student at Cornell University. It was published by UX Collective\’s Medium publication - Bootcamp."}</RightDescription>
                        <RightDates>{"Sept \'20 - Feb \'21"}</RightDates>
                    </VSCOText>
                </CardDiv>
            </ExternalLink>
            </OuterCardDiv>
            <Contacts />
        </OuterDiv>

    )
}
