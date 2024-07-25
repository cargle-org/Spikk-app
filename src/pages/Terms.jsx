import React, { useState } from "react";
import styled from "styled-components";
import arrow from "../assets/SVG/Arrow.svg";
import MobileHeader from "../components/MobileHeader";
import Header from "../components/Header";

const PrivacyContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 2rem auto;
  padding: 1rem 6rem;
  p {
    text-align: justify;
  }
  h1 {
    font-weight: 800;
    font-size: 2rem;
    margin: 2rem auto;
    text-align: center;
  }
  p {
    a {
      color: gray;
      font-size: 0.9rem;
      font-weight: 600;
    }
  }

  h2 {
    font-weight: 700;
    margin: 2rem 0 1rem;
  }

  .bytext {
    font-weight: 800;
    font-size: 1.5rem;
    margin: 1rem 0;
    text-align: left;
  }

  .updated {
    margin: 1rem 0;
  }

  @media (max-width: 560px) {
    padding: 1rem;
  }
`;

const PrivacyTop = styled.div`
  width: 100%;
  text-align: right;
  a {
    margin-left: auto;
    img {
      margin-right: 0.5rem;
      display: inline;
    }
  }
`;

function Terms() {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <MobileHeader className={showMenu ? "open" : ""} />
      <Header onClick={handleShowMenu} />
      <PrivacyContainer>
        <PrivacyTop>
          <a href="/">
            {" "}
            <img src={arrow} alt="" /> Go Back to the website
          </a>
        </PrivacyTop>
        <h1>Terms and Conditions</h1>
        <p className="updated">
          <strong>Last updated: </strong> 20th July, 2024.
        </p>
        <p>
          These Terms and Conditions ("Terms") govern your use of the services
          provided by Spikk ("Spikk," "We," "Us," or "Our"). By accessing or
          using our services, you agree to comply with and be bound by these
          Terms. If you do not agree to these Terms, please do not use our
          services.
        </p>
        <h2>1. Services Provided</h2>
        <p>
          Spikk provides on-demand errand and delivery services. By using our
          services, you acknowledge that we may collect, use, and process your
          personal data as described in our Privacy Policy.
        </p>
        <h2>2. Use of Services</h2>
        <p>
          <ul>
            <li>
              <strong>Eligibility:</strong> You must be at least 18 years old to
              use our services.
            </li>
            <li>
              <strong>Account Responsibility:</strong> You are responsible for
              maintaining the confidentiality of your account information and
              for all activities that occur under your account.
            </li>
            <li>
              <strong>Compliance:</strong> You agree to use our services in
              compliance with all applicable laws and regulations.
            </li>
          </ul>
        </p>
        <h2>3. Fees and Payments</h2>
        <p>
          <ul>
            <li>
              <strong>Pricing:</strong> The estimated price for our services may
              differ from the actual cost. Any differences will be communicated
              to you, and you will have the option to proceed with or cancel
              your order.
            </li>
            <li>
              <strong>Payment:</strong> Payments for services must be made
              through the methods provided on our platform. You agree to pay all
              applicable fees and charges.
            </li>
          </ul>
        </p>
        <h2>4. Order and Delivery</h2>
        <p>
          <ul>
            <li>
              <strong>Order Changes:</strong> If there is a discrepancy between
              the estimated and actual price, you will be contacted to confirm
              whether you wish to proceed with the purchase.
            </li>
            <li>
              <strong>Cancellation:</strong> You may cancel your order or adjust
              items if the updated price is not acceptable.
            </li>
            <li>
              <strong>Delivery:</strong> We will deliver items to the address
              provided at the time of order. Ensure that your delivery location
              and item packaging meet our guidelines.
            </li>
          </ul>
        </p>
        <h2>5. Prohibited Items</h2>
        <p>
          <ul>
            <li>
              <strong>Restrictions:</strong> Dangerous or illegal items are
              prohibited from being delivered through our services. For a list
              of prohibited items, refer to our{" "}
              <a href="/restricted">Privacy Policy on Restricted Items.</a>
            </li>
          </ul>
        </p>
        <h2>6. Privacy and Data Protection</h2>
        <p>
          <ul>
            <li>
              <strong>Personal Information:</strong> We process personal data in
              accordance with our Privacy Policy. By using our services, you
              consent to our data practices. Data Security: While we strive to
              protect your personal information, we cannot guarantee complete
              security of data transmitted over the Internet.
            </li>
          </ul>
        </p>

        <h2>7. Account Management</h2>
        <p>
          <ul>
            <li>
              <strong>Access and Correction:</strong> You have the right to
              access and update your personal information. For corrections or
              deletions, please contact us as outlined in our Privacy Policy.
            </li>
            <li>
              <strong>Account Deletion:</strong> You may delete your account
              through our app settings or by contacting our Customer Care. We
              will process your request within 30 days, unless otherwise
              required by law.
            </li>
          </ul>
        </p>

        <h2>8. Limitation of Liability</h2>
        <p>
          <ul>
            <li>
              <strong>Service Use:</strong> We are not liable for any indirect,
              incidental, or consequential damages arising from your use of our
              services. Our liability is limited to the maximum extent permitted
              by law.
            </li>
          </ul>
        </p>

        <h2>9. Changes to Terms</h2>
        <p>
          <ul>
            <li>
              <strong>Modifications:</strong> We may update these Terms from
              time to time. We encourage you to review them regularly. Continued
              use of our services constitutes acceptance of any changes.
            </li>
          </ul>
        </p>

        <h2>10. Contact Us</h2>
        <p>
          For any questions or concerns regarding these Terms, please contact us
          at hi@spikk.co. By using Spikk’s services, you agree to these Terms
          and Conditions.
        </p>
      </PrivacyContainer>
    </>
  );
}

export default Terms;
