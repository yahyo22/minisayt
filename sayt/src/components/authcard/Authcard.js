import React from 'react'
import styled from 'styled-components'
export default function Authcard({children}) {
  return (
    <Styledauth>
        {children}
    </Styledauth>
  )
}
const Styledauth = styled.div`
    background: #FFFFFF;
box-shadow: 0px 2px 25px rgba(187, 187, 187, 0.35);
border-radius: 20px;
padding: 30px;
`