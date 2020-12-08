/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled'
import BestSellers from './components/BestSellers';
import Hero from './components/Hero';
import InTheRoom from './components/InTheRoom';
import Navbar from './components/navbar/Navbar';
import ProductCategories from './components/product-categories/ProductCategories';
import Reviews from './components/Reviews';
import SleepPurpose from './components/SleepPurpose';
import Sponsors from './components/Sponsors';
import WeUnderstand from './components/WeUnderstand';
import Footer from './components/Footer';
import { createContext, useCallback, useState, useRef} from 'react';
import AccessSettings from './components/AccessSettings';

export const ConfigContext = createContext()

const App = () => {
  const [ navOpen, setNavOpen ] = useState(false);
  const [ tabAccess, setTabAccess ] = useState(false)
  const [ tabAccessPopUp, setTabAccessPopUp ] = useState(false)


  const stateRef = useRef();

  stateRef.current = tabAccess

  const configValue = {
    navOpen, setNavOpen
  }


  const enableTabNav = () => {
    setTabAccess(true)
    setTabAccessPopUp(false)
  }

  const tabFunction = (e) => {  
    if(e.key === "Tab" && !stateRef.current) {
      setTabAccessPopUp(true)
    }
  }

  useState(() => {
    document.addEventListener("keydown", tabFunction, false)

    return () => {
      document.removeEventListener("keydown")
    }
  }, [])

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
        <AccessSettings enableTabNav={enableTabNav} setTabAccessPopUp={setTabAccessPopUp} tabAccessPopUp={tabAccessPopUp}/>
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