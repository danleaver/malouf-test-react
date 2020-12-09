import styled from '@emotion/styled'
import BestSellers from './components/BestSellers';
import Hero from './components/hero/Hero';
import InTheRoom from './components/in-the-room/InTheRoom';
import Navbar from './components/navbar/Navbar';
import ProductCategories from './components/product-categories/ProductCategories';
import Reviews from './components/reviews/Reviews';
import SleepPurpose from './components/SleepPurpose';
import Sponsors from './components/Sponsors';
import WeUnderstand from './components/WeUnderstand';
import Footer from './components/footer/Footer';
import { createContext, useState, useRef, useEffect} from 'react';
import AccessSettings from './components/AccessSettings';

export const ConfigContext = createContext()

const App = () => {
  const [ navOpen, setNavOpen ] = useState(false);
  const [ tabAccess, setTabAccess ] = useState(false)
  const [ tabAccessPopUp, setTabAccessPopUp ] = useState(false)
  const stateRef = useRef();
  const stateRefPopUp = useRef()

  stateRef.current = tabAccess 

  useEffect(() => {
    document.addEventListener("keydown", tabFunction, false)

    return () => {
      document.removeEventListener("keydown")
    }
  }, [])

  useEffect(() => {
    stateRefPopUp.current = tabAccessPopUp
  }, [tabAccessPopUp] )

  const enableTabNav = () => {
    setTabAccess(true)
    setTabAccessPopUp(false)
  }

  const tabFunction = (e) => {  
    if (e.key === "Tab" && stateRefPopUp.current) {
      setTabAccessPopUp(false)
    } else if (e.key === "Tab" && !stateRef.current) {
      setTabAccessPopUp(true)
    }
  }

  const configValue = { navOpen, setNavOpen }

  return (
    <ConfigContext.Provider value={configValue}>
      <GlobalStyles tabAccess={tabAccess}>
        <Navbar />
        <Hero />
        <WeUnderstand />
        <ProductCategories />   
        <SleepPurpose />
        <BestSellers />
        <InTheRoom />
        <Reviews />
        <Sponsors />
        <Footer />
        <AccessSettings tabAccess={tabAccess} setTabAccess={setTabAccess} enableTabNav={enableTabNav} setTabAccessPopUp={setTabAccessPopUp} tabAccessPopUp={tabAccessPopUp}/>
      </GlobalStyles>
    </ConfigContext.Provider>
  )
}

const GlobalStyles = styled.div`
  div:focus {
    outline: none;
  }

  a:focus {
    outline: none;
  }

  nav:focus {
    outline: none
  }

  ${props => props.tabAccess && `
    div:focus {
      outline: 4px dashed red;
    }

    a:focus {
      outline: 4px dashed red;
    }

    nav:focus {
      outline: 4px dashed red;
    }
  `}
`

export default App
