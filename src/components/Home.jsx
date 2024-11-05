import React from "react";
import HeroTop from "./HeroTop";
import styled from "styled-components";
import HeroBottom from "./HeroBottom";

const HomeStyles = styled.div`
  padding: 1rem 3rem;
  background-color: #ebeff2;
  max-width: 1800px;
  margin: 0 auto;
  @media (max-width: 560px) {
    padding: 1rem;
  }
`;
function Home() {
  return (
    <HomeStyles>
      <HeroTop />
      <HeroBottom />
    </HomeStyles>
  );
}

export default Home;
