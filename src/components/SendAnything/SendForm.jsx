import React, { useState } from "react";
import styled from "styled-components";
// import imgIcon from "../../assets/SVG/ImageIcon.svg";
// import uploader from "../../assets/SVG/UploadIcon.svg";
import { StyledButton } from "../../atoms/StyledButtons";
import addicon from "../../assets/SVG/AddIcon.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
// import SendItemContext from "../../providers/SendItemProvider";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { Icon } from "@iconify/react";
import gif from "../../assets/Images/loading.gif"

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
            div{
                .input-group{
                    display: flex;
                    align-items: start;
                    border: .5px solid #CCCCCC;
                    border-radius: 5px;
                    background-color: #F7F7F7;
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
                        padding: .7rem 1rem;
                        background-color: #F7F7F7;
                        border-radius: 5px;
                        color:black;
                        font-size: 0.8rem;
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
`;
const InputWrapper = styled.div`
  .description {
    font-size: 0.8rem;
    color: #909090;
  }
`;

// const imageMimeType = /image\/(png|jpg|jpeg)/i;

function SendForm() {
  // const successToast = useToast();
  const failedToast = useToast();
  // const [imgfile, setImgFile] = useState(null);
  // const [duplicateError, setDuplicateError] = useState(false);
      const [isLoading, setisLoading] = useState(false)
      const [isSuccess, setisSuccess] = useState(false)
     const phoneRegExp =
          /^[/+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,8}$/;
     const itemsListRegExp =
         /^[\s.]*([^\s.][\s.]*){0,100}$/;
  // const { items, setItems, editItem, edit, setEdit } = useContext(SendItemContext);
  // const changeHandler = (e) => {
  //   const imgfile = e.target.files[0];
  //   if (!imgfile.type.match(imageMimeType)) {
  //     alert("Image mime type is not valid");
  //     return;
  //   }
  //   setImgFile(imgfile);
  //   formik.setFieldValue("item_image", imgfile.name);
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
  //     formik.setFieldValue("dimension_or_size", editItem.item.dimension_or_size);
  //     formik.setFieldValue("quantity", editItem.item.quantity);
  //     formik.setFieldValue("comment", editItem.item.comment);
  //   }
  // }, [editItem, edit]);

  const formik =
       useFormik(
            {
                 initialValues:
                      {
                           customer_name:
                                "",
                           pickup_address:
                                "",
                           customer_phone_number:
                                "",
                           receiver_address:
                                "",
                           receiver_name:
                                "",
                           list_of_items:
                                "",
                           receiver_phone_number:
                                "",
                      },
                 validationSchema:
                      Yup.object(
                           {
                                customer_name:
                                     Yup.string().label(
                                          "Name"
                                     ),
                                pickup_address:
                                     Yup.string().label(
                                          "Delivery Address"
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
                                receiver_address:
                                     Yup.string().label(
                                          "Receiver Address"
                                     ),
                                receiver_name:
                                     Yup.string().label(
                                          "Receiver Name"
                                     ),
                                receiver_phone_number:
                                     Yup.string()
                                          .matches(
                                               phoneRegExp,
                                               "Phone number is not valid"
                                          )
                                          .label(
                                               "Receiver Phone Number"
                                          )
                                          .required(),
                                list_of_items:
                                     Yup.string()
                                          .matches(
                                               itemsListRegExp,
                                               "List is too long(List MUST not be more than 100 characters)."
                                          )
                                          .label(
                                               "Items"
                                          ),
                           }
                      ),

                 onSubmit:
                      function (
                           values,
                           {
                                resetForm,
                           }
                      ) {
                         console.log(
                              values
                         );
                         setisLoading(
                              true
                         );
                         axios.post(
                              "https://spikk-api-v2-0.onrender.com/api/utils/send",
                              values
                         )
                              .then(
                                   (
                                        response
                                   ) => {
                                        // console.log(response)
                                        setisSuccess(
                                             true
                                        );
                                        setTimeout(
                                             () => {
                                                  setisSuccess(
                                                       false
                                                  );
                                             },
                                             10000
                                        );
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
                           //  (values);
                           //  (values)
                          //  const filteredItems =
                          //       items.filter(
                          //            (
                          //                 e
                          //            ) =>
                          //                 e.item_name.toLowerCase() ===
                          //                 values.item_name.toLowerCase()
                          //       );

                          //  if (
                          //       filteredItems.length &&
                          //       !edit
                          //  ) {
                          //       setDuplicateError(
                          //            true
                          //       );
                          //       failedToast(
                          //            {
                          //                 title: "Could not add item.",
                          //                 description:
                          //                      "Seems you already added this Item.",
                          //                 status: "warning",
                          //                 duration: 4000,
                          //                 isClosable: true,
                          //            }
                          //       );
                          //  } else {
                          //       if (
                          //            edit
                          //       ) {
                          //            const sterilized =
                          //                 {
                          //                      ...values,
                          //                      id: editItem
                          //                           .item
                          //                           .id,
                          //                 };
                          //            updateItem(
                          //                 sterilized
                          //            );
                          //            successToast(
                          //                 {
                          //                      title: " Update Successful.",
                          //                      description:
                          //                           "This Item has been updated in your order list.",
                          //                      status: "success",
                          //                      duration: 4000,
                          //                      isClosable: true,
                          //                 }
                          //            );
                          //            setEdit(
                          //                 false
                          //            );
                          //       } else {
                          //            const sterilized =
                          //                 {
                          //                      ...values,
                          //                      id: Math.random(),
                          //                 };
                          //            setItems(
                          //                 (
                          //                      prevState
                          //                 ) => [
                          //                      ...prevState,
                          //                      sterilized,
                          //                 ]
                          //            );
                          //            successToast(
                          //                 {
                          //                      title: "Successful.",
                          //                      description:
                          //                           "Your Item has been added to your order list.",
                          //                      status: "success",
                          //                      duration: 4000,
                          //                      isClosable: true,
                          //                 }
                          //            );
                          //       }
                          //       setDuplicateError(
                          //            false
                          //       );
                          //       resetForm();
                          //  }
                      },
            }
       );

  return (
       <SendFormStyles>
            <h3 className="form-head">
                 Let
                 us
                 know
                 what
                 you
                 want
                 to
                 send
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
                                               .pickup_address &&
                                          formik
                                               .errors
                                               .pickup_address
                                               ? "error"
                                               : ""
                                     }
                                     type="text"
                                     name="pickup_address"
                                     id="pickup_address"
                                     placeholder="Enter pickup address"
                                     value={
                                          formik
                                               .values
                                               .pickup_address
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
                                .pickup_address &&
                                formik
                                     .errors
                                     .pickup_address && (
                                     <span className="errorText">
                                          {
                                               formik
                                                    .errors
                                                    .pickup_address
                                          }
                                     </span>
                                )}
                      </InputWrapper>
                      <InputWrapper>
                           <div className="input-group">
                                {/* <img src={cart} alt="icon" /> */}
                                <Icon icon="mdi:user" />
                                <input
                                     className={
                                          formik
                                               .touched
                                               .receiver_name &&
                                          formik
                                               .errors
                                               .receiver_name
                                               ? "error"
                                               : ""
                                     }
                                     type="text"
                                     name="receiver_name"
                                     id="receiver_name"
                                     value={
                                          formik
                                               .values
                                               .receiver_name
                                     }
                                     onChange={
                                          formik.handleChange
                                     }
                                     onBlur={
                                          formik.handleBlur
                                     }
                                     placeholder="Enter receiver's name"
                                />
                           </div>
                           {formik
                                .touched
                                .receiver_name &&
                                formik
                                     .errors
                                     .receiver_name && (
                                     <span className="errorText">
                                          {
                                               formik
                                                    .errors
                                                    .receiver_name
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
                                               .receiver_phone_number &&
                                          formik
                                               .errors
                                               .receiver_phone_number
                                               ? "error description"
                                               : "description"
                                     }
                                     type="number"
                                     name="receiver_phone_number"
                                     id="receiver_phone_number"
                                     placeholder="Enter receiver's phone number"
                                     value={
                                          formik
                                               .values
                                               .receiver_phone_number
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
                                .receiver_phone_number &&
                                formik
                                     .errors
                                     .receiver_phone_number && (
                                     <span className="errorText">
                                          {
                                               formik
                                                    .errors
                                                    .receiver_phone_number
                                          }
                                     </span>
                                )}
                      </InputWrapper>
                      <InputWrapper>
                           <div className="input-group">
                                <Icon icon="uil:location-pin-alt" />
                                <input
                                     className={
                                          formik
                                               .touched
                                               .receiver_address &&
                                          formik
                                               .errors
                                               .receiver_address
                                               ? "error description"
                                               : "description"
                                     }
                                     type="text"
                                     name="receiver_address"
                                     id="receiver_address"
                                     placeholder="Enter receiver's address"
                                     value={
                                          formik
                                               .values
                                               .receiver_address
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
                                .receiver_address &&
                                formik
                                     .errors
                                     .receiver_address && (
                                     <span className="errorText">
                                          {
                                               formik
                                                    .errors
                                                    .receiver_address
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
                                     placeholder="Enter list of items to be sent to the receiver (not more than 100 characters)"
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
                           Send
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
       </SendFormStyles>
  );
}

export default SendForm;
