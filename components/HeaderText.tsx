import * as React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const SelectedTextDiv = styled.div`
  color: white;
  font-size: 36px;
  font-weight: normal;
  text-align: center;
  margin: 0 15px;
`

const UnselectedTextDiv = styled.div`
    color:#666666;
    font-size: 36px;
    font-weight: normal;
    text-align: center;
    cursor: pointer;
    margin: 0 15px;
`

interface Props {
    text: string
    selected: boolean
    link: string
}

const HeaderText = (props: Props): JSX.Element => {
    if (props.selected) {
        return (
            <Link href={props.link}>
                <SelectedTextDiv>{props.text}</SelectedTextDiv>
            </Link>
        )
    } else {
        return (
            <Link href={props.link}>
                <UnselectedTextDiv>{props.text}</UnselectedTextDiv>
            </Link>
        )
    }
}

export default HeaderText