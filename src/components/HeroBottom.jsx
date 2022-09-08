import React from 'react'
import bottomBike from '../assets/SVG/Bike 1.svg'
import bottomSlider from '../assets/SVG/Slider 2.svg'
import box from '../assets/SVG/Package.svg'
import cart from '../assets/SVG/Cart.svg'
import styled from 'styled-components'
import { StyledButtonLinks } from '../atoms/StyledButtons'
import { Link } from '@chakra-ui/react'
import HeroBottomBanner from '../assets/Images/HeroBottom.png'
import bg from '../assets/Images/BG.png'
import aboutbg from '../assets/Images/aboutBanner.png'
import Buy from './BuyAnything/Buy'
import Send from './SendAnything/Send'


const Background = styled.section`
    background: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
`
const HeroBottomStyles = styled.section`
    display: flex;
    align-items: center;
    .hb-left{
        margin-top: 50px;
        background: url(${HeroBottomBanner});
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        height: 600px;
        width: 50%;
       }
       .hb-right{
        width: 50%;
        .hb-head{
            font-weight: 700;
            font-size: 2.8rem;
            margin-bottom: 1rem;
        }
        .hb-text{
            font-weight: 500;
            font-size: 1.2rem;
        }
        .slider{
            margin: 1rem 0;
        }
        .hb-buttons{
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
       @media (max-width: 990px){
        flex-direction:column-reverse;
        margin: 6rem auto 3rem;
        .hb-left,.hb-right{
            width: 100%;
        }
        .hb-left{
            background-size: cover;
            background-position: top;
        }
       }
       @media (max-width:560px){
        .hb-right{
            .hb-head{
                font-size: 2.5rem;
            }
            .hb-buttons{
                div{
                    a{
                        padding: .5rem;
                        font-size: .8rem;
                    }
                }
            }
        }
       }
       @media (max-width:375px){
        .hb-right{
            .hb-head{
            }
            .hb-buttons{
                div{
                    a{
                        padding: .5rem;
                        font-size: .6rem;
                    }
                }
            }
        }
       }
       @media (max-width:320px){
        .hb-right{
            .hb-head{
            }
            .hb-buttons{
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

const AboutSpikk = styled.section`
       .about-title{
        font-size: 2rem;
        font-weight: 600;
        color: #17173F;
        width: 60%;
        text-align: center;
        margin: 2rem auto;
        line-height: 2.4rem;
       }
       .hr{
        width: 60px;
        margin: 2rem auto;
        background-color:#FBA819;
        height: 3px;
       }
       .about-subtitle1{
        width: 50%;
        text-align: center;
        margin: 1rem auto 0;
       }
       .about-subtitle2{
        width: 60%;
        text-align: center;
        margin:0 auto 2rem ;
       }
       .about-highlights{
        display: flex;
        align-items: center;
        width: 90%;
        margin: 3rem auto;
        padding: 2rem 0;
        .row1{
            text-align: right;
            .first, .second{
                margin-top: 2rem;
                .highlight-no{
                    background-color: rgba(255, 255, 255, 0.23);
                    color: black;
                    font-weight: 700;
                    width: fit-content;
                    padding: .3rem 1rem;
                    border-radius: 5px;
                    margin-left: auto;
                }
                .highlight-title{
                    font-size: 1rem;
                    font-weight: 800;
                    margin: .5rem 0;
                }
                .highlight-text{
                    width: 60%;
                    font-weight: 300;
                    font-size: .9rem;
                    margin-left: auto;
                }
            }
        }
        .row3{
            text-align: left;
            .third, .fourth{
                margin-top: 2rem;
                .highlight-nos{
                    background-color:rgba(255, 255, 255, 0.23);
                    color: black;
                    font-weight: 700;
                    width: fit-content;
                    padding: .3rem 1rem;
                    border-radius: 5px;
                    margin-right: auto;
                }
                .highlight-title{
                    font-size: 1rem;
                    font-weight: 800;
                    margin: .5rem 0;
                }
                .highlight-text{
                    width: 60%;
                    font-weight: 300;
                    font-size: .9rem;
                    margin-right: auto;
                }
            }
        }
        .row2{
            margin:0 1rem;
            background: url(${aboutbg});
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center;
            height: 550px;
            width: 100%;
        }
       }

       @media (max-width: 1200px){
        .about-highlights{
            width: 100%;
        }
       }

       @media (max-width: 920px){
        .about-highlights{
            width: 100%;
            display: flex;
            flex-direction: column;
            .row2{
                display: none;
            }
            .row1,.row3{
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                margin: 1rem auto; 
            }
            .row1{
                text-align: center;
                .first,.second{
                    width: 40%;
                    background-color: rgba(255, 255, 255, 0.9);
                    margin: 1rem;
                    padding: 2rem 1rem;
                    border-radius: 15px;
                    .highlight-no{
                        margin: 0 auto;
                        color: #FBA819;
                        font-weight: 800;
                    }
                    .highlight-text{
                        margin: .5rem auto;
                        color: #1E1E1E;
                        width: 90%;
                    }
                }
            }
            .row3{
                text-align: center;
                .third,.fourth{
                    width: 40%;
                    background-color: rgba(255, 255, 255, 0.9);
                    margin: 1rem;
                    padding: 2rem 1rem;
                    border-radius: 15px;
                    .highlight-nos{
                        margin:0 auto;
                        color: #FBA819;
                        font-weight: 800;
                    }
                    .highlight-text{
                        margin: .5rem auto;
                        color: #1E1E1E;
                        width: 90%;
                    }
                }
            }
        }
       }
       @media (max-width: 560px){
        .about-title{
            width: 100%;
        }
        .about-subtitle1{
            width: 90%;
        }
        .about-subtitle2{
            width: 95%;
        }
        .about-highlights{
            .row1{
                .first,.second{
                    width: 80%;
                }
            }
            .row3{
                .third,.fourth{
                    width: 80%;
                }
            }
        }
       }
