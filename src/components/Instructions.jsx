import React from 'react'
import styled from 'styled-components'

const InstructionStyles = styled.div`
    margin: 4rem auto;
    background-color: rgba(23, 23, 63, 0.15);
    border-radius: 10px;
    padding: 1.5rem;
    width: 70%;  
    p{
        color: #17173F;
        text-align: center;
        margin: auto;
        width: 90%;
        font-size: .7rem;
        font-weight: 600;
    }  
    @media (max-width:660px){
      margin: 4rem auto;
      width: 90%;
      p{
        width: 100%;
      }
    }
    @media (max-width:420px){
      margin: 4rem auto;
      width: 95%;
      padding: 1rem;
    }
`

function Instructions() {
  return (
    <InstructionStyles>
        <p>Make a minimum payment of ₦3000 to 2639222311 UBA Bank (Spikk Nigeria LTD) and one of our agent will reach out to you to finalize your order. Do well to download your receipt and make sure your account name correlate with the name you are using to make the purchase. Thank you</p>
    </InstructionStyles>
  )
}

export default Instructions