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
    cursor: default;
    padding-bottom: 70px;
    @media(min-width: 43em){
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 500px;
        width: 580px;
        padding-bottom: 0px;
    }
    @media (min-width: 62em){
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-between;
        width: 950px;
        height: 700px;
        padding-bottom: 0px;
        margin-right: 40px;
    }
`
const ITMockup = styled(animated.img)`
    height: 470px;
    border-width: 1px;
    border-color: white;
    border-radius: 32px;
    border-style: solid;
    box-shadow: 0px 1px 4px 5px rgba(54, 93, 85, 0.6);
    filter: drop-shadow(0px 20px 40px rgba(0, 0, 0, 0.9)); 
    @media(min-width: 43em){
        height: 600px;
    }
    @media (min-width: 62em){
        height: 320px;
        margin-bottom: 190px;
        margin-left: 60px;
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
        width: 440px;
        /* font-weight: lighter; */
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
        align-items: flex-start;
        justify-content: space-between;
        height: 220px;
        width: 280px;
        padding-bottom: 220px;
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
        padding-bottom: 295px;
    }   
`
const BlueHighlight = styled.a`
    color: #ACDFFB;
    font-size: 36px;
`

export default function IthTrailsDiv(){
    const [iHover1, setIHover1] = useState(false)
    const [iHover2, setIHover2] = useState(false)
    const iHoverState1 = useSpring({
        boxShadow: iHover1 ? '0px 4px 4px 7px #7c7b7b6c' : '0px 0px 0px 0px #7c7b7b6c',
        transform: iHover1 ? 'translateY(-2%)' : 'translateY(0%)',
        config: {
            mass: 1,
            tension: 170,
            friction: 26,
        }

    })
    const iHoverState2 = useSpring({
        boxShadow: iHover2 ? '0px 4px 4px 7px #7c7b7b6c' : '0px 0px 0px 0px #7c7b7b6c',
        transform: iHover2 ? 'translateY(-2%)' : 'translateY(0%)',
        config: {
            mass: 1,
            tension: 170,
            friction: 26,
        }

    })


    return(
        <OuterDiv>
            <InnerDiv>
                <IthacaTrailsText>
                    <LeftDetail>I am an aspiring <BlueHighlight>UI/UX designer</BlueHighlight> and software engineer, and I seize any opportunity to become a better one. My <BlueHighlight>love and passion</BlueHighlight> for design continues to grow everyday.</LeftDetail>
                </IthacaTrailsText>
                <ITMockup 
                    onMouseEnter={() => setIHover1(true)}
                    onMouseLeave={() => setIHover1(false)}
                    src='/sarah.jpeg'
                    style={iHoverState1}>
                </ITMockup>
                <ITMockup 
                    onMouseEnter={() => setIHover2(true)}
                    onMouseLeave={() => setIHover2(false)}
                    src='/gates.jpeg'
                    style={iHoverState2}>
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