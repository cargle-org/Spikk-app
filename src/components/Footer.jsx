import React from 'react'
import styled from 'styled-components'
import Copyright from './Copyright'
import FooterContact from './FooterContact'
import QuickLinks from './QuickLinks'

const FooterStyles = styled.div`
display: flex;
justify-content: space-between;
align-items: start;
margin: 8rem 0 3rem;
@media (max-width: 760px){
  margin: 3rem 1rem;
  flex-direction: column;
}

`

function Footer() {
  return (
   <FooterStyles>
    <Copyright />
    <QuickLinks />
    <FooterContact />
   </FooterStyles>
  )
}

export default Footer