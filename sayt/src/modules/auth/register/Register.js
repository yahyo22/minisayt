import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//
import Authback from "../../../components/authback/Authback";
import Authcard from "../../../components/authcard/Authcard";
import Botton from "../../../components/bottom/Botton";
import Input from "../../../components/input/Input";
import Radio from "../../../components/radio/Radio";
import Select from "../../../components/select/Select";
import { regions } from "../../profile/settings/section/Left";
import Autfoooter from "../../../components/authfooter/Autfoooter";
export default function Register() {
  return (
    <StyledRegister>
      <div className="container">
        <main>
          <navbar>
            <Authback />
          </navbar>
          <section>
            <form action="">
              <Authcard>
                <h1>Royhatdan otish</h1>
                <div className="input">
                  <Input pla="Full name" auth={true} type="text" />
                  <Input pla="Email or phone" auth={true} type="email" />
                  <Input pla="Username" auth={true} type="text" />
                  <Select options={regions} auth={true} />
                  <Input pla="Password" auth={true} type="password" />
                  <Radio />
                  <Botton type="submit" auth={1}>
                    Royhatdan otish
                  </Botton>
                </div>
                <div className="Loginlink">
                  <Link to="">Hisobingiz bormi? Kirish</Link>
                </div>
                <Autfoooter />
              </Authcard>
            </form>
          </section>
        </main>
      </div>
    </StyledRegister>
  );
}
const StyledRegister = styled.div`
  main {
    padding: 70px 0;
    display: flex;
    flex-direction: column;
    gap: 80px;
    section {
      form {
        max-width: 450px;
        margin: 0 auto;
        h1 {
          font-size: 35px;
          font-weight: 500;
          line-height: 53px;
          letter-spacing: 0em;
          margin-bottom: 50px;
        }
        .input {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }
        .Loginlink {
          margin: 14px 0 18px 0;
          a {
            text-decoration: none;
            color: #000000;
            font-size: 16px;
            font-weight: 500;
            line-height: 24px;
            letter-spacing: 0em;
          }
        }
      }
    }
  }
`;
