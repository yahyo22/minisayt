import React from 'react'
import styled from 'styled-components'

export default function Profiledcard({children}) {
  return (
    <Card>
        {children}  
    </Card>
  )
}
const Card = styled.div`
    background: #FCFCFC;
    border-radius: 20px;
    padding: 25px;
    width: 100%;
    height: max-content;

`