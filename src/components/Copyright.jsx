import React from "react";
import styled from "styled-components";
import footerlogo from "../assets/SVG/FooterLogo.svg";

const FooterCopyrights = styled.div`
  img {
    margin-bottom: 2rem;
    width: 60px;
  }
  .copy {
    p {
      font-weight: 300;
    }
  }
  @media (max-width: 760px) {
    margin: 1rem 0;
  }
`;

function Copyright() {
  const year = new Date().getFullYear();

  return (
    <FooterCopyrights>
      <img src={footerlogo} alt="logo" />
      <div className="copy">
        <b className="copyright"> &copy; {year} Spikk Technologies</b>
        {/* <p>
          Terms and conditions |{" "}
          <a href="https://www.notion.so/spikk/Privacy-Policy-afd75068dcaa49c9b7138734639266a0 " className="">
            Privacy Policy
          </a>{" "}
        </p> */}
      </div>
    </FooterCopyrights>
  );
}

export default Copyright;
