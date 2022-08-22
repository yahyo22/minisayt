import React from 'react'
import styled  from 'styled-components'
import { useNavigate } from "react-router-dom";
export default function Authback() {
  const use = useNavigate()
  function f(){
    use(-1);
  }
  return (
    <Styledback onClick={f}>
        <i className='icon icon-iii'></i>   
        <p>Orqaga</p>
    </Styledback>   
  )
}
const Styledback =styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
cursor: pointer;
width: max-content;
i{
    width: 35px;
    height: 35px;
}
p{
font-size: 25px;
font-weight: 500;
line-height: 38px;
letter-spacing: 0em;
}
`