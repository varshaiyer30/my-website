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
    @media(min-width: 43em){
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        height: 500px;
        width: 580px;
        padding-bottom: 0px;
    }
    @media (min-width: 62em){
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-between;
        width: 777px;
        height: 700px;
        padding-bottom: 0px;
        margin-right: 20px;
    }
`
const SMockup = styled(animated.img)`
    height: 450px;
    border-width: 1px;
    border-color: white;
    border-radius: 32px;
    border-style: solid;
    @media(min-width: 43em){
        height: 600px;
    }
    @media (min-width: 62em){
        height: 500px;
        margin-bottom: 100px;
        margin-right: 20px;
    }
`
const SpottText = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    align-items: center;
    justify-content: space-between;
    height: 200px;
    width: 330px;
    padding-bottom: 30px;
    cursor: default;
    @media(min-width: 43em){
        display: flex;
        flex-direction: column;
        margin-top: 480px;
        align-items: flex-end;
        justify-content: space-between;
        height: 220px;
        width: 280px;
        padding-bottom: 250px;
    }
    @media (min-width: 62em){
        display: flex;
        flex-direction: column;
        margin-top: 480px;
        align-items: center;
        justify-content: center;
        height: 500px;
        width: 400px;
        /* margin-left: 15px; */
        padding-bottom: 95px;
        
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
    }
`
const RedHighlight = styled.a`
    color: #C23333;
    font-size: 36px;
`
const BlueHighlight = styled.a`
    color: #ACDFFB;
    font-size: 36px;
`
export default function SpottDiv(){
    const [sHover, setSHover] = useState(false)
    const sHoverState = useSpring({
        boxShadow: sHover ? '0px 4px 4px 7px #7c7b7b6c' : '0px 0px 0px 0px #7c7b7b6c',
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
                    src='/fam.png' 
                    style={sHoverState}/>
                <SpottText>
                    <RightDetail>I was born and raised in Springfield, IL. I am currently a sophomore in <RedHighlight>{"Cornell University\’s"} </RedHighlight>College of Engineering pursuing a degree in <BlueHighlight>Computer Science</BlueHighlight>.</RightDetail>
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