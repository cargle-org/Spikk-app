import React from 'react'
import topBike from '../assets/SVG/Bike 2.svg'
import topSlider from '../assets/SVG/Slider 1.svg'
import box from '../assets/SVG/Package.svg'
import cart from '../assets/SVG/Cart.svg'
import styled from 'styled-components'
import { StyledButtonLinks } from '../atoms/StyledButtons'
import { Link } from '@chakra-ui/react'
import HeroTopBanner from '../assets/Images/HeroTop.png'

const HeroTopStyles = styled.section`
    display: flex;
    align-items: center;
   .heroLeft{
    width: 50%;
    .hl-head{
        font-weight: 700;
        font-size: 2.8rem;
        margin-bottom: 1rem;
    }
    .hl-text{
        font-weight: 500;
        font-size: 1.2rem;
    }
    .slider{
        margin: 1rem 0;
    }
    .hl-buttons{
        display: flex;
        margin: 2rem 0;
        div{
            transition: 250ms all ease-in;
            a{
                margin: 0 1rem 0 0;
                text-transform: uppercase;
                font-weight: 600;
            }
            &:hover{
                transform: translateY(5px)
            }
        }
    }
   }
   .heroRight{
    margin-top: 50px;
    background: url(${HeroTopBanner});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    height: 600px;
    width: 50%;
   }
   @media (max-width: 920px){
    flex-direction: column-reverse;
    .heroLeft,.heroRight{
        width: 100%;
    }
    .heroRight{
        background-position: top;
        background-size: cover;
        margin: 0;
    }
   }

   @media (max-width: 560px){
    .heroLeft{
        .hl-head{
            font-size: 2.5rem;
        }
        .hl-buttons{
            div{
                a{
                    padding: .5rem;
                    font-size: .8rem;
                }
            }
        }
    }
   }
   @media (max-width: 375px){
    .heroLeft{
        .hl-head{
            font-size: 2.5rem;
        }
        .hl-buttons{
            div{
                a{
                    padding: .5rem;
                    font-size: .6rem;
                }
            }
        }
    }
   }
   @media (max-width: 320px){
    .heroLeft{
        .hl-head{
            font-size: 2.5rem;
        }
        .hl-buttons{
           flex-direction: column;
           div{
            a{
                margin: .5rem 0;
                padding: .5rem 1rem;
                font-size: .8rem;
            }
           }
        }
    }
   }
`

function HeroTop() {

    const goToBuy = () => {
        const Buy = document.getElementById("buy-btn").offsetTop
        console.log(Buy)
        window.scrollTo({
            top: Buy,
            left: 0,
            behavior: 'smooth'
        });
    }

    const goToSell = () => {
        const Sell = document.getElementById("send-btn").offsetTop
        console.log(Sell)
        window.scrollTo({
            top: Sell,
            left: 0,
            behavior: 'smooth'
        });
    }

  return (
    <HeroTopStyles>
        <div className="heroLeft">
            <h1 className="hl-head">Too tired to shop for groceries or make dinner?</h1>
            <p className="hl-text">Spikk has got you covered. Spikk saves you time and energy so you can relax and have us run that errand or pick up and deliver.</p>
            <img className='slider' src={topSlider} alt="icon" />
            <div className="hl-buttons">
                <StyledButtonLinks variant='primary' onClick={goToBuy}>
                    <Link to='/buy'> <img src={cart} alt="icon" />
                    Buy Anything</Link>
                </StyledButtonLinks>
                <StyledButtonLinks variant='primary' onClick={goToSell}>
                    <Link to='/send'> <img src={box} alt="" />
                     Send Anything</Link>
                </StyledButtonLinks>
            </div>
            <img src={topBike} alt="icon" />
        </div>
        <div className="heroRight"></div>
    </HeroTopStyles>
  )
}

export default HeroTop