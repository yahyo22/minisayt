import React from 'react'
import styled from 'styled-components'
import q  from "../../../../assets/img/q.png"
export default function right() {
  return (
    <StyledRight>
    <div className='imges'>
    <img src={q}alt="q" />
    </div>
    <div className='w'><h1>To’plangan ball: 120.89</h1></div>
    </StyledRight>
  )
}
const StyledRight = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end; 
margin-bottom: 200px;
gap: 30px;
.w{
padding-bottom: 14px;
border-bottom: 1px solid black;
padding-right: 41px;
  h1{
font-size: 16px;
font-weight: 500;
line-height: 24px;
letter-spacing: 0em;
  }
}.imges{
  padding-right: 30px;
}
`
