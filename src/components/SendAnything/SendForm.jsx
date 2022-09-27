import React, {useState, useEffect, useContext} from 'react'
import styled from 'styled-components'
import imgIcon from '../../assets/SVG/ImageIcon.svg'
import uploader from '../../assets/SVG/UploadIcon.svg'
import { StyledButton } from '../../atoms/StyledButtons'
import addicon from '../../assets/SVG/AddIcon.svg'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import SendItemContext from '../../providers/SendItemProvider'
import { useToast } from '@chakra-ui/react'

const SendFormStyles = styled.div`
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
            div{
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
                        border-radius: 5px;
                        &.error{
                            outline: 1px solid red;
                        }
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
                }
                .errorText{
                    color: red;
                    font-size: .7rem;
                }
            }
        }

    }
    @media (max-width: 660px){
        form{
            .form-input{
                grid-template-columns: auto;
                grid-gap: 30px 0px;
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
                        padding: .7rem .3rem;
                        white-space: nowrap;
                        overflow: hidden;
                    }
                }
            }
        }
    }
`
const InputWrapper= styled.div``;

const imageMimeType = /image\/(png|jpg|jpeg)/i;

function SendForm() {
    const successToast = useToast();
    const failedToast = useToast();
    const [imgfile, setImgFile] = useState(null);
    const [duplicateError, setDuplicateError] = useState(false)
    const { items, setItems, editItem,edit, setEdit} = useContext(SendItemContext)
    const changeHandler = (e) => {
        const imgfile = e.target.files[0];
        if (!imgfile.type.match(imageMimeType)) {
          alert("Image mime type is not valid");
          return;
        }
        setImgFile(imgfile);
        formik.setFieldValue('item_image', imgfile.name);
      }
      const updateItem = (updatedItem) => {
        //  (updatedItem)
    
        const newItems = items.filter(e => e.id !== updatedItem.id)
        //  ([...newItems]);
        setItems([...newItems, updatedItem]);
      }
    useEffect(() => {
       if(edit === true){
        
        formik.setFieldValue('item_name', editItem.item.item_name)
        formik.setFieldValue('item_image', editItem.item.item_image)
        formik.setFieldValue('dimension_or_size', editItem.item.dimension_or_size)
        formik.setFieldValue('quantity', editItem.item.quantity)
        formik.setFieldValue('comment', editItem.item.comment)
       }
    
      }, [editItem, edit]);

     
      
      const formik = useFormik({
        initialValues: {
        item_name: '',
        item_image: 'image',
        comment: 'Optional',
        dimension_or_size: '',
        quantity: '',
        },
        validationSchema: Yup.object({
          item_name: Yup.string()
                  .label('Item Name')
                  .required(),
         dimension_or_size: Yup.string()
                  .label('Dimension or Size')
                  .required(),
          comment: Yup.string()
                  .label('Comment'),
         quantity: Yup.number()
                  .label('Quantity')
                  .required(),
         item_image: Yup.string()
                    .label('Image'),
        }),
       
        onSubmit: function (values, {resetForm}) {
            //  (values);
            //  (values)
           const filteredItems = items.filter(e => e.item_name.toLowerCase() === values.item_name.toLowerCase())
    
            if(filteredItems.length && !edit){
                setDuplicateError(true);
                failedToast({
                    title: 'Could not add item.',
                    description: "Seems you already added this Item.",
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                  })
            } else{
                if(edit){
                    const sterilized = {
                        ...values,
                        id: editItem.item.id
                    }
                    updateItem(sterilized);
                    successToast({
                        title: ' Update Successful.',
                        description: "This Item has been updated in your order list.",
                        status: 'success',
                        duration: 9000,
                        isClosable: true,
                      });
                      setEdit(false)
                } else{
                    const sterilized = {
                        ...values,
                        id: Math.random()
                    }
                        setItems(prevState => [...prevState, sterilized]);
                        successToast({
                            title: 'Successful.',
                            description: "Your Item has been added to your order list.",
                            status: 'success',
                            duration: 9000,
                            isClosable: true,
                          })

                    }
                    setDuplicateError(false);
                    resetForm();
            }
          
        }
       
      })


  return (
    <SendFormStyles>
            <h3 className="form-head">Let us know what you want to send</h3>
            <div className="hr"></div>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-input">
               <InputWrapper>
               <div className="input-group">
                {/* <img src={cart} alt="icon" /> */}
                <input 
                className={formik.touched.item_name && formik.errors.item_name ? 'error' : ''}
                type="text"
                name='item_name'
                id='item_name'
                value={formik.values.item_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} 
                placeholder='What are you sending?'/>
               </div>
               {formik.touched.item_name && formik.errors.item_name && (
               <span className='errorText'>{formik.errors.item_name}</span>)}
               </InputWrapper>
              <InputWrapper>
              <div className={formik.touched.item_image && formik.errors.item_image ? 'input-group error' : ' input-group'} style={{position: 'relative'}}>
                <img src={imgIcon} alt="icon" />
                <input 
                style={{visibility: 'hidden', position: 'absolute', top: '0', left: '0', right: '0', bottom: '0'}}
                type="file"
                name='item-image'
                id='item_image_send'
                accept=".jpg, .jpeg, .png"
                onChange={e => {
                changeHandler(e);
             }}/>
                <label htmlFor='item_image_send' className='file-label'> {formik?.values?.item_image !== 'image' ?  formik.values?.item_image : 'Attach an Image(Optional)'} </label>
                <label htmlFor='item_image_send'><img src={uploader} alt="icon" /></label>
               </div>
               </InputWrapper>
              <InputWrapper>
              <div className="input-group">
                {/* <img src={currency} alt="icon" /> */}
                <input 
                className={formik.touched.dimension_or_size && formik.errors.dimension_or_size ? 'error' : ''}
                type="text"
                name='dimension_or_size'
                id='dimension_or_size'
                value={formik.values.dimension_or_size}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} 
                placeholder='Enter estimate dimention or size (optional) to get?'/>
               </div>
               {formik.touched.dimension_or_size && formik.errors.dimension_or_size && (
               <span className='errorText'>{formik.errors.dimension_or_size}</span>)}
               </InputWrapper>
               <InputWrapper>
               <div className="input-group">
                {/* <img src={cart} alt="icon" /> */}
                <input 
                 className={formik.touched.quantity && formik.errors.quantity ? 'error' : ''}
                 type="number"
                 name='quantity'
                 id='quantity'
                 placeholder='Enter Quantity'
                 value={formik.values.quantity}
                 onChange={formik.handleChange}
                 onBlur={formik.handleBlur} />
               </div>
               {formik.touched.quantity && formik.errors.quantity && (
               <span className='errorText'>{formik.errors.quantity}</span>)}
               </InputWrapper>
              <InputWrapper>
              <div className="input-group">
                {/* <img src={cart} alt="icon" /> */}
                <input 
               type="text"
               name='comment'
               id='comment'
               placeholder='Comment(Optional)'
               value={formik.values.comment}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               />
               </div>
              </InputWrapper>
                </div>
                <StyledButton type='submit'>
                <img src={addicon} alt="icon" /> 
                <p>Add Item</p>
                </StyledButton>
            </form>
        </SendFormStyles>
  )
}

export default SendForm