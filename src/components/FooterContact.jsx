import React from 'react'
import styled from 'styled-components'
import fb from '../assets/SVG/Socials/Facebook Icon.svg'
import gm from '../assets/SVG/Socials/Gmail Icon.svg'
import insta from '../assets/SVG/Socials/Instagram Icon.svg'
import tw from '../assets/SVG/Socials/Twitter Icon.svg'
import linkedin from '../assets/SVG/Socials/bi_linkedin.svg'
const FCStyles = styled.div`
    h3{
        margin-bottom: 2rem;
        color:  #FBA819;
        font-weight: 800;
    }
    .socials{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
    }
    @media (max-width: 760px){
        margin: 1rem 0;
    }
`

function FooterContact() {
  return (
   <FCStyles>
    <h3>Get in touch with us</h3>
    <div className="socials">
    <a href='https://www.facebook.com/spikk.co ' target={'_blank'} rel='noreferrer'><img src={fb} alt="icon" /></a>
    <a href='mailto:hi@spikk.co'><img src={gm} alt="icon" /></a>
    <a href='https://www.instagram.com/spikk.co/ ' target={'_blank'} rel='noreferrer'><img src={insta} alt="icon" /></a>
    <a href='https://twitter.com/Spikk_co ' target={'_blank'} rel='noreferrer'><img src={tw} alt="icon" /></a>
    <a href='https://www.linkedin.com/company/spikk/ ' target={'_blank'} rel='noreferrer'><img src={linkedin} alt="icon" /></a>
    </div>
   </FCStyles>
  )
}

export default FooterContact