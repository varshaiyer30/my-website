import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Header from '../components/Header'
import styled, { createGlobalStyle } from 'styled-components'
import Link from 'next/link'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 50px;
    background: black;
    font-family: SF Pro Display;
  }
`

export default function Home() {
    return (
        <div>
            <Head>
                <title>resume</title>
            </Head>
            <GlobalStyle />
            <Header page={'resume'} />
        </div>
    )
}
