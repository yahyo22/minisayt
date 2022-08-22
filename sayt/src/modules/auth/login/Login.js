import React from 'react'
import styled from 'styled-components'
import Authback from '../../../components/authback/Authback'
import Authcard from '../../../components/authcard/Authcard'
import Input from '../../../components/input/Input'
import Bottom  from  "../../../components/bottom/Botton"
import {Link} from "react-router-dom"
import Autfoooter from '../../../components/authfooter/Autfoooter'
export default function Login() {
  return (
    <StyledLogin>
    <div className="container">
    <main>
        <section>
        <Authback/>
        </section>
        <section>
        <form action="">
        <Authcard>
            <h1>Kirish</h1>
          <div className='input_group'>
          <Input type="text" auth={true} pla="Email or phone"/>
          <Input  type="password" auth={true} pla="Password"/>
          </div>
          <Bottom type="submit" auth={true}>Kirish</Bottom>
          <div className='a'>
          <Link to="/">Ro'yxatdan o'tish</Link>
          </div>
          <Autfoooter/>
        </Authcard>
        </form>
        </section>
    </main>
    </div>
    </StyledLogin>
  )
}
const StyledLogin = styled.div`

padding:70px 0 ;
  main{
    display: flex;
    flex-direction: column;
    gap: 100px;
    section{
      padding: 30px;
      form{
        max-width: 450px;
        margin: 0 auto;
        h1{
font-size: 35px;
font-weight: 500;
line-height: 53px;
letter-spacing: 0em;
margin-bottom: 50px;
        }
        .input_group{
          display: flex;
          flex-direction: column;
          gap: 40px;
          margin-bottom: 40px;
font-size: 18px;
font-weight: 500;
line-height: 27px;
letter-spacing: 0em;

        }
        .a{
          margin:14px 0 18px 0;
          a{
            text-decoration: none;
            color: black;
font-size: 16px;
font-weight: 500;
line-height: 24px;
letter-spacing: 0em;
          }
        }
      }
    }
  }
`