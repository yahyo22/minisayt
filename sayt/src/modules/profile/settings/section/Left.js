import React, { useState,useEffect } from "react";
import styled from "styled-components";
import Botton from "../../../../components/bottom/Botton";
import Input from "../../../../components/input/Input";
import Radio from "../../../../components/radio/Radio";
import Select from "../../../../components/select/Select";
import Modal from "../../../../components/modal/Modal";

export const regions =[
  {
    id:1,
    name:"Toshkent",
  },  {
    id:2,
    name:"Navoyi",
  },
  {
    id:3,
    name:"Qoraqalpog’iston",
  },
  {
    id:4,
    name:"Xorazm",
  },
  {
    id:5,
    name:"Farg’ona",
  },
]
export default function Left() {
  const [name ,setName] = useState("");
  const [telefon ,settelefon] = useState("");
  const [user ,setuser] = useState("");
  const [password ,setpassword] = useState("");
  const[isopen,setisopen] =useState(false);
  useEffect(()=>{
      if(isopen){
          document.body.style.overflow ="hidden";
      }else{
        document.body.style.overflow ="auto"; 
      }
  },[isopen]);

  return (
    <StyledLeft>
      <h1>O’quvchi haqida ma’lumot</h1> 
      <form>
        <Input label="To'liq ismi" value={name} onChange = {e=>setName(e.target.value)} type="text"  />
        <Input label="Telefon raqam" value={telefon} onChange = {e=>settelefon(e.target.value)} type="text" />
        <Input label="Username" value={user} onChange = {e=>setuser(e.target.value)} type="text" />
        <Select label="Viloyat" options={regions} />
        <Input label ="Parol" value={password} onChangee={e=>setpassword(e.target.value)} type="password"/>
        <Botton type="button" onclik={()=>setisopen(true)}>
        Parolni yangilash
        </Botton>
        <Radio label="Jinsi"/>
        <div>
        <Botton type="submit" profile={true} >Saqlash</Botton>
        </div>
      </form>
    {isopen ?<Modal onclose={()=>setisopen(false)}/> :null }
      
    </StyledLeft>
  );
}
const StyledLeft = styled.div`
  h1 {
    font-size: 25px;
    font-weight: 500;
    line-height: 38px;
    letter-spacing: 0em;
    margin-bottom: 30px;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
`;
