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
    height: 500px;
    padding-bottom: 0px;
    margin-top: 20px;
    @media(min-width: 43em){
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-between;
        height: 500px;
        width: 580px;
        padding-bottom: 0px;
        padding-left: 80px;
        margin-top: 0px;
    }
    @media (min-width: 62em){
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-between;
        width: 777px;
        height: 700px;
        padding-bottom: 0px;
        padding-left: 0px;
        margin-top: 0px;
    }
`
const ArtandLabelDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 300px;
    height: 350px;
    padding-bottom: 0px;
    @media(min-width: 43em){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 500px;
        width: 580px;
        padding-bottom: 0px;
    }
    @media (min-width: 62em){
        flex-direction: column;
        justify-content: center;
        width: 777px;
        height: 700px;
        margin-left: 74px;
    }

`
const SMockup = styled(animated.img)`
    width: 300px;
    @media(min-width: 43em){
        height: 376px;
        width: 500px;
    }
    @media (min-width: 62em){
        margin-top: 40px;
        width: 620px;
        height:500px;
    }
`
const SpottText = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    align-items: center;
    justify-content: space-between;
    height: 100px;
    width: 300px;
    padding-bottom: 0px;
    cursor: default;
    @media(min-width: 43em){
        display: flex;
        flex-direction: column;
        margin-top: 20px;
        align-items: flex-end;
        justify-content: space-between;
        height: 120px;
        width: 500px;
        padding-bottom: 0px;
    }
    @media (min-width: 62em){
        display: flex;
        flex-direction: column;
        margin-top: 0px;
        align-items: center;
        justify-content: flex-end;
        height: 200px;
        width: 600px;
        margin-left: 0px;
        padding-bottom: 0px;
        margin-bottom: 40px;

        
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
        width: 250px;
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
    const [sHover, setSHover] = useState(false)
    const sHoverState = useSpring({
        boxShadow: sHover ? '0px 4px 4px 7px #9694943b' : '0px 0px 0px 0px #7c7b7b6c',
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
                <ArtandLabelDiv>
                <SMockup
                    onMouseEnter={() => setSHover(true)} 
                    onMouseLeave={() => setSHover(false)} 
                    src='/mock.png' 
                    style={sHoverState}/>
                <SpottText>
                <RightTitle>In Motion, 2020</RightTitle>
                    <RightDates>Water based ink and white gel pen</RightDates>
                    <RightDescription>Received honorable mention at Scholastic Art and Writing Awards
                    </RightDescription>
                </SpottText>

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