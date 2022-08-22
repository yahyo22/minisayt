import React, { useState } from "react";
import styled ,{css} from "styled-components";
import {v4} from "uuid"
export default function Input({label,value ,onChange,type,w100,auth,pla}) {   
    let uuid = v4();
    const [isHide,sethide] =useState(true);
    function f(){
        sethide((p)=>!p);
    }
  return (
    <Styledinput w100={w100} auth={auth}>
    {label ? <label htmlFor={uuid}>{label}</label> : null}
    <div className="input_wraper">
      <input type={isHide ?type:"text"} id={uuid} value={value} onChange = {onChange} placeholder={pla}/>
      {type === "password" ? 
      <i className={ isHide === true?"icon-eyesclose":"icon icon-eyes" } onClick={f}></i>:null}
    </div>
    </Styledinput>
  );
}
const Styledinput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  label {
    font-size: 18px;
    font-weight: 500;
    line-height: 27px;
    letter-spacing: 0em;
  }
  .input_wraper{
    position: relative;
    ${({w100})=>{
  if(w100) {
    return css`
    width: 100%; 
  `}
}}
  input {
    border: 1px solid #aaaaaa;
    border-radius: 20px;
    padding: 10px 20px;
    width: 100%;
    &:focus {
      outline: none;
    }

  }

  ${({auth})=>{
      if(auth) return css`
      
      i{
        right: 12px; ///////////////////////////////////////////////
      }
      input{
        border-radius:0 ;
        padding-bottom: 14px;
        border-left: none;
        border-top: none;
        border-right: none;
      }
      `
    }}
  i{
    position: absolute;
    top: 50%;
    right: 17px;
    transform:translateY(-50%);
  }
  } 
`;
