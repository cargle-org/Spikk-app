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

function RestrictedItems() {
  return (
    <PrivacyContainer>
         <PrivacyTop><a href="/"> <img src={arrow} alt="" /> Go Back to the website</a></PrivacyTop>
        <h1>Policy on the Shopping/Delivery of Restricted Items</h1>
        <p>Non-Exhaustive List of Examples:</p>
        <h2>Alcohol and Tobacco Products</h2>
        <p>
        Deliveries of alcohol and tobacco products may be limited or restricted in certain countries and/or cities in which the Platform operates.
        </p>
        <h2>Animals and Regulated Species</h2>
        <p>
        Animal parts or fluids; banned seeds, harmful plants; regulated plants or other organisms (including their by-products) which are endangered or whose trade is regulated by law as applicable in any case.
        </p>
        <h2>Child pornography</h2>
        <p>
        Pornographic material involving children or content that may be perceived as erotic paedophilia.
        </p>
        <h2>Copyright on Software and Media</h2>
        <p>
        Unauthorised copies of books, music, films and other protected or licensed materials, including properly referenced copies; and unauthorised copies of software, video games and other protected or licensed materials, including from OEMs or other products that cause unsolicited messages to be sent.
        </p>
        <h2>Counterfeits and unauthorised products</h2>
        <p>
        Copies or imitations of designer products or other goods; items belonging to celebrities that would usually require authentication; false autographs; foreign currency; stamps; tickets; or other unauthorised goods.
        </p>
        <h2>Devices or tools for overcoming security measures</h2>
        <p>
        Modems, chips or other devices for dismantling technical protection measures as well as on digital devices, including for unlocking iPhones.
        </p>
        <h2>Drugs</h2>
        <p>
        Controlled substances, narcotics, illegal drugs and their paraphernalia, including psychoactive and vegetable drugs such as psychedelic mushrooms, as well as materials promoting their use; or legal substances such as plants and herbs presented in a form that suggests they should be ingested, inhaled, extracted or used in any other way that may result in the same use as an illegal substance, drug or component or that claims to have unproven health benefits.
        </p>
        <h2>Gambling and Betting</h2>
        <p>
        Lottery tickets, bets, online betting site memberships/registrations, and related content. Permitted promotion of physical casinos.
        </p>
        <h2>Products Sold in Pharmacies</h2>
        <p>
        Deliveries of pharmaceutical products may be limited or restricted in certain countries and/or cities in which the Platform operates.  Prescription drugs may not be ordered/delivered. OTC (over-the-counter) medicines, ancillary medical devices, as well as any other products for hygiene, nutrition or similar for human use sold in pharmacies are subject to the mandate given by the User to the Mandatary and to what the pharmacist may deem appropriate.
        </p>
        <h2>Materials for hacking and cracking</h2>
        <p>
        Manuals, guides, information or equipment that infringes the law by damaging or fraudulently facilitating access to software, servers, websites or other protected property.
        </p>
        <h2>Human Body</h2>
        <p>
        Organs or other body parts; body fluids; stem cells; embryos.
        </p>
        <h2>Stolen or illegal goods</h2>
        <p>
        Materials, products or information that promotes illegal goods or facilitates illegal acts; goods not belonging to a person or which a person has no right to sell; goods produced in violation of third-party rights; goods infringing import, export or labelling restrictions; motor vehicles that are subject to transfer restrictions. You (the Glovo User) are solely and fully responsible for checking that all items are genuine and legal.
        </p>
        <h2>Illegal telecommunications equipment</h2>
        <p>
        Devices aimed at obtaining satellite signals without payment, illegal products for modifying mobile phones and other equipment.
        </p>
        <h2>Offensive goods</h2>
        <p>
        Goods, literature, products or other materials that:
        <ul>
            <li>Are defamatory of any person or group of people based on their race, ethnic origin or country of origin, religion, gender or any other factor.</li>
            <li>Are defamatory of any person or group of people who are protected from defamation by the applicable law (e.g. the royal family in some jurisdictions).</li>
            <li>Praise or incite the commission of violence.</li>
            <li>Promote intolerance or hatred.</li>
            <li>Promote or support membership of terrorist groups or other organisations that are prohibited by law.</li>
            <li>Are contrary to public morals.</li>
        </ul>
        </p>
        <h2>Offensive goods related to a criminal offence</h2>
        <p>
        Photographs of, or objects from, a crime scene, such as personal belongings, associated with criminals or criminal acts.
        </p>
        <h2>Culturally protected artefacts</h2>
        <p>
        Materials covered by the 1970 UNESCO Convention on the Means of Prohibiting and Preventing the Illicit Import, Export and Transfer of Ownership of Cultural Property or other goods whose sale, export or transfer is restricted by law; Artefacts, cave formations (stalactites and stalagmites);

        Pyrotechnic devices and dangerous substances requiring special permission

        Pyrotechnic items and related goods in markets in which their supply is regulated, as well as substances such as petrol or propane.
        </p>
        <h2>Traffic-related devices</h2>
        <p>
        Radars, number plate covers, illegal traffic-modification devices and related products.
        </p>
        <h2>Weapons</h2>
        <p>
        Firearms, ammunition and other items including, without limitation, firearms, knives that are either undetectable or easy to conceal, martial arts weapons, silencers, ammunition or ammunition magazines.
        </p>
        <h2>Money and Foreign Currency</h2>
        <p>
        Foreign currency or currencies insured with precious metals, as well as banknotes, coins or any other valuable securities.
        </p>
        <h2>Primary and Secondary Schools / Use by children</h2>
        <p>
        We reserve the right to refuse orders from users who are minors. In addition, we reserve the right to refuse orders at any location near a primary or secondary school, as well as to ask for sufficient proof of age.
        </p>
        <h2>Misuse of the platform / Abuse</h2>
        <p>
        We will not tolerate the use of abusive language or abusive attitudes towards our company or freelance workers.
        </p>
        </PrivacyContainer>
  )
}

export default RestrictedItems