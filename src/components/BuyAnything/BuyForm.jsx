import React from 'react'
import styled from 'styled-components'
import cart from '../../assets/SVG/CartPlaceholder.svg'
import imgIcon from '../../assets/SVG/ImageIcon.svg'
import uploader from '../../assets/SVG/UploadIcon.svg'
import currency from '../../assets/SVG/Currency.svg'
import { StyledButton } from '../../atoms/StyledButtons'
import addicon from '../../assets/SVG/AddIcon.svg'

const BuyFormStyles = styled.div`
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
        button{
            margin-left: auto;
        }
        .form-input{
            display: grid;
            grid-template-columns: auto auto;
            grid-gap: 25px 10px; 
            .input-group{
                display: flex;
                align-items: center;
                border: .5px solid #CCCCCC;
                border-radius: 5px;
                background-color: #F7F7F7;
                img{
                    margin: 0 .5rem;
                  
                }
                input{
                    width: 100%;
                    height: 100%;
                    padding: .7rem 1rem;
                    background-color: #F7F7F7;
                    &::placeholder{
                        font-size: .8rem;
                        color: #909090;
                    }
                    &:focus{
                        outline: 1px solid #FBA819 ;
                    }
                }
                .file-label{
                    font-size: .8rem;
                    color: #909090;
                    width: 100%;
                    height: 100%;
                    padding: .7rem 1rem;
                 }
                 &:focus{
                    outline: 2px solid red;
                 }
            }
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
                    .file-label{
                        font-size: .7rem;
                        padding: .7rem .3rem
                    }
                }
            }
        }
    }
`

function BuyForm() {
  return (
    <BuyFormStyles>
            <h3 className="form-head">Let us know what you want to buy</h3>
            <div className="hr"></div>
            <form>
                <div className="form-input">
               <div className="input-group">
                <img src={cart} alt="icon" />
                <input 
                type="text"
                name='item_name'
                id='item_name'
                placeholder='What do you want to get?'/>
               </div>
               <div className="input-group" style={{position: 'relative'}}>
                <img src={imgIcon} alt="icon" />
                <input 
                style={{visibility: 'hidden', position: 'absolute', top: '0', left: '0', right: '0', bottom: '0'}}
                type="file"
                name='item-image'
                id='item_image'
                placeholder='What do you want to get?'/>
                <label htmlFor='image' className='file-label'> Attach Image - (Optional)</label>
                <label htmlFor='image'><img src={uploader} alt="icon" /></label>
               </div>
               <div className="input-group">
                <img src={currency} alt="icon" />
                <input 
                type="number"
                name='unit_amount'
                id='unit_amount'
                placeholder='Enter price estimate'/>
               </div>
               <div className="input-group">
                {/* <img src={cart} alt="icon" /> */}
                <input 
                type="number"
                name='quantity'
                id='quantity'
                placeholder='Enter Quantity'/>
               </div>
               <div className="input-group">
                {/* <img src={cart} alt="icon" /> */}
                <input 
                type="text"
                name='wants'
                id='wants'
                placeholder='Comment(Optional)'/>
               </div>
               
                </div>
               <StyledButton type='submit'>
                <img src={addicon} alt="icon" /> 
                <p>Add Item</p>
                </StyledButton>
            </form>
        </BuyFormStyles>
  )
}

export default BuyForm