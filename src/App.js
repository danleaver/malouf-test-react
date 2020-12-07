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
import { createContext, useState } from 'react';

export const ConfigContext = createContext()

const App = () => {
  const [ navOpen, setNavOpen ] = useState(false);

  const configValue = {
    navOpen, setNavOpen
  }

  return (
    <ConfigContext.Provider value={configValue}>
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
    </ConfigContext.Provider>
  )
}

export default App