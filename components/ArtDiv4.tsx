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
    justify-content: center;
    width: 300px;
    height: 300px;
    margin-top: 70px;
    padding-bottom: 0px;
    @media(min-width: 43em){
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: space-between;
        height: 640px;
        width: 670px;
        padding-left: 20px;
        padding-bottom: 0px;  
    }
    @media (min-width: 62em){
        flex-direction: row;
        align-items: flex-end;
        width: 1250px;
        height: 700px;
        padding-left: 0px;
        padding-right: 50px;
    }
`
const ArtandLabelDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 300px;
    padding-bottom: 0px;
    @media(min-width: 43em){
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
        height: 500px;
        width: 300px;
        padding-bottom: 0px;
        /* margin-right: 20px; */
        margin-right: 190px;

    }
    @media (min-width: 62em){
        flex-direction: column;
        justify-content: center;
        width: 1400px;
        height: 700px;
        margin-left: 55px;
        margin-right:0px;
    }

`
const Buddha = styled(animated.img)`
    height: 200px;
    aspect-ratio: unset;
    @media(min-width: 43em){
        height: 220px;
        margin-left: 20px;

    }
    @media (min-width: 62em){
        height: 407.6px;
        width: 500px;
        margin-top: 30px;

    }
`
const Turtle = styled(animated.img)`
    height: 200px;
    aspect-ratio: unset;
    @media(min-width: 43em){
        height: 180px;
        margin-left: 60px;

    }
    @media (min-width: 62em){
        margin-top: 90px;
        margin-left: 50px;
        height: 350px;
    }
`
const SpottText = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    align-items: center;
    justify-content: center;
    height: 80px;
    width: 330px;
    padding-bottom: 0px;
    cursor: default;
    @media(min-width: 43em){
        display: flex;
        flex-direction: column;
        margin-top: 20px;
        align-items: flex-end;
        justify-content: center;
        height: 70px;
        width: 280px;
        padding-bottom: 0px;
        margin-bottom: 50px;

    }
    @media (min-width: 62em){
        display: flex;
        flex-direction: column;
        margin-top: 20px;
        align-items: flex-end;
        justify-content: flex-end;
        height: 100px;
        width: 500px;
        margin-left: 0px;
        padding-bottom: 0px;
        margin-bottom: 30px;

        
    }
`
const GardenText = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    align-items: center;
    justify-content: center;
    height: 80px;
    width: 330px;
    padding-bottom: 0px;
    cursor: default;
    @media(min-width: 43em){
        display: flex;
        flex-direction: column;
        margin-top: 20px;
        align-items: flex-end;
        justify-content: space-between;
        height: 70px;
        width: 280px;
        padding-bottom: 0px;
        margin-left: 50px;

    }
    @media (min-width: 62em){
        display: flex;
        flex-direction: column;
        margin-top: 20px;
        align-items: flex-end;
        justify-content: flex-end;
        height: 100px;
        width: 590px;
        margin-left: 0px;
        padding-bottom: 0px;
        margin-bottom: 30px;

        
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
        width: 600px; 
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
        width: 600px;
        margin-top: 5px;
    }
`
const RightDates = styled.div`
    font-size: 16px;
    color: white;
    text-align: left;
    width: 300px;
    font-weight: 300;
    @media(min-width: 43em){
        font-size: 20px;
        text-align: right;
        width: 400px;
        margin-top: 5px;
        
    }
    @media (min-width: 62em){
        font-size: 24px;
        text-align: right;
        width: 600px;
        margin-top: 5px;
    }
`
const RightDescription = styled.div`
    font-size: 14px;
    color: #8b8a8a;
    text-align: left;
    font-weight: 250;
    width: 300px;
    @media(min-width: 43em){
        width: 280px;
        text-align: right;
        margin-top: 5px;
        
    }
    @media (min-width: 62em){
        font-size: 18px;
        text-align: right;
        width: 600px;
        margin-top: 5px;
    }
`
export default function SpottDiv(){
    const [sHover1, setSHover1] = useState(false)
    const [sHover2, setSHover2] = useState(false)
    const sHoverState1 = useSpring({
        boxShadow: sHover1 ? '0px 4px 4px 7px #9694943b' : '0px 0px 0px 0px #7c7b7b6c',
        transform: sHover1 ? 'translateY(-2%)' : 'translateY(0%)',
        config: {
            mass: 1,
            tension: 170,
            friction: 26,
        }
    })
    const sHoverState2 = useSpring({
        boxShadow: sHover2 ? '0px 4px 4px 7px #9694943b' : '0px 0px 0px 0px #7c7b7b6c',
        transform: sHover2 ? 'translateY(-2%)' : 'translateY(0%)',
        config: {
            mass: 1,
            tension: 170,
            friction: 26,
        }
    })

    return(
        <OuterDiv>
            <InnerDiv>
                <ArtandLabelDiv>
                <Buddha
                    onMouseEnter={() => setSHover1(true)} 
                    onMouseLeave={() => setSHover1(false)} 
                    src='/reflection.jpg' 
                    style={sHoverState1}/>
                <SpottText>
                <RightTitle>Reflection, 2020</RightTitle>
                    <RightDates>Photography</RightDates>
                </SpottText>

                </ArtandLabelDiv>
                <ArtandLabelDiv>
                <Turtle
                    onMouseEnter={() => setSHover2(true)} 
                    onMouseLeave={() => setSHover2(false)} 
                    src='/garden.jpg' 
                    style={sHoverState2}/>
                <GardenText>
                <RightTitle>Garden, 2020</RightTitle>
                    <RightDates>Photography</RightDates>
                </GardenText>

                </ArtandLabelDiv>
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