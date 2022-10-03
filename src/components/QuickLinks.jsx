import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const FooterQuicklinks = styled.div`
    h3{
        margin-bottom: 2rem;
        color:  #FBA819;
        font-weight: 800;
    }
    .quicklinks{
        display: flex;
        flex-direction: column;
        a{
            font-weight: 300;
        }
    }
    @media (max-width: 760px){
        margin: 1rem 0;
    }
`

function QuickLinks() {
    const goToAbout = () => {
        const About = document.getElementById("about").offsetTop
        window.scrollTo({
            top: About,
            left: 0,
            behavior: 'smooth'
        });
    }
  return (
   <FooterQuicklinks>
    <h3>Quicklinks</h3>
    <div className="quicklinks">
        <Link to='#about' onClick={goToAbout}> About</Link>
        <a href='https://wa.me/message/SJKH6SCCLMKVP1' target={'_blank'} rel="noreferrer"> Contact Us </a>
    </div>
   </FooterQuicklinks>
  )
}

export default QuickLinks