import React, {useState} from 'react'
import Header from '../components/Header'
import Home from '../components/Home'
import styled from 'styled-components'
import MobileHeader from '../components/MobileHeader'


const LandingStyles = styled.div`
  position: relative;
  background-color: #EBEFF2;
`

function LandingPage() {

  const [showMenu, setShowMenu] = useState(false)

 const handleShowMenu = () => {
    setShowMenu(!showMenu)
    //  ('click', showMenu)
  }
  return (
   <LandingStyles>
    <MobileHeader className={showMenu ? 'open' : ''} />
    <Header onClick={handleShowMenu}/>
    <Home />
    </LandingStyles>
    
  )
}

export default LandingPage