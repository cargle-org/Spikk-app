import React, { useState } from "react";
import styled from "styled-components";
// import cart from "../../assets/SVG/CartPlaceholder.svg";
// import imgIcon from "../../assets/SVG/ImageIcon.svg";
// import uploader from "../../assets/SVG/UploadIcon.svg";
import currency from "../../assets/SVG/Currency.svg";
import { StyledButton } from "../../atoms/StyledButtons";
import addicon from "../../assets/SVG/AddIcon.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
// import ItemContext from "../../providers/ItemProvider";
import { useToast } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import axios from "axios";
import gif from '../../assets/Images/loading.gif'

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
        .successText {
         color: green;
         font-weight: bold;
         }
        button{
            margin-left: auto;
            .gif{
              width: 20px;
            }
        }
        .form-input{
            display: grid;
            grid-template-columns: auto auto;
            grid-gap: 25px 10px; 
            .input-group{
                display: flex;
                align-items: start;
                border: .5px solid #CCCCCC;
                border-radius: 5px;
                background-color: #F7F7F7;
                &.error{
                    border: 1px solid red;
                }
                img{
                    margin: .8rem .5rem 0;
                
                }
                svg{
                  margin: .8rem .5rem 0;
                  width: 20px;
                }
                input, textarea{
                    width: 100%;
                    height: 100%;
                    color: black;
                    font-size: 0.8rem;
                    padding: .7rem 1rem;
                    background-color: #F7F7F7;
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
                 &:focus{
                    outline: 2px solid red;
                 }
            }
            .errorText{
                color: red;
                font-size: .7rem;
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
`;

const InputWrapper = styled.div`
  .description {
    font-size: 0.8rem;
    color: #909090;
  }
`;

// const imageMimeType = /image\/(png|jpg|jpeg)/i;

function BuyForm() {
     // const successToast = useToast();
     // const failedToast = useToast();
     // const [file, setFile] = useState(null);
     // const [duplicateError, setDuplicateError] = useState(false);
     // const { items, setItems, editItem, setEditItem, edit, setEdit } = useContext(ItemContext);
     // const changeHandler = (e) => {
     //   const file = e.target.files[0];
     //   if (!file.type.match(imageMimeType)) {
     //     alert("Image mime type is not valid");
     //     return;
     //   }
     //   setFile(file);
     //   formik.setFieldValue("item_image", file.name);
     // };
     // const updateItem = (updatedItem) => {
     //   //  (updatedItem)

     //   const newItems = items.filter((e) => e.id !== updatedItem.id);
     //   //  ([...newItems]);
     //   setItems([...newItems, updatedItem]);
     // };
     // useEffect(() => {
     //   if (edit === true) {
     //     formik.setFieldValue("item_name", editItem.item.item_name);
     //     formik.setFieldValue("item_image", editItem.item.item_image);
     //     formik.setFieldValue("unit_amount", editItem.item.unit_amount);
     //     formik.setFieldValue("quantity", editItem.item.quantity);
     //     formik.setFieldValue("comment", editItem.item.comment);
     //   }
     // }, [editItem, edit]);
    //  const successToast = useToast();
     const failedToast = useToast();
      const [isLoading, setisLoading] = useState(false)
      const [isSuccess, setisSuccess] = useState(false)
     const phoneRegExp =
          /^[/+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,8}$/;
     const itemsListRegExp =
         /^[\s.]*([^\s.][\s.]*){0,100}$/;
     const formik =
          useFormik(
               {
                    initialValues:
                         {
                              customer_name:
                                   "",
                              delivery_address:
                                   "",
                              purchase_location:
                                   "",
                              customer_phone_number:
                                   "",
                              list_of_items:
                                   "",
                              total_estimated_amount:
                                   "",
                         },
                    validationSchema:
                         Yup.object(
                              {
                                   customer_name:
                                        Yup.string().label(
                                             "Name"
                                        ),
                                   total_estimated_amount:
                                        Yup.number().label(
                                             "Estimated Amount"
                                        ),
                                   delivery_address:
                                        Yup.string().label(
                                             "Delivery Address"
                                        ),
                                   purchase_location:
                                        Yup.string().label(
                                             "Purchase Location"
                                        ),
                                   customer_phone_number:
                                        Yup.string()
                                             .matches(
                                                  phoneRegExp,
                                                  "Phone number is not valid"
                                             )
                                             .label(
                                                  "Phone Number"
                                             )
                                             .required(),
                                   list_of_items:
                                        Yup.string()
                                             .matches(
                                                  itemsListRegExp,
                                                  "List is too long(Not more than 100 characters)."
                                             )
                                             .label(
                                                  "Items"
                                             ),
                              }
                         ),

                    onSubmit:
                         function ( values,{ resetForm }) {
                              // const filteredItems = items.filter((e) => e.item_name.toLowerCase() === values.item_name.toLowerCase());
                              console.log( values );
                              setisLoading(true)
                              axios.post(
                                   "https://spikk-api-v2-0.onrender.com/api/utils/shop",
                                   values
                              )
                                   .then(
                                        (
                                             response
                                        ) => {
                                             // console.log(response)
                                            setisSuccess(true)
                                            setTimeout(() => {
                                              setisSuccess(false)
                                            }, 10000)
                                             setisLoading(
                                                  false
                                             );
                                             resetForm();
                                        }
                                   )
                                   .catch(
                                        (
                                             error
                                        ) => {
                                             // console.log(error)
                                             setisLoading(
                                                  false
                                             );
                                             failedToast(
                                                  {
                                                       title: " Request Failed.",
                                                       description:
                                                            "Your order cannot be processed.",
                                                       status: "failed",
                                                       duration: 5000,
                                                       isClosable: true,
                                                  }
                                             );
                                        }
                                   );
                              // if (filteredItems.length && !edit) {
                              //   setDuplicateError(true);
                              //   failedToast({
                              //     title: "Could not add item.",
                              //     description: "Seems you already added this Item.",
                              //     status: "warning",
                              //     duration: 4000,
                              //     isClosable: true,
                              //   });
                              // } else {
                              //   if (edit) {
                              //     const sterilized = {
                              //       ...values,
                              //       id: editItem.item.id,
                              //     };
                              //     updateItem(sterilized);
                              //     successToast({
                              //       title: " Update Successful.",
                              //       description: "This Item has been updated in your order list.",
                              //       status: "success",
                              //       duration: 4000,
                              //       isClosable: true,
                              //     });
                              //     setEdit(false);
                              //   } else {
                              //     const sterilized = {
                              //       ...values,
                              //       id: Math.random(),
                              //     };
                              //     setItems((prevState) => [...prevState, sterilized]);
                              //     successToast({
                              //       title: "Successful.",
                              //       description: "Your Item has been added to your order list.",
                              //       status: "success",
                              //       duration: 4000,
                              //       isClosable: true,
                              //     });
                              //   }
                              //   setDuplicateError(false);\
                         },
               }
          );

     // useEffect(() => {
     //   const unitTotal = parseFloat(formik.values.unit_amount) * parseFloat(formik.values.quantity);
     //   formik.setFieldValue("total_amount", unitTotal);
     // }, [formik.values.unit_amount, formik.values.quantity]);

     // let amountFormatter = Intl.NumberFormat("en-US");
     return (
          <BuyFormStyles>
               <h3 className="form-head">
                    Let
                    us
                    know
                    what
                    you
                    want
                    to
                    buy
               </h3>
               <div className="hr"></div>

               <form
                    onSubmit={
                         formik.handleSubmit
                    }
               >
                    <div className="form-input">
                         <InputWrapper>
                              <div className="input-group">
                                   {/* <img src={cart} alt="icon" /> */}
                                   <Icon icon="mdi:user" />
                                   <input
                                        className={
                                             formik
                                                  .touched
                                                  .customer_name &&
                                             formik
                                                  .errors
                                                  .customer_name
                                                  ? "error"
                                                  : ""
                                        }
                                        type="text"
                                        name="customer_name"
                                        id="customer_name"
                                        value={
                                             formik
                                                  .values
                                                  .customer_name
                                        }
                                        onChange={
                                             formik.handleChange
                                        }
                                        onBlur={
                                             formik.handleBlur
                                        }
                                        placeholder="Enter your name"
                                   />
                              </div>
                              {formik
                                   .touched
                                   .customer_name &&
                                   formik
                                        .errors
                                        .customer_name && (
                                        <span className="errorText">
                                             {
                                                  formik
                                                       .errors
                                                       .customer_name
                                             }
                                        </span>
                                   )}
                         </InputWrapper>
                         <InputWrapper>
                              <div className="input-group">
                                   <Icon icon="material-symbols:phone-android" />
                                   <input
                                        className={
                                             formik
                                                  .touched
                                                  .customer_phone_number &&
                                             formik
                                                  .errors
                                                  .customer_phone_number
                                                  ? "error description"
                                                  : "description"
                                        }
                                        type="number"
                                        name="customer_phone_number"
                                        id="customer_phone_number"
                                        placeholder="Enter phone number"
                                        value={
                                             formik
                                                  .values
                                                  .customer_phone_number
                                        }
                                        onChange={
                                             formik.handleChange
                                        }
                                        onBlur={
                                             formik.handleBlur
                                        }
                                   />
                              </div>
                              {formik
                                   .touched
                                   .customer_phone_number &&
                                   formik
                                        .errors
                                        .customer_phone_number && (
                                        <span className="errorText">
                                             {
                                                  formik
                                                       .errors
                                                       .customer_phone_number
                                             }
                                        </span>
                                   )}
                         </InputWrapper>
                         <InputWrapper>
                              <div className="input-group">
                                   {/* <img
                                     src={
                                          currency
                                     }
                                     alt="icon"
                                /> */}
                                   <Icon icon="material-symbols:home-pin" />
                                   <input
                                        className={
                                             formik
                                                  .touched
                                                  .delivery_address &&
                                             formik
                                                  .errors
                                                  .delivery_address
                                                  ? "error"
                                                  : ""
                                        }
                                        type="text"
                                        name="delivery_address"
                                        id="delivery_address"
                                        placeholder="Enter delivery address"
                                        value={
                                             formik
                                                  .values
                                                  .delivery_address
                                        }
                                        onChange={
                                             formik.handleChange
                                        }
                                        onBlur={
                                             formik.handleBlur
                                        }
                                   />
                              </div>
                              {formik
                                   .touched
                                   .delivery_address &&
                                   formik
                                        .errors
                                        .delivery_address && (
                                        <span className="errorText">
                                             {
                                                  formik
                                                       .errors
                                                       .delivery_address
                                             }
                                        </span>
                                   )}
                         </InputWrapper>

                         <InputWrapper>
                              <div className="input-group">
                                   <img
                                        src={
                                             currency
                                        }
                                        alt="icon"
                                   />
                                   <input
                                        className={
                                             formik
                                                  .touched
                                                  .total_estimated_amount &&
                                             formik
                                                  .errors
                                                  .total_estimated_amount
                                                  ? "error"
                                                  : ""
                                        }
                                        type="number"
                                        name="total_estimated_amount"
                                        id="total_estimated_amount"
                                        placeholder="Enter total estimated price"
                                        value={
                                             formik
                                                  .values
                                                  .total_estimated_amount
                                        }
                                        onChange={
                                             formik.handleChange
                                        }
                                        onBlur={
                                             formik.handleBlur
                                        }
                                   />
                              </div>
                              {formik
                                   .touched
                                   .total_estimated_amount &&
                                   formik
                                        .errors
                                        .total_estimated_amount && (
                                        <span className="errorText">
                                             {
                                                  formik
                                                       .errors
                                                       .total_estimated_amount
                                             }
                                        </span>
                                   )}
                         </InputWrapper>
                         <InputWrapper>
                              <div className="input-group">
                                   <Icon icon="material-symbols:list-alt-rounded" />
                                   <textarea
                                        className={
                                             formik
                                                  .touched
                                                  .list_of_items &&
                                             formik
                                                  .errors
                                                  .list_of_items
                                                  ? "error"
                                                  : ""
                                        }
                                        type="text"
                                        rows="4"
                                        name="list_of_items"
                                        id="list_of_items"
                                        placeholder="Enter list of items to be purchased (not more than 100 characters)"
                                        value={
                                             formik
                                                  .values
                                                  .list_of_items
                                        }
                                        onChange={
                                             formik.handleChange
                                        }
                                        onBlur={
                                             formik.handleBlur
                                        }
                                   />
                              </div>
                              {formik
                                   .touched
                                   .list_of_items &&
                                   formik
                                        .errors
                                        .list_of_items && (
                                        <span className="errorText">
                                             {
                                                  formik
                                                       .errors
                                                       .list_of_items
                                             }
                                        </span>
                                   )}
                         </InputWrapper>

                         <InputWrapper>
                              <div className="input-group">
                                   {/* <img
                                     src={
                                          currency
                                     }
                                     alt="icon"
                                /> */}
                                   <Icon icon="uil:location-pin-alt" />
                                   <input
                                        className={
                                             formik
                                                  .touched
                                                  .purchase_location &&
                                             formik
                                                  .errors
                                                  .purchase_location
                                                  ? "error"
                                                  : ""
                                        }
                                        type="text"
                                        name="purchase_location"
                                        id="purchase_location"
                                        placeholder="Enter purchase location"
                                        value={
                                             formik
                                                  .values
                                                  .purchase_location
                                        }
                                        onChange={
                                             formik.handleChange
                                        }
                                        onBlur={
                                             formik.handleBlur
                                        }
                                   />
                              </div>
                              {formik
                                   .touched
                                   .purchase_location &&
                                   formik
                                        .errors
                                        .purchase_location && (
                                        <span className="errorText">
                                             {
                                                  formik
                                                       .errors
                                                       .purchase_location
                                             }
                                        </span>
                                   )}
                         </InputWrapper>
                    </div>
                    <StyledButton type="submit">
                         {isLoading ? (
                              <img
                                   className="gif"
                                   src={
                                        gif
                                   }
                                   alt="loader"
                              />
                         ) : (
                              <>
                                   {" "}
                                   <img
                                        src={
                                             addicon
                                        }
                                        alt="icon"
                                   />
                                   <p>
                                        Done
                                   </p>
                              </>
                         )}
                    </StyledButton>
                    {isSuccess && (
                         <h3 className="successText">
                              Shop
                              Request
                              successfully
                              received.
                              <br />
                              We
                              will
                              confirm
                              your
                              order
                              within
                              15
                              mins
                              over
                              a
                              call
                              or
                              SMS.
                         </h3>
                    )}
               </form>
          </BuyFormStyles>
     );
}

export default BuyForm;
