import React from 'react'
import styled from 'styled-components'
import deleteIcon from '../../assets/SVG/DeleteIcon.svg'
import editIcon from '../../assets/SVG/EditIcon.svg'
import clearIcon from '../../assets/SVG/ClearIcon.svg'
import { StyledButton } from '../../atoms/StyledButtons'
import { useContext } from 'react'
import ItemContext from '../../providers/ItemProvider'
import { useToast } from '@chakra-ui/react'

const BOStyles = styled.div`
width: 100%;
.note{
    color: #17173F;
    font-size: 0.8rem;
    font-weight: 700;
    margin-top: 1rem;
}
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
                width: fit-content;
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
            td{ 
                text-align: left;
                font-size: .7rem;
                padding: 1rem .2rem 1rem .7rem;
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

function BuyOrderSummary() {
    const deleteToast = useToast();
const {items, setItems, editItem, setEditItem, edit, setEdit} = useContext(ItemContext);
const amountArr = items.map(item => {
    return item.unit_amount * item.quantity;
})

const getTotal= (total, num) => {
    return total + num;
}

const Total = amountArr.reduce(getTotal, 0);
const clearAllItems = () => {
    setItems([]);
}


const deleteItem = (id) => {
    const newItems = items.filter(item => item.id !== id)
    setItems([...newItems]);
    deleteToast({
        title: ' Item deleted!',
        status: 'error',
        duration: 4000,
        isClosable: true,
      });
  }

  const goToBuy = () => {
    const Buy = document.getElementById("buy-btn").offsetTop
    //  (Buy)
    window.scrollTo({
        top: Buy,
        left: 0,
        behavior: 'smooth'
    });
}

const ItemEdit = (item) =>{
    setEdit(true);
    goToBuy();
    setEditItem({
        item : item
    });
    deleteToast({
        title: ' Edit your order',
        status: 'warning',
        duration: 4000,
        isClosable: true,
      });
    //  (editItem)
}
//  (items)
let amountFormatter = Intl.NumberFormat('en-US');
  return (
   <BOStyles>
    {items.length > 0 && 
    <>
    <h2>Order Summary</h2>
    <p className='note'><b>NOTE:</b> We currently deliver within Ogba(Lagos) at a flat fee of ₦700 only.</p>
    <OrderCard>
    {/* <TableContainer> */}
  <table>
    <thead>
      <tr>
        <th>Image</th>
        <th>Item Name</th>
        <th>Quantity</th>
        <th>Comment</th>
        <th>Estimated price(NGN)</th>
      </tr>
    </thead>
    <tbody>
      {items.map((item) => (
        <tr key={item.id}>
        <td><img className='avi' src={'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg'} alt='img' /></td>
        <td className='item-name'>{item.item_name}</td>
        <td className='quantity'>{item.quantity}</td>
        <td className='comment'>{item.comment}</td>
        <td className='price'>₦{amountFormatter.format(parseFloat(item.unit_amount) * parseFloat(item.quantity))}</td>
        <td onClick={() => deleteItem(item.id)}><img className='table-icons' src={deleteIcon} alt='icon' /></td>
        <td onClick={() => ItemEdit(item)}><img className='table-icons' src={editIcon} alt='icon' /></td>
      </tr>
      ))}
      </tbody>
    <tfoot>
        <tr>
            <td><b>Total</b></td>
            <td></td>
            <td></td>
            <td></td>
            <td><b>₦{amountFormatter.format(Total)}</b></td>
            <td></td>
            <td></td>
        </tr>
    </tfoot>
  </table>
{/* </TableContainer> */}
    </OrderCard>
    <div className="order-btn-group">
    <StyledButton type='submit' className='clear' onClick={clearAllItems}>
                <img src={clearIcon} alt="icon" /> 
                <span>Clear all</span>
     </StyledButton>
    </div>
   
    </>}
   </BOStyles>
  )
}

export default BuyOrderSummary