import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
    background-color: white;
    border-radius: 50px;
    border: 3px solid white;
    box-shadow: 0px 4px 14px rgba(170, 170, 170, 0.25);
    margin: 2rem auto 10rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    width: 60%;

    @media (max-width: 920px){
      width: 80%;
    }
    @media (max-width: 768px){
      width: 100%;
    }
`

function Card(props) {
  return (
   <StyledCard>
    {props.children}
   </StyledCard>
  )
}

export default Card