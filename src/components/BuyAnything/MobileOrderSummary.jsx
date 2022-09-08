import React from 'react'
import styled from 'styled-components'
import avi from '../../assets/Images/avi.png'
import deleteIcon from '../../assets/SVG/DeleteIcon.svg'
import editIcon from '../../assets/SVG/EditIcon.svg'
import clearIcon from '../../assets/SVG/ClearIcon.svg'
import { StyledButton } from '../../atoms/StyledButtons'

const MobileOrder = styled.div`
    margin: 3rem auto;
    font-size: .8rem;
        h2{
            font-weight: 600;
            font-size: 1rem;
            color: #555555;
            text-align: center;
            margin: 1rem auto;
        } 
        .order{
            margin: 1rem 0;
           
            .order-top{
                margin: 1rem 0;
                display: flex;
                justify-content: space-between;
                align-item: center;
                .ot-left,.ot-right{
                    display: flex;
                    align-items: center;
                }
                .ot-left{
                    .avi{
                        margin-right: 1rem;
                    }
                    .item-name{
                        color: #17173F;
                        font-weight: 400;
                    }
                }
                .ot-right{
                    .del-icon{
                        margin-left: 1rem;
                    }
                }
            }
            .quantity, .desc, .price{
                span{
                    font-weight: 500;
                    color: #17173F;
                }
                margin-bottom: .5rem;
            }
            .desc{
                color: #AAAAAA;
            }
            .price, .quantity{
                color: black;
                font-weight: 700;
            }
        }
        .total-group{
            display: flex;
            justify-content: space-between;
            align-item: center;
            padding: .5rem 0;
            font-weight: 700;
            color: black;
        }
        .clear{
            background-color: red;
            padding: .5rem 1rem;
            font-weight: 600;
            margin-right: 1rem;
            font-size: .8rem;
            img{
                width: 15px;
            }
            &:hover{
                border: 1px solid red;
            }
        }
@media (min-width: 660.98px){
    display: none;
}
`

function MobileOrderSummary() {
  return (
   <MobileOrder>
    <h2>Order Summary</h2>
    <hr />
    <div className="order">
        <div className="order-top">
            <div className="ot-left">
            <img className='avi' src={avi} alt='avi' />
            <h5 className='item-name'>Yoyo Bitters</h5>
            </div>
            <div className="ot-right">
            <img className='edit-icon' src={editIcon} alt='icon' />
            <img className='del-icon' src={deleteIcon} alt='icon' />
            
            </div>
        </div>
        <div className="quantity"> <span>Quantity:</span>
         3</div>
        <div className="desc"><span>Description: </span>i want to by food and i want it to be today’s own at ICM</div>
        <div className="price"><span>Price:</span> ₦35,000.00 </div>
    </div>
    <hr />
    <div className="total-group">
        <h4 className='total'>Total</h4>
        <div className="amount">₦125,000.00</div>
    </div>
    <hr />
    <StyledButton type='submit' className='clear'>
                <img src={clearIcon} alt="icon" /> 
                <span>Clear all</span>
     </StyledButton>
   </MobileOrder>
  )
}

export default MobileOrderSummary