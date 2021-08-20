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
        margin-right: 30px;
    }
`
const OuterImageDiv = styled.div`
    height: 600px;
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
    margin-right: 50px;
`
const InnerImageDiv = styled.div`
    height: 350px;
    width: 415px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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
        height: 260px;
        /* margin-bottom: 100px; */
        /* margin-right: 20px; */
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
        padding-bottom: 100px;
        
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
        width: 380px;
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
    const [sHover1, setSHover1] = useState(false)
    const [sHover2, setSHover2] = useState(false)
    const [sHover3, setSHover3] = useState(false)
    const [sHover4, setSHover4] = useState(false)
    const sHoverState1 = useSpring({
        boxShadow: sHover1 ? '0px 4px 4px 7px #7c7b7b6c' : '0px 0px 0px 0px #7c7b7b6c',
        transform: sHover1 ? 'translateY(-2%)' : 'translateY(0%)',
        config: {
            mass: 1,
            tension: 170,
            friction: 26,
        }
    })
    const sHoverState2 = useSpring({
        boxShadow: sHover2 ? '0px 4px 4px 7px #7c7b7b6c' : '0px 0px 0px 0px #7c7b7b6c',
        transform: sHover2 ? 'translateY(-2%)' : 'translateY(0%)',
        config: {
            mass: 1,
            tension: 170,
            friction: 26,
        }
    })
    const sHoverState3 = useSpring({
        boxShadow: sHover3 ? '0px 4px 4px 7px #7c7b7b6c' : '0px 0px 0px 0px #7c7b7b6c',
        transform: sHover3 ? 'translateY(-2%)' : 'translateY(0%)',
        config: {
            mass: 1,
            tension: 170,
            friction: 26,
        }
    })
    const sHoverState4 = useSpring({
        boxShadow: sHover4 ? '0px 4px 4px 7px #7c7b7b6c' : '0px 0px 0px 0px #7c7b7b6c',
        transform: sHover4 ? 'translateY(-2%)' : 'translateY(0%)',
        config: {
            mass: 1,
            tension: 170,
            friction: 26,
        }
    })

    return(
        <OuterDiv>
            <InnerDiv>
                <OuterImageDiv>
                    <InnerImageDiv>
                    <SMockup
                    onMouseEnter={() => setSHover1(true)} 
                    onMouseLeave={() => setSHover1(false)} 
                    src='/beach.jpg' 
                    style={sHoverState1}/>
                    <SMockup
                    onMouseEnter={() => setSHover2(true)} 
                    onMouseLeave={() => setSHover2(false)} 
                    src='/me.jpg' 
                    style={sHoverState2}/>
                    </InnerImageDiv>
                    <InnerImageDiv>
                    <SMockup
                    onMouseEnter={() => setSHover3(true)} 
                    onMouseLeave={() => setSHover3(false)} 
                    src='/chicago.jpg' 
                    style={sHoverState3}/>
                    <SMockup
                    onMouseEnter={() => setSHover4(true)} 
                    onMouseLeave={() => setSHover4(false)} 
                    src='/water.jpg' 
                    style={sHoverState4}/>

                    </InnerImageDiv>
                </OuterImageDiv>
                <SpottText>
                    <RightDetail>In addition to design, some things that bring me joy are <BlueHighlight>running</BlueHighlight>, Mother Nature, taking photos, cities, crazy architecture, the sky, and <BlueHighlight>a good cup of coffee</BlueHighlight>.</RightDetail>
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