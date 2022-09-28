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

function Instructions(props) {
  
  return (
    <InstructionStyles>
        <p>Make a payment of ₦{props.price} to Spikk flw  7812192534 Wema OR GTB Spikk Limited 0679104590.</p>
    </InstructionStyles>
  )
}

export default Instructions