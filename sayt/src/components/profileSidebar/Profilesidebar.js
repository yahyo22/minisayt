import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

export default function Profilesidebar() {
  const location = useLocation();
  return (
    <StyledProfileSidebar>
      <ul>
        <li>
          <Link
            to="/profile/tests"
            className={location.pathname === "/profile/tests" ? "active" : ""}
          >
            <i className="icon icon-test"></i>
            <p>Testlar</p>
          </Link>
        </li>

        <li>
          <Link
            to="/profile/achievments"
            className={
              location.pathname === "/profile/achievments" ? "active" : ""
            }
          >
            <i className="icon icon-achievments"></i>
            <p>Yutuqlarim</p>
          </Link>
        </li>

        <li>
          <Link
            to="/profile/payment"
            className={location.pathname === "/profile/payment" ? "active" : ""}
          >
            <i className="icon icon-payment"></i>
            <p>Tolov tarixi</p>
          </Link>
        </li>

        <li>
          <Link
            to="/profile/settings"
            className={
              location.pathname === "/profile/settings" ? "active" : ""
            }
          >
            <i className="icon icon-settings"></i>
            <p>Sozlamalar</p>
          </Link>
        </li>

        <li>
          <Link
            to="/"
            className={location.pathname === "/profile/logout" ? "active" : ""}
          >
            <i className="icon icon-logout"></i>
            <p>Chiqish</p>
          </Link>
        </li>
      </ul>
    </StyledProfileSidebar>
  );
}
const StyledProfileSidebar = styled.div`
  background-color: #fcfcfc;
  min-height: calc(100vh - 190px);
  padding: 40px 30px;
  ul {
    list-style: none;
    display: flex;
    gap: 40px;
    flex-direction: column;
    padding: 40px 30px;
    li {
      a {
        display: flex;
        gap: 18px;
        align-items: center;
        font-size: 22px;
        font-weight: 500;
        line-height: 33px;
        letter-spacing: 0em;
        color: black;
        text-decoration: none;
        &:active {
          color: #18a0fb;
          i{
            background-color: #18A0FB;

          }
        }
      }
    }
  }
`;
