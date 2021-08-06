import Link from 'next/link'
import * as React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { GrMailOption } from 'react-icons/gr'
import { IconContext } from 'react-icons/lib/cjs/iconContext'
import { useState } from 'react'


const OuterDiv = styled.div`
    margin-left: 337px;
    margin-right: 337px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
`
const CardDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    /* margin-bottom: 120px; */
    width: 777px;
    height: 700px;
    html {scroll-snap-type: y mandatory;
    }

`
const Spacer = styled.div`
    height: 120px;
`
const SMockup = styled.img`
    height: 700px;
    width: 322px;
    border-width: 1px;
    border-color: #666666;
    border-radius: 32px;
    border-style: solid;
    box-shadow: 0px 1px 4px 5px rgba(230, 210, 161, 0.25);
filter: drop-shadow(0px 20px 40px rgba(102, 102, 102, 0.25));
`
const ITMockup = styled.img`
    height: 700px;
    width: 322px;
    border-width: 1px;
    border-color: #666666;
    border-radius: 32px;
    border-style: solid;
    box-shadow: 0px 1px 4px 5px rgba(54, 93, 85, 0.6);
filter: drop-shadow(0px 20px 40px rgba(0, 0, 0, 0.9)); 
`
const VMockup = styled.img`
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
    margin-bottom: 50px;
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
    color: #666666;
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
    margin-bottom: 200px;
    
`
const VSCOText = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 480px;
    align-items: flex-end;
    justify-content: space-between;
    height: 200px;
    width: 400px;
    margin-bottom: 100px;
    
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
    color: #666666;
    text-align: right;
    width: 330px;
    /* font-weight: lighter; */
    margin-top: 5px;
`
const ExternalLink = styled.a`
    text-decoration: none;
`
const ContactDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 120px;
    width: 438px;
    height: 120px;
    margin-left: 50px;
    margin-right: 50px;
`
const GitDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
const GitText = styled.a`
    color: white;
    font-size: 24px;
    text-align: center;
    text-decoration-line: none;
`
const IconDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
const MailIcon = styled.img`
    height: 25px;
`
const InstaInIcon = styled.img`
    width: 40px;
`
const TwitterIcon = styled.img`
    width: 30px;
`

export default function Card() {
    const style = { color: "white", fontSize: "1.5em" }
    const [gitHover, setGitHover] = useState(false)

    const hoverState = {
        color: gitHover ? 'white' : '#666666',
        textDecoration: gitHover ? 'underline' : 'none'
    }

    return (
        <OuterDiv>
            <CardDiv id='card'>
                <SMockup src='/spott.png'></SMockup>
                <SpottText>
                    <RightTitle>spott</RightTitle>
                    <RightDetail>UI/UX design intern</RightDetail>
                    <RightDescription>spott is an up and coming social map app that crowdsources content for finding friends, food, and fun around you.</RightDescription>
                    <RightDates>{"May \'21 - Aug \'21"}</RightDates>
                </SpottText>
            </CardDiv>
            <Spacer></Spacer>
            <ExternalLink href="https://varshaiyer.notion.site/varshaiyer/Ithaca-Trails-App-Dev-Hack-Challenge-FA-20-8b4df6cfb2d5428cb900a8af3b4eb565" target="_blank">
                <CardDiv>
                    <IthacaTrailsText>
                        <LeftTitle>AppDev Hack Challenge</LeftTitle>
                        <LeftDetail>Ithaca Trails</LeftDetail>
                        <LeftDescription>{"As a part of hack challenge organized by Cornell University\'s AppDev project team, I designed a new app called Ithaca Trails."}</LeftDescription>
                        <LeftDates>{"Dec \'20 - Feb \'21"}</LeftDates>
                    </IthacaTrailsText>
                    <ITMockup src='/ithacatrails.png'></ITMockup>
                </CardDiv>
            </ExternalLink>
            <Spacer></Spacer>
            <ExternalLink href="https://bootcamp.uxdesign.cc/vsco-filtering-main-feed-content-ef23a7c2c449" target="_blank">
                <CardDiv>
                    <VMockup src='/vsco.png'></VMockup>
                    <VSCOText>
                        <RightTitle>VSCO Case Study</RightTitle>
                        <RightDetail>Medium Bootcamp</RightDetail>
                        <RightDescription>This is my first case study I completed as a part of a digital product design class I took during my first semester as a student at Cornell University.</RightDescription>
                        <RightDates>{"Sept \'20 - Feb \'21"}</RightDates>
                    </VSCOText>
                </CardDiv>
            </ExternalLink>
            <ContactDiv>
                <GitDiv onMouseEnter={() => setGitHover(true)} onMouseLeave={() => setGitHover(false)}>
                    <GitText style={hoverState} href="https://github.com/varshaiyer30/my-website.git" target="_blank">see the code for this website on my github</GitText>
                </GitDiv>
                <IconDiv>
                    <ExternalLink href="mailto:vvi2@cornell.edu">
                        <MailIcon src="mail.png"></MailIcon>
                    </ExternalLink>
                    <ExternalLink href="https://www.instagram.com/varshaiyerr/" target="_blank">
                        <InstaInIcon src="instagram.png"></InstaInIcon>
                    </ExternalLink>
                    <ExternalLink href="https://www.linkedin.com/in/varsha-iyer-05a736215/" target="_blank">
                        <InstaInIcon src="linkedin.png"></InstaInIcon>
                    </ExternalLink>
                    <ExternalLink href="https://twitter.com/varshaiyerr" target="_blank">
                        <TwitterIcon src="twitterlogo.png"></TwitterIcon>
                    </ExternalLink>
                </IconDiv>

            </ContactDiv>
        </OuterDiv>

    )
}
