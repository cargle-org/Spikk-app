import React from 'react'
import styled from 'styled-components'
import { StyledButton } from '../../atoms/StyledButtons'
import Instructions from '../Instructions'
import { useContext } from 'react'
import ItemContext from '../../providers/ItemProvider'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useToast } from '@chakra-ui/react'

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
       .input-group{
        display: flex;
        flex-direction: column;
        .errorText{
            color: red;
            font-size: .7rem;
        }
        input{
            &.error{
                border: 1px solid red;
            }
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



function BuyDeliveryForm() {
    const phoneRegExp = /^[/+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,8}$/
    const {items, setItems} = useContext(ItemContext);
    const successToast = useToast();
    const failedToast = useToast();

    const formik = useFormik({
        initialValues: {
        home_address: '',
        description: '',
        email: '',
        phone: ''
        },
        validationSchema: Yup.object({
          home_address: Yup.string()
                  .label('Item Name')
                  .required(),
          description: Yup.string()
                  .label('Description'),
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
            const allValues = {
                items : [...items], 
                ...values
            }
          console.log(allValues)
          successToast({
            title: ' Request Successful.',
            description: "Your oder will be processed.",
            status: 'success',
            duration: 9000,
            isClosable: true,
          });
          setItems([])
            resetForm();
        }
      })
      
  return (
   <BDFStyles>
        {items.length > 0 && 
        <>
         <h3 className="form-head">Delivery details</h3>
            <div className="hr"></div>
            <form onSubmit={formik.handleSubmit}>
           <div className="form-input">
         <div className="input-group">
         <input 
            className={formik.touched.home_address && formik.errors.home_address ? 'error' : ''}
            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.home_address}
                type="text"
                name='home_address'
                id='home_address'
                placeholder='Your home Address'/>
                {formik.touched.home_address && formik.errors.home_address && (
               <span className='errorText'>{formik.errors.home_address}</span>
               )}
         </div>
          <div className="input-group">
          <input 
             className={formik.touched.description && formik.errors.description ? 'error' : ''}
             onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.description}
                type="text"
                name='description'
                id='description'
                placeholder='Description (optional)'/>
                {formik.touched.description && formik.errors.description && (
               <span className='errorText'>{formik.errors.description}</span>
               )}
          </div>
           <div className="input-group">
           <input 
             className={formik.touched.email && formik.errors.email ? 'error' : ''}
             onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}
                type="email"
                name='email'
                id='email'
                placeholder='Reachable Email Address'/>
                {formik.touched.email && formik.errors.email && (
               <span className='errorText'>{formik.errors.email}</span>
               )}
           </div>
            <div className="input-group">
            <input 
                className={formik.touched.phone && formik.errors.phone ? 'error' : ''}
                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone}
                type="tel"
                name='phone'
                id='phone'
                placeholder='Reachable Phone Number'/>
                 {formik.touched.phone && formik.errors.phone && (
               <span className='errorText'>{formik.errors.phone}</span>
               )}
            </div>
           </div>
            <Instructions />
            <StyledButton type='submit'>Proceed and Confirm</StyledButton>
            </form>
        </>}
   </BDFStyles>
  )
}

export default BuyDeliveryForm