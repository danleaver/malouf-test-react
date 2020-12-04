/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled'
import BestSellers from './components/BestSellers';
import Hero from './components/Hero';
import InTheRoom from './components/InTheRoom';
import Navbar from './components/navbar/Navbar';
import ProductCategories from './components/ProductCategories';
import Reviews from './components/Reviews';
import SleepPurpose from './components/SleepPurpose';
import Sponsors from './components/Sponsors';
import WeUnderstand from './components/WeUnderstand';
import Footer from './components/Footer';

const App = () => (
<>
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

  {/* HERO   clearfix should be 5 rem total */}

  {/* Image 3 */}
  {/* Image 4 */}
  {/* End Of Image 4 */}
 
  {/* BEST SELLERS */}
  
  

 
</>

)

export default App