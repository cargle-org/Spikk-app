import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterQuicklinks = styled.div`
  h3 {
    margin-bottom: 2rem;
    color: #fba819;
    font-weight: 800;
  }
  .quicklinks {
    display: flex;
    flex-direction: column;
    a {
      font-weight: 300;

      &:hover {
        color: #fba819;
      }
    }
  }
  @media (max-width: 760px) {
    margin: 1rem 0;
  }
`;

function Privacy() {
  const goToAbout = () => {
    const About = document.getElementById("about").offsetTop;
    window.scrollTo({
      top: About,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <FooterQuicklinks>
      <h3>Policies</h3>
      <div className="quicklinks">
        <Link to="/privacy"> Privacy Policy</Link>
        <Link to="/tc">Terms and Conditions</Link>
        <Link to="/restricted">Restricted Items</Link>
      </div>
    </FooterQuicklinks>
  );
}

export default Privacy;
