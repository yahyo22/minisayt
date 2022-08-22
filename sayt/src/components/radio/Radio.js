import React, { useState } from 'react'
import styled from 'styled-components'
export default function Radio({label}) {
    const [state, setstate] = useState("male")
  return (
    <Styledradio>
    {label ? <p>Jinsi</p>:null}
    <div>
    
    <section >
    <div className='radio_item' onClick={()=> setstate("male")}>
        <div className='circle'>
        {state === "male" ? <div></div> : null}
        </div>
        <p>Erkak</p>
    </div>
    </section>
    <section>
        
    <div className='radio_item' onClick={()=> setstate("female")}>
        <div className='circle'>
        {state === "female"? <div></div>: null}
        </div>
        <p>Ayol</p>
    </div>
    </section>
    </div>
    </Styledradio>
  )
}
const Styledradio = styled.div`
p{
font-size: 16px;
font-weight: 500;
line-height: 24px;
letter-spacing: 0em;
}
div{
    display: flex;
    gap: 42px;
section{
    display: flex; 
    .radio_item{
        display: flex;
        align-items: center;
        gap: 14px;
        cursor: pointer;
       .circle{
        display: inline-block;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 2px solid black;
        place-items: center;
        display: flex;
        justify-content: center;
        &>div{
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: black;
        }
        }
        p{
font-size: 16px;
font-weight: 500;
line-height: 24px;
letter-spacing: 0em;
        }
    }
}
}
`