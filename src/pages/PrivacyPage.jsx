import React from 'react'
import styled from 'styled-components'
import arrow from '../assets/SVG/Arrow.svg'
const PrivacyContainer = styled.div`
width: 100%;
max-width: 1100px;
margin: 2rem auto;
padding: 1rem 6rem;
p{
    text-align: justify;
}
h1{
    font-weight: 800;
    font-size: 2rem;
    margin: 2rem auto;
    text-align: center;
}
p{
    a{
        color: gray;
        font-size: 0.9rem;
        font-weight: 600;
    }
}

h2{
    font-weight: 700;
    margin: 2rem 0 1rem;
}
@media (max-width: 560px){
    padding: 1rem;
}
`;

const PrivacyTop = styled.div`
width: 100%;
text-align: right;
a{
    margin-left: auto;
    img{
        margin-right: 0.5rem;
        display: inline;
    }
}
`;

function PrivacyPage() {
  return (
    <PrivacyContainer>
         <PrivacyTop><a href="/"> <img src={arrow} alt="" /> Go Back to the website</a></PrivacyTop>
        <h1>Privacy Policy</h1>
        <p>This Privacy Policy is agreed between you and Spikk’s corporate entities (‘Spikk’, ‘We’, ‘Us’ or ‘Our’ as appropriate). Spikk will only process your personal data for the purposes for which it collected it, namely to provide you with an on-demand errand or delivery service. </p>
        <p>Read about <a href='/privacy/restricted-items'>Privacy Policy on Restricted Items</a></p>

        <h2>INTRODUCTION</h2>
        <p>
        Your privacy is important to Spikk. We follow closely the laws and ensure legality. We endeavor to keep your personal information protected at all times by implementing adequate technical and organizational controls. Please take a moment to read the following policy to learn how we handle your personal information, as your use of our services will indicate your acceptance of its content.
        </p>
        <h2>PURPOSE OF COLLECTION</h2>
        <p>
        We collect and use your personal information to satisfy legal and regulatory requirements; for historical and statistical purposes; for security and control and for the smooth provision of our services. From time to time, we may also use your personal information to contact you by mail, email, telephone or mobile phone to introduce you to our products or any events, activities, projects, plans, developments, undertakings and special offers taking place, being promoted or supported by Spikk. The data supplied by you upon registering online or thereafter shall be kept by Spikk and will solely by used to determine the legality of registration and activity on the Website. By supplying us with your information you confirm that you do not consider use of your information in accordance with this Privacy Policy to be a breach of your rights under “The Act”. We encourage you to contact us at any time and remind you of your right to opt out at any time from receiving any promotional or marketing materials from us.
        </p>
        <h2>PROTECTION OF INFORMATION</h2>
        <p>
        Spikk safeguards the security of the data you provide us with physical, electronic, and managerial procedures. Please note that we cannot guarantee that any data transmitted over the Internet is completely secure. Accordingly, we encourage you to take every precaution to protect your personal data when you are on the Internet.
        </p>
        <h2>ACCESS OF INFORMATION</h2>
        <p>
        The Management of Spikk together with the Fraud Team will have the right to access the submitted personal information relating to the registered players. You always have a right of access the information we have about you. To review and update your personal contact information, simply contact Spikk and you will be provided with information about your personal data we hold. If you prefer you may contact our Customer Service using the contact details available on the site. Additionally, you have the right to have any inaccurate information corrected and where applicable, erased. It is our right to ask you to provide us with a written request for information we hold about you.
        </p>
        <h2>COMMITMENT TO PRIVACY</h2>
        <p>
        To make sure your personal information remains confidential; we communicate these privacy guidelines to every Spikk employee. Spikk’s Website may, from time to time, contain links to other sites. Spikk does not share your personal information with those websites and is not responsible for their privacy practices. We encourage you to learn about the privacy policies of any such company. If we are going to use your personal information differently from that stated at the time of collection, we will inform you accordingly. Spikk’s Privacy Policy is subject to change at any time. It is in your interest to review the privacy policy regularly for any changes.
        </p>
        <h2>CONTACT US</h2>
        <p>
        If you have any questions or suggestions about our Privacy Policy, do not hesitate to  <a href='mailto:hi@gloed.co'> Contact us </a>
        </p>
    </PrivacyContainer>
  )
}

export default PrivacyPage