import * as React from 'react'
import { useState } from 'react'
import styled from 'styled-components'

const ExternalLink = styled.a`
    text-decoration: none;
`
const ContactDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    scroll-snap-align: center;
    width: 340px;
    height: 10px;
    margin-left: 35px;
    margin-bottom: 50px;
    @media(min-width: 43em){
        margin-left: 170px;
        width: 450px;
        height: 50px;
        margin-bottom: 50px;
    }
    @media (min-width: 62em){
        width: 450px;
        margin-left: 500px;
        margin-top: 50px;
        margin-bottom: 40px;
    }
`
const GitDiv = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
    justify-content: center;

`
const GitText = styled.a`
    color: white;
    font-size: 18px;
    text-align: center;
    text-decoration-line: none;
    @media(min-width: 43em){
        font-size: 24px;
    }
    @media (min-width: 62em){
        font-size: 24px;
    }
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

export default function Contacts() {
    const [gitHover, setGitHover] = useState(false)
    const hoverState = {
        color: gitHover ? 'white' : '#666666',
        textDecoration: gitHover ? 'underline' : 'none'
    }
    return(
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

    </ContactDiv>)
}