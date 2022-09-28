import React from 'react'
import Card from '../Card'
import BuyForm from './BuyForm'
import styled from 'styled-components'
import BuyOrderSummary from './BuyOrderSummary'
import BuyDeliveryForm from './BuyDeliveryForm'
import MobileOrderSummary from './MobileOrderSummary'

const BuyStyles = styled.div`
    text-align: center;
    .card-title{
        font-size: 1.8rem;
        color: #17173F;
        font-weight: 700;
        letter-spacing: -1px;
    }
    .card-subtitle{
        font-weight:500;
        letter-spacing: -1px;
    }
`

function Buy() {

  return (
    <Card>
        <BuyStyles id='buy-btn'>
        <h2 className="card-title">Shop Anything</h2>
        </BuyStyles>
        <BuyForm/>
        <BuyOrderSummary />
        <MobileOrderSummary />
        <BuyDeliveryForm />
    </Card>
  )
}

export default Buy