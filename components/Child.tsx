import * as React from 'react'
import styled from 'styled-components'

interface Props {
    text: string
    num: number
}

const Child = (props: Props): JSX.Element => {
    return (
        <div>{props.text}</div>
    )
}

export default Child