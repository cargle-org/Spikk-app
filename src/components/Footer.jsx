import React from "react";
import styled from "styled-components";
import Copyright from "./Copyright";
import FooterContact from "./FooterContact";
import QuickLinks from "./QuickLinks";
import Privacy from "./Privacy";

const FooterStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 8rem 6rem 3rem;
  @media (max-width: 760px) {
    padding: 3rem 1rem;
    flex-direction: column;
  }
`;

function Footer() {
  return (
    <FooterStyles>
      <Copyright />
      <QuickLinks />
      <Privacy />
      <FooterContact />
    </FooterStyles>
  );
}

export default Footer;
