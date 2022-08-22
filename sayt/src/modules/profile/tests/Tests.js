import React from "react";
import styled from "styled-components";
export default function Tests() {
  return (
    <StyledTests>
      <h1>Virtual imtihon natijalari</h1>
      <h3>Assosiy fanlar</h3>
      <section className="first">
        <div>
          <h4>Birinchi fan</h4>
          <p>
            21.7 <br /> 7 / 23%
          </p>
        </div>
        <div>
          <h4>Ikkinchi fan</h4>
          <p>
            18.9 <br />9 / 30%
          </p>
        </div>
        <div>
          <h4>Ball</h4>
          <p>
            50.5 <br />
            25/ 28%
          </p>
        </div>
        <div>
          <h4>Vaqt</h4>
          <p>
            149 <br />
            Minut
          </p>
        </div>
      </section>
      <section className="Last">
        <h3>Majburiy fanlar</h3>
        <main className="weser">
          <div>
            <h4>Birinchi fan</h4>
            <p>
              21.77 <br /> / 23%
            </p>
          </div>
          <div>
            <h4>Ikkinchi fan</h4>
            <p>
              18.9 <br />9 / 30%
            </p>
          </div>
          <div>
            <h4>Uchinchi fan</h4>
            <p>
              9.9 <br />9 / 30%
            </p>
          </div>
          <div>
            <h4>Ball</h4>
            <p>
              50.5 <br />
              25/ 28%
            </p>
          </div>
          <div>
            <h4>Vaqt</h4>
            <p>
              149 <br />
              Minut
            </p>
          </div>
        </main>
      </section>
    </StyledTests>
  );
}
const StyledTests = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 25px;
    font-weight: 500;
    line-height: 38px;
    letter-spacing: 0em;
    margin-bottom: 26px;
  }
  h3 {
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: 0em;
    margin-bottom: 17px;
    color: #18a0fb;
  }
  .first {
    display: flex;
    gap: 55px;
    margin-bottom: 30px;
    div {
      &:nth-child(1) {
        p,
        h4 {
          border: none;
          padding: 9px 0px 0 0;
        }
      }
      display: flex;
      flex-direction: column;
      gap: 27px;
      h4 {
        font-size: 18px;
        font-weight: 500;
        line-height: 27px;
        letter-spacing: 0em;
        padding: 9px 0px 0px 20px;
        border-left: 1px solid #aaaaaa;
      }
      p {
        margin: 0;
        padding: 9px 0 0 20px;
        border-left: 1px solid #aaaaaa;
        font-size: 18px;
        font-weight: 500;
        line-height: 27px;
        letter-spacing: 0em;
      }
    }
  }
  .Last {
    display: flex;
    flex-direction: column;
    .weser {
      display: flex;
      gap: 55px;
      div {
        display: flex;
        flex-direction: column;
        gap: 27px;
        &:nth-child(1) {
          p,
          h4 {
            border: none;
            padding: 9px 0px 0px 0px;
          }
        }
        h4 {
          border-left: 1px solid #aaaaaa;
          font-size: 18px;
          font-weight: 500;
          line-height: 27px;
          letter-spacing: 0em;
          text-align: left;
          padding: 9px 0 0 20px;
        }
        p {
          border-left: 1px solid #aaaaaa;
          margin: 0;
          padding: 9px 0 0 20px;
          font-size: 18px;
          font-weight: 500;
          line-height: 27px;
          letter-spacing: 0em;
          text-align: left;
        }
      }
    }
  }
`;
