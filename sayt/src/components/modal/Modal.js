import React from "react";
import styled from "styled-components";
import Input from "../input/Input";
import Botton from "../bottom/Botton";
export default function modal({onclose}) {
  return (
    <Styledmodal>
    <form action="">
    <h1>Parolni yangilash</h1>
    <Input label="Parol" type="password" w100={true}/>
    <Input label="Parolni yangilash" type="password"  w100={true}/>
    <div className="btn-group">
    <Botton profile={true}  type="submit" r={true}>Saqlash</Botton> 
    <Botton type="button" profile={true} red={true} r={true} onclik={onclose}>Bekor qilish</Botton>  
    </div>
    </form>
    </Styledmodal>
  );
}
const Styledmodal = styled.div`
background-color: white;
position: fixed;
width: 100%;
height: 100vh;
left: 0;
top: 0;
display: flex;
align-items: center;
justify-content: center;
form{
  display: flex;
  flex-direction: column;
  gap: 22px;
  max-width: 460px;
  background: #FFFFFF;
box-shadow: 0px 2px 25px rgba(187, 187, 187, 0.35);
border-radius: 20px;
padding: 30px;
  h1{
font-size: 20px;
font-weight: 500;
line-height: 30px;
letter-spacing: 0em;
margin-bottom:0px;
  }
  .btn-group{
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }
}
`;
