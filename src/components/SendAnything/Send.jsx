import React from 'react'
import Card from '../Card'
import styled from 'styled-components'
import SendForm from './SendForm'
import SendOrder from './SendOrder'
import SendDelivery from './SendDelivery'
import MobileSendOrder from './MobileSendOrder'

const SendStyles = styled.div`
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


function Send() {
  return (
    <Card>
        <SendStyles  id='send-btn'>
        <h2 className="card-title">Send Anything</h2>
        </SendStyles>
        <SendForm />
        <SendOrder />
        <MobileSendOrder />
        <SendDelivery />
    </Card>
  )
}

export default Send