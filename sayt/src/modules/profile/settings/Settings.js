import React from 'react'
import Profiledcard from '../../../components/profilecard/Profiledcard'
import styled from 'styled-components'
import Left from './section/Left'
import Right from './section/Right'

export default function Settings() {
  return (
    <Profiledcard>
      <StyledSettings>
    <Left/>
    <Right/>
      </StyledSettings>
    </Profiledcard>
  )
}
const StyledSettings = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`