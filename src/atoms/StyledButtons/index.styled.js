import styled from "styled-components";

export const StyledButtonLinks = styled.div`
  display: flex;
    a{
        display: flex;
        text-decoration: none;
        color:${({variant}) => variant === "primary" ? "#FBA819" : "white"} ;
        background-color: ${({variant}) => variant === "primary" ? "transparent" : "#FBA819"};
        padding: ${({size}) => size === "sm" ? "0.5rem .8rem" : "0.7rem 2rem"};
        margin: 0 1rem  ${({size}) => size === "sm" ? " 0 .1rem " : " 0 1rem "};
        border: ${({variant}) => variant === "primary" ? "2px solid #FBA819" : "2px solid transparent"};
        border-radius: 50px;
        white-space: nowrap;
        font-size: ${({size}) => size === "sm" ? ".8rem" : "1rem"}
         ;
         cursor: pointer;
        &:hover{
            opacity: 0.8;
            border-color: #FBA819;
            text-decoration: none;
        }
        img{
            width: 13px;
            margin: 0 .7rem;
        }
    }
   
`


export const StyledButton = styled.button`
        display: flex;
        align-items: center
        justify-content: center;
        color:${({variant}) => variant === "primary" ? "#FBA819" : "white"} ;
        background-color: ${({variant}) => variant === "primary" ? "transparent" : "#FBA819"};
        padding: ${({size}) => size === "sm" ? "0.5rem .8rem" : "0.7rem 2rem"};
        margin: 1.5rem  ${({size}) => size === "sm" ? " 0 .1rem " : " 0 1rem "};
        border-radius: 50px;
        white-space: nowrap;
        border: ${({variant}) => variant === "primary" ? "2px solid #FBA819" : "2px solid transparent"};
        font-size: ${({size}) => size === "sm" ? ".8rem" : "1rem"} ;
        cursor: pointer;
        &:hover{
            opacity: 0.8;
            border-color: #FBA819;
            text-decoration: none;
        }
        img{
            margin: 0 .5rem;
        }
        p{
            margin: -.2rem 0 0 0;
            font-size: .8rem;
            font-weight: 600;
        }
`