import React from 'react'
import styled from 'styled-components'
import fb from '../assets/SVG/Socials/Facebook Icon.svg'
import gm from '../assets/SVG/Socials/Gmail Icon.svg'
import insta from '../assets/SVG/Socials/Instagram Icon.svg'
import tw from '../assets/SVG/Socials/Twitter Icon.svg'

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
    <img src={fb} alt="icon" />
    <img src={gm} alt="icon" />
    <img src={insta} alt="icon" />
    <img src={tw} alt="icon" />
    </div>
   </FCStyles>
  )
}

export default FooterContact