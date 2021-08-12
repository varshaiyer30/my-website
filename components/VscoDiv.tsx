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
    @media (min-width: 43em){
        display:flex;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 100%;
        scroll-snap-align: center;
    }
    @media (min-width: 62em){
        display:flex;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 100%;
        scroll-snap-align: center;
    }
`
const InnerDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 300px;
    height: 700px;
    padding-bottom: 70px;
    @media(min-width: 43em){
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        height: 500px;
        width: 580px;
        margin-bottom: 0px;
    }
    @media (min-width: 62em){
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 777px;
        height: 700px;
        margin-bottom: 0px;
    }
`
const VMockup = styled(animated.img)`
    height: 470px;
    border-width: 1px;
    border-color: #666666;
    border-radius: 32px;
    border-style: solid;
    box-shadow: 0px 1px 4px 5px rgba(255, 255, 255, 0.25);
    filter: drop-shadow(0px 20px 40px rgba(102, 102, 102, 0.25));
    @media(min-width: 43em){
        height: 600px;
    }
    @media (min-width: 62em){
        height: 630px;
    }
`
const VSCOText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 185px;
    width: 330px;
    padding-bottom: 25px;
    @media(min-width: 43em){
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin-top: 480px;
        justify-content: space-between;
        height: 220px;
        width: 280px;
        margin-bottom: 280px;
    }
    @media (min-width: 62em){
        display: flex;
        flex-direction: column;
        margin-top: 480px;
        align-items: flex-end;
        justify-content: space-between;
        height: 200px;
        width: 400px;
        margin-bottom: 200px;
    }
    
`

const RightTitle = styled.div`
    color: white;
    font-size: 24px;
    font-weight: bold;
    text-align: left;
    width: 300px;
    @media(min-width: 43em){
        font-size: 36px;
        text-align: right;
        width: 300px;
    }
    @media (min-width: 62em){
        font-size: 48px;
        text-align: right;
        width: 400px;   
    }
`
const RightDetail = styled.div`
    font-size: 16px;
    color: white;
    text-align: left;
    width: 300px;
    @media(min-width: 43em){
        font-size: 24px;
        text-align: right;
        margin-top: 5px;
        width: 400px;
    }
    @media (min-width: 62em){
        font-size: 36px;
        width: 400px;
        text-align: right;
        margin-top: 5px;
    }
`

const RightDates = styled.div`
    font-size: 16px;
    color: #8b8a8a;
    text-align: left;
    width: 300px;
    @media(min-width: 43em){
        font-size: 20px;
        text-align: right;
        width: 400px;
        margin-top: 5px;
    }
    @media (min-width: 62em){
        font-size: 24px;
        text-align: right;
        width: 400px;
        margin-top: 5px;
    }
`
const RightDescription = styled.div`
    font-size: 14px;
    color: #ADACAC;
    text-align: left;
    width: 300px;
    @media(min-width: 43em){
        width: 270px;
        text-align: right;
        margin-top: 5px;
    }
    @media (min-width: 62em){
        font-size: 18px;
        text-align: right;
        width: 330px;
        margin-top: 5px;
    }
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
                        <RightDates>{"Sept \'20 - Feb \'21"}</RightDates>
                        <RightDescription>{"This is my first case study I completed as a part of a digital product design class I took during my first semester as a student at Cornell University. It was published by UX Collective\’s Medium publication - Bootcamp."}</RightDescription>
                    </VSCOText>
                </InnerDiv>
            </ExternalLink>
        </OuterDiv>
    )
}