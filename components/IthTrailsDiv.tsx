import * as React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { animated, config, useSpring } from 'react-spring'
import { Player } from '@lottiefiles/react-lottie-player'

const OuterDiv = styled.div`
    display:flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    height: 100%;
    scroll-snap-align: center;
`
const InnerDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 300px;
    height: 700px;
    padding-bottom: 70px;
    cursor: pointer;
    @media(min-width: 43em){
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-between;
        height: 500px;
        width: 550px;
        padding-bottom: 0px;
        padding-right: 30px;
    }
    @media (min-width: 62em){
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-between;
        width: 777px;
        height: 700px;
        margin-left: 100px;
        padding-bottom: 0px;
    }
`
const SMockup = styled(animated.img)`
    height: 450px;
    border-width: 1px;
    border-color: #666666;
    border-radius: 32px;
    border-style: solid;
    box-shadow: 0px 1px 4px 5px rgba(230, 210, 161, 0.25);
    filter: drop-shadow(0px 20px 40px rgba(102, 102, 102, 0.25));
    @media(min-width: 43em){
        height: 550px;
        margin-left: 10px;
        
    }
    @media (min-width: 62em){
        height: 630px;
        margin-bottom: 35px;
    }
`
const SpottText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 200px;
    width: 330px;
    padding-bottom: 30px;
    @media(min-width: 43em){
        display: flex;
        flex-direction: column;
        margin-top: 480px;
        align-items: flex-end;
        justify-content: space-between;
        height: 220px;
        width: 250px;
        margin-left: 50px;
        padding-bottom: 20px;
    }
    @media (min-width: 62em){
        display: flex;
        flex-direction: column;
        margin-top: 480px;
        align-items: flex-end;
        justify-content: space-between;
        height: 140px;
        width: 400px;
        /* margin-left: 15px; */
        padding-bottom: 160px;
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
        width: 400px; 
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
        width: 400px;
        margin-top: 5px;
    }
    @media (min-width: 62em){
        font-size: 36px;
        text-align: right;
        width: 400px;
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
        width: 250px;
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
const RightClicktoLearn = styled.div`
    font-size: 14px;
    color: white;
    text-align: left;
    width: 300px;
    @media(min-width: 43em){
        width: 250px;
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
const Spacer = styled.div`
    width: 100px;
`
export default function SpottDiv(){
    const [sHover, setSHover] = useState(false)
    const sHoverState = useSpring({
        boxShadow: sHover ? '0px 4px 4px 7px rgba(28, 77, 67, 0.50)' : '0px 0px 0px 0px rgba(54, 93, 85, 0.2)',
        transform: sHover ? 'translateY(-2%)' : 'translateY(0%)',
        config: {
            mass: 1,
            tension: 170,
            friction: 26,
        }
    })
    const notion = () => {
        window.open('https://varshaiyer.notion.site/varshaiyer/Ithaca-Trails-App-Dev-Hack-Challenge-FA-20-8b4df6cfb2d5428cb900a8af3b4eb565', '_blank')
    }

    return(
        <OuterDiv>
            <InnerDiv onClick={notion}>
                <SMockup
                    onMouseEnter={() => setSHover(true)} 
                    onMouseLeave={() => setSHover(false)} 
                    src='/ithacatrails.png' 
                    style={sHoverState}></SMockup>
                
                <SpottText onMouseEnter={() => setSHover(true)} 
                    onMouseLeave={() => setSHover(false)} >
                    <RightTitle>Ithaca Trails</RightTitle>
                    <RightDetail>AppDev Hack Challenge</RightDetail>
                    <RightDates>{"Dec \'20 - Feb \'21"}</RightDates>
                    <RightDescription>As a part of hack challenge organized by Cornell University's AppDev project team, I designed a new app for finding trails in Ithaca, New York.
                    </RightDescription>
                    <RightClicktoLearn>click to learn more
                    </RightClicktoLearn>
                </SpottText>
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