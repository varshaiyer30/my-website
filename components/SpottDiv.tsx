import * as React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { animated, config, useSpring } from 'react-spring'

const OuterDiv = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    scroll-snap-align: center;
    margin-bottom: 120px;
`
const InnerDiv = styled.div`
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
export default function SpottDiv(){
    const [sHover, setSHover] = useState(false)
    const sHoverState = useSpring({
        boxShadow: sHover ? '0px 4px 4px 7px rgba(230, 210, 161, 0.20)' : '0px 0px 0px 0px rgba(230, 210, 161, 0.2)',
        transform: sHover ? 'translateY(-2%)' : 'translateY(0%)',
        config: {
            mass: 1,
            tension: 170,
            friction: 26,
        }
    })

    return(
        <OuterDiv>
            <InnerDiv>
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
            </InnerDiv>
        </OuterDiv>
    )
}