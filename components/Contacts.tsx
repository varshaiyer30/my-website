import * as React from 'react'
import { useState } from 'react'
import styled from 'styled-components'

const ExternalLink = styled.a`
    text-decoration: none;
`
const ContactDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    scroll-snap-align: center;
    width: 438px;
    height: 120px;
    margin-left: 50px;
    margin-right: 50px;
    margin-bottom: 50px;
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