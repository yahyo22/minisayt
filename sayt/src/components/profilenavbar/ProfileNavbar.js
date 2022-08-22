import React from "react";
import styled from "styled-components";

// img
import logo from "../../assets/img/logo.png";
import avatar from "../../assets/img/avatar.png";

export default function ProfileNavbar() {
  return (
    <StyledprofileNavbar>
      <section>
        <img src={logo} alt="logo" />
      </section>
      <section>
        <h1>Navruz Nabiyev</h1>
        <img src={avatar} alt="avatar" />
      </section>
    </StyledprofileNavbar>
  );
}
const StyledprofileNavbar = styled.div`
padding: 30px 0px;
display: flex;
align-items: center;
justify-content: space-between;
section{

 &:last-of-type {
  display: flex;
  align-items: center;
  gap: 1rem;
  img{
    width:50px;
    height :50px;
  }
}
}
`;
