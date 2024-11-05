import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Home from "../components/Home";
import styled from "styled-components";
import MobileHeader from "../components/MobileHeader";
import PrivacyPage from "./PrivacyPage";
import Footer from "../components/Footer";
import RestrictedItems from "./RestrictedItems";
import Terms from "./Terms";

const LandingStyles = styled.div`
  position: relative;
  background-color: #ebeff2;
`;

function LandingPage() {
  const [showMenu, setShowMenu] = useState(false);
  const [isPrivacyOnly, setIsPrivacyOnly] = useState(false);
  const [isRestrictedOnly, setIsRestrictedOnly] = useState(false);
  const [isTermsOnly, setIsTermsOnly] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    // Check for the hash in the URL
    const checkHash = () => {
      const hash = window.location.hash;
      if (hash === "#privacy") {
        setIsTermsOnly(false);
        setIsPrivacyOnly(true);
        setIsRestrictedOnly(false);
      } else if (hash === "#restricted") {
        setIsTermsOnly(false);
        setIsPrivacyOnly(false);
        setIsRestrictedOnly(true);
      } else if (hash === "#tc") {
        setIsTermsOnly(true);
        setIsPrivacyOnly(false);
        setIsRestrictedOnly(false);
      } else {
        setIsTermsOnly(false);
        setIsPrivacyOnly(false);
        setIsRestrictedOnly(false);
      }
    };

    checkHash(); // Initial check when component mounts

    // Listen for hash changes
    window.addEventListener("hashchange", checkHash);
    return () => {
      window.removeEventListener("hashchange", checkHash);
    };
  }, []);

  return (
    <LandingStyles>
      {!isPrivacyOnly && !isRestrictedOnly && !isTermsOnly && (
        <>
          <MobileHeader className={showMenu ? "open" : ""} />
          <Header onClick={handleShowMenu} />
          <Home />
        </>
      )}
      {/* PrivacyPage shown either way, controlled by the isPrivacyOnly state */}
      {isPrivacyOnly && <PrivacyPage />}
      {isRestrictedOnly && <RestrictedItems />}
      {isTermsOnly && <Terms />}
      <Footer />
    </LandingStyles>
  );
}

export default LandingPage;

// import React, { useState } from "react";
// import Header from "../components/Header";
// import Home from "../components/Home";
// import styled from "styled-components";
// import MobileHeader from "../components/MobileHeader";
// import PrivacyPage from "./PrivacyPage";
// import Footer from "../components/Footer";

// const LandingStyles = styled.div`
//   position: relative;
//   background-color: #ebeff2;
// `;

// function LandingPage() {
//   const [showMenu, setShowMenu] = useState(false);

//   const handleShowMenu = () => {
//     setShowMenu(!showMenu);
//     //  ('click', showMenu)
//   };
//   return (
//     <>
//       <LandingStyles>
//         <MobileHeader className={showMenu ? "open" : ""} />
//         <Header onClick={handleShowMenu} />
//         <Home />
//         <PrivacyPage />
//         <Footer />
//       </LandingStyles>
//     </>
//   );
// }

// export default LandingPage;
