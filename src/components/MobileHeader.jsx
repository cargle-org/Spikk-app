import React from 'react'
import logo from '../assets/SVG/Logo.svg'
import arrdwn from '../assets/SVG/ArrowDown.svg'
import { NavLink, Link } from 'react-router-dom'
import styled from 'styled-components'
import { StyledButtonLinks } from '../atoms/StyledButtons'

const MHStyles = styled.div`
padding:  2rem 1rem;
background-color: #EBEFF2; 
height: 100vh;
width: 75%;
display: flex;
flex-direction: column;
align-items: center;
position: absolute;
z-index: 10;
transform: translateX(-1000px);
transition: all 500ms ease-in;
&.open{
    transform: translateX(0px) 
}
.logo-group{
    display: flex;
    justify-content: center;
    align-item:center;
    img{
      width: 50px;
      height: auto;
    }
  }

  .header-links{
    margin-top: 100px;
    .navigation{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        .nav-link{
            margin: .5rem auto;
        }
        div{
          margin-top: 0.7rem;
            a{
              padding: .3rem 1rem;
              font-size: .9rem;
              font-weight: 600;
              img{
                width: 10px;
                margin-top: 0.2rem;
              }
            }
        }
    }
  }
@media (min-width: 660.98px){
    display: none;
}
`

function MobileHeader(props) {
  return (
   <MHStyles className={props.className}>
     <Link to='/' className='logo-group'>
      <img src={logo} alt="logo" />
    </Link>
    <div className='header-links'>  
    <div className='navigation'>
      <NavLink className='nav-link' to="/">Home</NavLink>
      <NavLink className='nav-link'to="/About">About</NavLink>
        <StyledButtonLinks className='header-btn'>
          <Link to="/Post"> Get Started <img src={arrdwn} alt="icon" /></Link>
        </StyledButtonLinks>
    </div>
    </div>
   </MHStyles>
  )
}

export default MobileHeader