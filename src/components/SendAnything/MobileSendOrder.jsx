import React, {useContext} from 'react'
import styled from 'styled-components'
import deleteIcon from '../../assets/SVG/DeleteIcon.svg'
import editIcon from '../../assets/SVG/EditIcon.svg'
import clearIcon from '../../assets/SVG/ClearIcon.svg'
import { StyledButton } from '../../atoms/StyledButtons'
import SendItemContext from '../../providers/SendItemProvider'

const MobileOrder = styled.div`
    margin: 3rem 1rem;
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

function MobileSendOrder() {
    const {items, setItems, setEditItem, setEdit} = useContext(SendItemContext);
    const clearAllItems = () => {
        setItems([]);
    }
    const deleteItem = (id) => {
       const newItems = items.filter(item => item.id !== id)
       setItems([...newItems]);
     }
     
     const ItemEdit = (item) =>{
         setEdit(true);
         setEditItem({
             item : item
         });
         // console.log(editItem)
     }
    //  console.log(items)
  return (
   <MobileOrder>
    {items.length > 0 && 
    <>
    <h2>Order Summary</h2>
    <hr />
    {items.map(item => (
     <>
    <div className="order" key={item.id}>
        <div className="order-top">
            <div className="ot-left">
            <img className='avi' src={'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg'} alt='img' />
            <h5 className='item-name'> {item.item_name} </h5>
            </div>
            <div className="ot-right">
            <img onClick={() => ItemEdit(item)} className='edit-icon' src={editIcon} alt='icon' />
            <img onClick={() => deleteItem(item.id)} className='del-icon' src={deleteIcon} alt='icon' />
            </div>
        </div>
        <div className="quantity"> <span>Quantity:</span>
        {item.quantity}</div>
        <div className="desc"><span>Description: </span>{item.comment}</div>
        <div className="price"><span>Dimension or Size:</span>{item.dimension_or_size} </div>
    </div>
    <hr />
    </>
    ))}
    <hr />
    <hr />
    <StyledButton type='submit' className='clear' onClick={clearAllItems}>
                <img src={clearIcon} alt="icon" /> 
                <span>Clear all</span>
     </StyledButton>
     </>
}
   </MobileOrder>
  )
}

export default MobileSendOrder