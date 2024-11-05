import React from "react";
import styled from "styled-components";

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
  return (
    <FooterQuicklinks>
      <h3>Policies</h3>
      <div className="quicklinks">
        <a href="/#privacy"> Privacy Policy</a>
        <a href="/#tc">Terms and Conditions</a>
        <a href="/#restricted">Restricted Items</a>
      </div>
    </FooterQuicklinks>
  );
}

export default Privacy;
