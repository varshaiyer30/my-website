import * as React from 'react'
import styled from 'styled-components'
import Child from './Child'

const Parent = (): JSX.Element => {
    return (
        <div>
            <Child text={'im a varsha'} num={1} />
        </div>
    )
}

export default Parent