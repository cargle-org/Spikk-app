import React, {useContext} from 'react'
import styled from 'styled-components'
import { StyledButton } from '../../atoms/StyledButtons'
import Instructions from '../Instructions'
import SendItemContext from '../../providers/SendItemProvider'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useToast } from '@chakra-ui/react'
import axios from 'axios'
import gif from '../../assets/Images/loading.gif'
import { useState } from 'react'

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
       div{
        width: 100%;
        .single-input{ 
            width: 100%;
            border: .5px solid #CCCCCC;
            border-radius: 5px;
            background-color: #F7F7F7;
            padding: .7rem 1rem;
            &.error{
                border: 1px solid red;
            }
            &::placeholder{
                font-size: .8rem;
                color: #909090;
            }
            &:focus{
                outline: 1px solid #FBA819 ;
            }
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
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
                background-color: #F7F7F7;
                padding: .7rem 1rem;
                &.error{
                    border: 1px solid red;
                }
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
            img{
                height: 25px;
                width: 50px
                margin: 0;
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
                }
            }
        }
    }
`
const InputWrapper= styled.div`
.errorText{
    color: red;
    font-size: .7rem;
}
`;

function SendDelivery() {
    const [isLoading, setisLoading] = useState(false)
    const {items, setItems} = useContext(SendItemContext);
    const phoneRegExp = /^[/+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,8}$/
    const successToast = useToast();
    const failedToast = useToast();

    const formik = useFormik({
        initialValues: {
        source_address: '',
        source_address_description: 'Optional',
        destination_address: '',
        destination_address_description: 'Optional',
        email: '',
        phone: ''
        },
        validationSchema: Yup.object({
          source_address: Yup.string()
                  .label('Source Address')
                  .required(),
          source_address_description: Yup.string()
                  .label('Source Address Description'),
          destination_address: Yup.string()
                  .label('Destination Address')
                  .required(),
          destination_address_description: Yup.string()
                  .label('Destination Address Description'),
          email: Yup.string()
                .email()
                .label('Email')
                .required(),
         phone: Yup.string()
                .matches(phoneRegExp, 'Phone number is not valid')
                .label('Phone Number')
                .required(),
        }),
       
        onSubmit: function (values, {resetForm}) {
            setisLoading(true)
          const data = {
            items : [...newItems],
            user_id : '1',
            ...values
          }
           (data)

          axios.post('https://spikk-api.herokuapp.com/api/sendorder/create', data)
          .then(function(response){
            successToast({
                title: ' Request Successful.',
                description: "Your oder will be processed.",
                status: 'success',
                duration: 9000,
                isClosable: true,
              });
              setisLoading(false)
            setItems([])
            resetForm();
          })
          .catch(function(error){
            failedToast({
                title: ' Request Failed.',
                description: "Your oder will be processed.",
                status: 'failed',
                duration: 9000,
                isClosable: true,
              });
              setisLoading(false)
          })
         
        }
      })


      const newItems = items.map((item) =>{
        const newItem = {
            item_name : item.item_name,
            item_image: item.item_image,
            dimension_or_size: item.dimension_or_size,
            comment: item.comment,
            quantity: item.quantity,
        }
        return newItem
      })

  return (
   <BDFStyles>
    {items.length > 0 && 
        <>
         <h3 className="form-head">Delivery details</h3>
            <div className="hr"></div>
            <form onSubmit={formik.handleSubmit}>
           <div className="form-input">
         <InputWrapper>
         <div className="input-group">
            <h4>From:</h4>
          <input 
                 className={formik.touched.source_address && formik.errors.source_address ? 'error' : ''}
                 onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.source_address}
                type="text"
                name='source_address'
                id='source_address'
                placeholder='Your home Address'/>
          </div>
          {formik.touched.source_address && formik.errors.source_address && (
               <span className='errorText'>{formik.errors.source_address}</span>
               )}
         </InputWrapper>
         <InputWrapper>
         <div className="input-group">
            <h4>From:</h4>
          <input 
           className={formik.touched.source_address_description && formik.errors.source_address_description ? 'error' : ''}
           onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.source_address_description}
                type="text"
                name='source_address_description'
                id='source_address_description'
                placeholder='Your home Address description (optional)'/>
          </div>
          {formik.touched.source_address_description && formik.errors.source_address_description && (
               <span className='errorText'>{formik.errors.source_address_description}</span>
               )}
         </InputWrapper>
         <InputWrapper>
         <input 
            className={formik.touched.email && formik.errors.email ? 'error single-input' : 'single-input'}
            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}
                type="email"
                name='email'
                id='email'
                placeholder='Reachable Email Address'/>
                 {formik.touched.email && formik.errors.email && (
               <span className='errorText'>{formik.errors.email}</span>
               )}
         </InputWrapper>
         <InputWrapper>
         <input 
          className={formik.touched.phone && formik.errors.phone ? 'error single-input' : 'single-input'}
          onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone}
                type="tel"
                name='phone'
                id='phone'
                placeholder='Reachable Phone Number'/>
                 {formik.touched.phone && formik.errors.phone && (
               <span className='errorText'>{formik.errors.phone}</span>
               )}
         </InputWrapper>
           <InputWrapper>
           <div className="input-group">
            <h4>To:</h4>
          <input 
           className={formik.touched.destination_address && formik.errors.destination_address ? 'error' : ''}
           onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.destination_address}
                type="text"
                name='destination_address'
                id='destination_address'
                placeholder='Destination home address'/>
          </div>
          {formik.touched.destination_address && formik.errors.destination_address && (
               <span className='errorText'>{formik.errors.destination_address}</span>
               )}
           </InputWrapper>
            
          <InputWrapper>
          <div className="input-group">
            <h4>To:</h4>
          <input 
           className={formik.touched.destination_address_description && formik.errors.destination_address_description ? 'error' : ''}
           onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.destination_address_description}
                type="text"
                name='destination_address_description'
                id='destination_address_description'
                placeholder='Destination home address description (optional)'/>
          </div>
           {formik.touched.destination_address_description && formik.errors.destination_address_description && (
               <span className='errorText'>{formik.errors.destination_address_description}</span>
               )}
          </InputWrapper>  
           </div>
            <Instructions />
            <StyledButton type='submit'>{isLoading ? <img src={gif} alt='img' /> : 'Proceed and Confirm' }</StyledButton>
            </form>
            </>
            }
   </BDFStyles>
  )
}

export default SendDelivery