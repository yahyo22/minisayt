import React, { useState } from 'react'
import styled,{css} from 'styled-components'
export default function Select({label , options=[],auth}) {
  const [assa,setassa] =useState(false);
  const [value,setvalue] =useState("");
  function d(r){
    setvalue(r);
    setassa()
  }
  return (
    <SelectStyled auth={auth}>
    <section className='select_heder' onClick={()=>{setassa((p)=>!p)}}>
    {label ? <p>Viloyat</p> : null}
      <div className='ch_heder'> 
        <p>{value ||"tanlang"}</p>
        <i className='q'></i>
      </div> 
    </section>
    {assa ? 
    <section className='select_list' >
    
      <ul>
      {options.map((i)=>(
        <li key={i.id} onClick={()=>d(i.name)}>{i.name}</li>
      ))}
      </ul>
    </section> :null}
    </SelectStyled>
  )
}
const SelectStyled = styled.div`
position: relative;
.select_heder{
  p{
font-size: 16px;
font-weight: 500;
line-height: 24px;
letter-spacing: 0em;
margin-bottom: 12px;
  }
  .ch_heder{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #FFFFFF;
border: 1px solid #AAAAAA;
border-radius: 20px;
padding: 10px 20px;
cursor: pointer;
    p{
      margin: 0;
font-size: 16px;
font-weight: 500;
line-height: 24px;
letter-spacing: 0em;
    }
  }
}
.select_list{
  position: absolute;
  background: #FFFFFF;
box-shadow: 0px 2px 25px rgba(187, 187, 187, 0.35);
border-radius: 20px;
width: 100%;
  z-index: 2;
  left: 0;
bottom: 0;
transform: translateY(calc(100% + 12px ));
max-height:300px;
overflow-y: auto; 
  ul{
    padding: 20px;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 14px;
    li{
font-size: 14px;
font-weight: 500;
line-height: 21px;
letter-spacing: 0em;
      cursor: pointer;
      &:hover{
        color: royalblue;

      }
    }
  }
}
${({auth})=>{
  if(auth) return css`
    .select_heder{
      p{
        
font-size: 16px;
font-weight: 500;
line-height: 24px;
letter-spacing: 0em;
      }

      .ch_heder{
        p{
          
font-size: 16px;
font-weight: 500;
line-height: 24px;
letter-spacing: 0em;
        }
        border-radius: 0;
        border-left: none;
        border-right: none;
        border-top: none;
        padding: 0 20px 12px;
        color: #BBBBBB
      }
    }
  `
}}
`