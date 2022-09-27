import React, {useContext} from 'react'
import styled from 'styled-components'
import deleteIcon from '../../assets/SVG/DeleteIcon.svg'
import editIcon from '../../assets/SVG/EditIcon.svg'
import clearIcon from '../../assets/SVG/ClearIcon.svg'
import { StyledButton } from '../../atoms/StyledButtons'
import ItemContext from '../../providers/ItemProvider'
import { useToast } from '@chakra-ui/react'

const MobileOrder = styled.div`
    margin: 3rem auto;
    font-size: .8rem;
    width: 100%;
        h2{
            font-weight: 600;
            font-size: 1rem;
            color: #555555;
            text-align: center;
            margin: 1rem auto;
        } 
        .order{
            margin: 1rem 0;
            width: 100%;
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
                        width: 50px;
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

const ItemEdit = (item) =>{
    setEdit(true);
    setEditItem({
        item : item
    });
    deleteToast({
        title: ' Edit mode',
        status: 'info',
        duration: 4000,
        isClosable: true,
      });
    //  (editItem)
}
//  (items)
let amountFormatter = Intl.NumberFormat('en-US');

  return (
   <MobileOrder>
    {items.length > 0 && 
    <>
    <h2>Order Summary</h2>
    <hr />

    {items.map((item) => (
        <>
    <div  key={item.id} className="order">
        <div className="order-top">
            <div className="ot-left">
            <img className='avi'src={'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg'} alt='img' />
            <h5 className='item-name'>{item.item_name}</h5>
            </div>
            <div className="ot-right">
            <img onClick={() => ItemEdit(item)} className='edit-icon' src={editIcon} alt='icon' />
            <img  onClick={() => deleteItem(item.id)} className='del-icon' src={deleteIcon} alt='icon' />
            
            </div>
        </div>
        <div className="quantity"> <span>Quantity:</span>
        {item.quantity}</div>
        <div className="desc"><span>Description: </span>{item.comment}</div>
        <div className="price"><span>Price:</span> ₦{amountFormatter.format(parseFloat(item.unit_amount) * parseFloat(item.quantity))}</div>
    </div>
    <hr />
    </>
))}
    <div className="total-group">
        <h4 className='total'>Total</h4>
        <div className="amount">₦{amountFormatter.format(Total)}</div>
    </div>
    <hr />
    <StyledButton type='submit' className='clear' onClick={clearAllItems}>
                <img src={clearIcon} alt="icon" /> 
                <span>Clear all</span>
     </StyledButton>
     </>}
   </MobileOrder>
  )
}

export default MobileOrderSummary