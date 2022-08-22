import React from 'react'
import styled from 'styled-components'
export default function Autfoooter() {
  return (
    <Styledfoooter>
      <section className='carrd'>
        <div></div>
        <p>or</p>
        <div></div>
      </section>
      <section className='iconka'>
        <i className='icon icon-google'></i>
        <i  className='icon icon-facebook'></i>
        <i  className='icon icon-apple'></i>
      </section>
    </Styledfoooter>
  )
}
const Styledfoooter =styled.div`
display: flex;
flex-direction: column;
gap: 16px;
  .iconka{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 34px;
    padding: 0; 
  }
  .carrd{
    p{
font-size: 18px;
font-weight: 500;
line-height: 27px;
letter-spacing: 0em;
    }
    display: grid;
    grid-template-columns: auto 20px auto;
    gap: 6px;
    padding: 0;
    align-items: center;
    div{
      height: 1px;
      background-color:  #BBBBBB;
    }
  }
`