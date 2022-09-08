import React from 'react'
import styled from 'styled-components'
import { StyledButton } from '../../atoms/StyledButtons'
import Instructions from '../Instructions'

const BDFStyles = styled.div`
    width: 100%;
    margin: 2rem auto;
    .form-head{
        font-weight: 600;
        color: #17173F;
        font-size: .9rem;
        margin: .6rem 0;
    }
    .hr{
        height: 3px;
        width: 3rem;
        background-color: #FBA819;
        border-radius; 1px;
    }
    form{
        margin: 2rem 0;
      .form-input{
        display: grid;
        grid-template-columns: auto auto;
        grid-gap: 25px 10px; 
        .single-input{
            border: .5px solid #CCCCCC;
            border-radius: 5px;
            background-color: #F7F7F7;
            padding: .7rem 1rem;
            &::placeholder{
                font-size: .8rem;
                color: #909090;
            }
            &:focus{
                outline: 1px solid #FBA819 ;
            }
        }
       .input-group{
        display: flex;
         align-items: center;
         border: .5px solid #CCCCCC;
         border-radius: 5px;
         background-color: #F7F7F7;
         h4{
            margin: 0 .5rem;
            font-size: .8rem;
        }
        input{
            width: 100%;
            border-left: .5px solid #CCCCCC;
            border-radius: 5px;
                background-color: #F7F7F7;
                padding: .7rem 1rem;
                &::placeholder{
                    font-size: .8rem;
                    color: #909090;
                }
                &:focus{
                    outline: 1px solid #FBA819 ;
                }
      }
       }
        }
        button{
            margin-left: auto;
            font-size: .8rem;
            font-weight: 600;
          }
    }
    @media (max-width: 660px){
        form{
            .form-input{
                grid-template-columns: auto;
                grid-gap: 30px 0;
            }
        }
    }
    @media (max-width: 360px){
        form{
            .form-input{
                .input-group{
                    input{
                        &::placeholder{
                            font-size: .7rem;
                        }
                    }
                }
            }
        }
    }
`

function SendDelivery() {
  return (
   <BDFStyles>
         <h3 className="form-head">Delivery details</h3>
            <div className="hr"></div>
            <form>
           <div className="form-input">
          <div className="input-group">
            <h4>From:</h4>
          <input 
                type="text"
                name='address'
                id='address'
                placeholder='Your home Address'/>
          </div>
          <div className="input-group">
            <h4>From:</h4>
          <input 
                type="text"
                name='address_desc'
                id='address_desc'
                placeholder='Your home Address description (optional)'/>
          </div>
         
            <input 
            className='single-input'
                type="email"
                name='email'
                id='email'
                placeholder='Reachable Email Address'/>
            <input 
             className='single-input'
                type="tel"
                name='phone'
                id='phone'
                placeholder='Reachable Phone Number'/>
          <div className="input-group">
            <h4>To:</h4>
          <input 
                type="text"
                name='dest_address'
                id='dest_address'
                placeholder='Destination home address'/>
          </div>
          <div className="input-group">
            <h4>To:</h4>
          <input 
                type="text"
                name='dest_address_desc'
                id='dest_address_dec'
                placeholder='Destination home address description (optional)'/>
          </div>
           </div>
            <Instructions />
            <StyledButton>Proceed and Confirm</StyledButton>
            </form>
   </BDFStyles>
  )
}

export default SendDelivery