`

function HeroBottom() {
    const goToBuy = () => {
        const Buy = document.getElementById("buy-btn").offsetTop
        console.log(Buy)
        window.scrollTo({
            top: Buy,
            left: 0,
            behavior: 'smooth'
        });
    }

    const goToSend = () => {
        const Send = document.getElementById("send-btn").offsetTop
        console.log(Send)
        window.scrollTo({
            top: Send,
            left: 0,
            behavior: 'smooth'
        });
    }
    return (
        <>
        <Background>
  <HeroBottomStyles>
    <div className="hb-left"></div>
    <div className="hb-right">
            <h1 className="hb-head">Buy and send 
            anything using Spikk</h1>
            <p className="hb-text">Spikk is an on-demand errand and delivery service that helps you purchase, pickup & deliver items.</p>
            <img className='slider' src={bottomSlider} alt="icon" />
            <div className="hb-buttons">
                <StyledButtonLinks variant='primary' onClick={goToBuy}>
                    <Link to='/buy'> <img src={cart} alt="icon" />
                    Buy Anything</Link>
                </StyledButtonLinks>
                <StyledButtonLinks variant='primary' onClick={goToSend}>
                    <Link to='/send'> <img src={box} alt="" />
                     Send Anything</Link>
                </StyledButtonLinks>
            </div>
            <img src={bottomBike} alt="icon" />
        </div>
  </HeroBottomStyles>
        <AboutSpikk id='about'>
            <h1 className="about-title">Spikk is an on-demand delivery platform that <i>delivers just anything</i> to customers.</h1>
            <div className="hr"></div>
            <p className="about-subtitle1">
            From the comfort of your home/offices, Spikk connects you to 
            dedicated shoppers that run errands and deliver top notch services.
            </p>
            <p className="about-subtitle2">
            Spikk is dedicated to empowering people, communities and making life a lot easier.</p>
            <div className="about-highlights">
                <div className="row1">
                    <div className="first">
                    <h1 className='highlight-no'>1</h1>
                    <h2 className='highlight-title'>Request/Match</h2>
                    <p className="highlight-text"> List the item(s) you want to buy or send and we will connect you to the best Pickers that run errands and deliver top notch services.
                    </p>
                    </div>
                    <div className="second"><h1 className='highlight-no'>2</h1>
                    <h2 className='highlight-title'>
                        Delivery
                    </h2>
                    <p className="highlight-text">
                    Get a real-time update on the status of your request from start to finish
                    </p>
                    </div>
                </div>
                <div className="row2"></div>
                <div className="row3">
                    <div className="third">
                    <h1 className='highlight-nos'>3</h1>
                    <h2 className='highlight-title'>
                        Payments
                    </h2>
                    <p className="highlight-text">
                    You will be given information about how to make payment either through bank transfer or paystack or flutterwave.
                    </p>
                    </div>
                    <div className="fourth">
                    <h1 className='highlight-nos'>4</h1>
                    <h2 className='highlight-title'>Rate your experience</h2>
                    <p className="highlight-text">
                    We want your next experience to be the best; let us know how we can improve our services.
                    </p>
                    </div>
                </div>
            </div>
        </AboutSpikk>
        <Buy/>
        </Background>
        <Send />
        </>
 
  )
}

export default HeroBottom