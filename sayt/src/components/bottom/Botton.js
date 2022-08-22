import React from 'react'
import styled, {css} from 'styled-components'
export default function Botton({children,type,profile,red,r,onclik,auth}) {
  return (
    <Styledbutton type={type} profile={profile} red={red} r={r} onClick={onclik} auth={auth}>{children}</Styledbutton>
  )
}
const Styledbutton = styled.button`
    border: 1px solid #2B2B2B;
border-radius: 20px;
background-color: transparent;
font-size: 16px;
font-weight: 500;
line-height: 24px;
letter-spacing: 0em;
padding: 10px ;
cursor: pointer;
${({profile}) => {
  if(profile) return css `
  background: #18A0FB;
border: 2px solid #FFFFFF;
box-shadow: 0px 0px 10px rgba(24, 160, 251, 0.4);
border-radius: 20px;
padding: 8px 72px;
color: #FFFFFF;
font-size: 16px;
font-weight: 500;
line-height: 24px;
letter-spacing: 0em;`
}
}
${({red})=>{
  if(red) return css `
font-weight: 500;
font-size: 16px;
line-height: 24px;
/* identical to box height */


color: #D14E4E;
background: #FCDFDE;
border: 2px solid #FFFFFF;
box-shadow: 0px 0px 10px #FCDFDE;
border-radius: 20px;
`
}}
${({r})=>{
  if(r){
    return css`padding:8px 40px;`
  }
}}
${({auth})=>{
  if(auth) return css`
  background: #FFFFFF;
border: 1px solid #18A0FB;
width: 100%;
padding: 17px 0 16px;
  `
}}
`;
