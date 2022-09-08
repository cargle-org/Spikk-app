import React from 'react'
import styled from 'styled-components'
import avi from '../../assets/Images/avi.png'
import deleteIcon from '../../assets/SVG/DeleteIcon.svg'
import editIcon from '../../assets/SVG/EditIcon.svg'
import clearIcon from '../../assets/SVG/ClearIcon.svg'
import { StyledButton } from '../../atoms/StyledButtons'

const BOStyles = styled.div`
width: 100%;
h2{
    font-weight: 600;
    font-size: .8rem;
    color: #555555;
}
.order-btn-group{
    display: flex;
    button{
        padding: .5rem 1rem;
        font-weight: 600;
        margin-right: 1rem;
        font-size: .8rem;
    }
    .clear{
        background-color: red;
        img{
            width: 15px;
        }
        &:hover{
            border: 1px solid red;
        }
    }
}
@media (max-width:660px){
    display: none;
}
`
const OrderCard = styled.div`
background-color:#F7F7F7;
border-radius: 20px;
border: 1px solid #F7F7F7;
// box-shadow: 0px 4px 14px rgba(170, 170, 170, 0.25);
margin: 2rem auto 1rem;
padding: 1rem;
width: 100%;

table{
    border-collapse: collapse;
    width: 100%;
    thead{
        tr{
            th:nth-child(4){
                width: 50%;
            }
            th:nth-child(3),th:nth-child(6), th:nth-child(7){
                width: fit-content;
                padding: 0;
            }
            th{
                font-size: .8rem;
                text-align: left;
                padding: .5rem;
            }
        }
    }
    tbody, tfoot{
        tr{
            td{ text-align-left;
                font-size: .7rem;
                padding: 1rem .2rem;
                border-top: 1px solid #CCCCCC;
                border-bottom: 1px solid #CCCCCC;
                font-weight: 400;
                .avi{
                    width: 25px;
                }
                .table-icons{
                    margin: 0 .5rem;
                    width: 15px;
                    cursor: pointer;
                }
            }
            .item-name, .quantity{
                color: #17173F;
            }
            .comment{
                color: #AAAAAA;
            }
            .price{
                color: black;
                font-weight: 500;
            }
        }
    }
}

`

function SendOrder() {
  return (
   <BOStyles>
    <h2>Order Summary</h2>
    <OrderCard>
    {/* <TableContainer> */}
  <table>
    <thead>
      <tr>
        <th>Image</th>
        <th>Item Name</th>
        <th>Quantity</th>
        <th>Comment</th>
        <th>Estimated Dimension</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><img className='avi' src={avi} alt='avi' /></td>
        <td className='item-name'>Yoyo Bitters</td>
        <td className='quantity'>3</td>
        <td className='comment'>i want to by food and i want it to be today’s own at ICM </td>
        <td className='price'>2 in by 4 in</td>
        <td><img className='table-icons' src={deleteIcon} alt='icon' /></td>
        <td><img className='table-icons' src={editIcon} alt='icon' /></td>
      </tr>
      
      <tr>
        <td><img className='avi' src={avi} alt='avi' /></td>
        <td className='item-name'>Yoyo Bitters</td>
        <td className='quantity'>3</td>
        <td className='comment'>i want to by food and i want it to be today’s own at ICM </td>
        <td className='price'>2 in by 4 in</td>
        <td><img className='table-icons' src={deleteIcon} alt='icon' /></td>
        <td><img className='table-icons' src={editIcon} alt='icon' /></td>
      </tr>
      
      <tr>
        <td><img className='avi' src={avi} alt='avi' /></td>
        <td className='item-name'>Yoyo Bitters</td>
        <td className='quantity'>3</td>
        <td className='comment'>i want to by food and i want it to be today’s own at ICM </td>
        <td className='price'>2 in by 4 in</td>
        <td><img className='table-icons' src={deleteIcon} alt='icon' /></td>
        <td><img className='table-icons' src={editIcon} alt='icon' /></td>
      </tr>
      
      <tr>
        <td><img className='avi' src={avi} alt='avi' /></td>
        <td className='item-name'>Yoyo Bitters</td>
        <td className='quantity'>3</td>
        <td className='comment'>i want to by food and i want it to be today’s own at ICM </td>
        <td className='price'>2 in by 4 in</td>
        <td><img className='table-icons' src={deleteIcon} alt='icon' /></td>
        <td><img className='table-icons' src={editIcon} alt='icon' /></td>
      </tr>
    </tbody>
    {/* <tfoot>
        <tr>
            <td><b>Total</b></td>
            <td></td>
            <td></td>
            <td></td>
            <td><b>₦135,000.00</b></td>
            <td></td>
            <td></td>
        </tr>
    </tfoot> */}
  </table>
{/* </TableContainer> */}
    </OrderCard>
    <div className="order-btn-group">
    <StyledButton type='submit' className='clear'>
                <img src={clearIcon} alt="icon" /> 
                <span>Clear all</span>
     </StyledButton>
    </div>
   
   </BOStyles>
  )
}

export default SendOrder