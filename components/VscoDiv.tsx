import * as React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { animated, config, useSpring } from 'react-spring'

const OuterDiv = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
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
export default function VscoDiv(){
    const [vHover, setVHover] = useState(false)
    const vHoverState = useSpring({
        boxShadow: vHover ? '0px 4px 4px 7px rgba(255, 255, 255, 0.20)' : '0px 0px 0px 0px rgba(255, 255, 255, 0.20)',
        transform: vHover ? 'translateY(-2%)' : 'translateY(0%)',
        config: {
            mass: 1,
            tension: 170,
            friction: 26,
        }
    })

    return(
        <OuterDiv>
            <ExternalLink href="https://bootcamp.uxdesign.cc/vsco-filtering-main-feed-content-ef23a7c2c449" target="_blank">
                <InnerDiv>
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
                </InnerDiv>
            </ExternalLink>
        </OuterDiv>
    )
}