import React from "react";
import styled from "styled-components";
import Profiledcard from "../../../components/profilecard/Profiledcard";
export default function Payment() {
  return (
    <Profiledcard>
      <StylePaymet>
        <h1>Tolov tarixi</h1>
        <footer>
          <section>
            <div>
              <h3>Asosiy balans</h3> <p>150 000 so’m</p>
            </div>
            <div>
              <h3>Bonuslarim</h3>
              <p>100 000 so’m</p>
            </div>
            <div>
              <h3>Pul yutuqlarim</h3>
              <p>1000 000 so’m</p>
            </div>
          </section>
        </footer>
      </StylePaymet>
    </Profiledcard>
  );
}
const StylePaymet = styled.div`
  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 38px;
    color: #000000;
  }
  footer {
    margin-top: 39px;
    section {
      display: flex;
      gap: 80px;
      div {
         h3,p  {
          font-size: 18px;
          font-weight: 500;
          line-height: 27px;
          letter-spacing: 0em;
          border-left: 1px solid #AAAAAA;
          padding: 9px 0 0 20px;
        }
        h3{
          margin-bottom:23px ;
        }
        &:nth-child(1){
          h3,p{
            border: none;
            padding-left: 0; 
          }
        }
      }
    }
  }
`;
