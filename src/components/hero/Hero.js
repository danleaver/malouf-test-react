

import cat from '../../assets/hero/cat.png'
import catNext from '../../assets/hero/cat-next.png'
import main from '../../assets/hero/main.png'
import mainNext from '../../assets/hero/main-next.png'
import monday from '../../assets/hero/monday.png'
import mondayNext from '../../assets/hero/monday-next.png'
import white from '../../assets/hero/white.png'
import whiteNext from '../../assets/hero/white-next.png'
import { useContext, useState } from 'react';
import { ConfigContext } from '../../App';
import HeroImage from './HeroImage';

const heroSliders = [
  { title: "GODFREY DESIGNER BED", details: "Place Holder For The Message Pertaining To The Image Above", image: main, imageNext: catNext, nextTitle:  "M555 ADJUSTABLE BED BASE"},
  { title: "M555 ADJUSTABLE BED BASE", details: "Why Don't You Try Sleeping On One Of Our Amazing Bases? ", image: cat, imageNext: whiteNext, nextTitle: "K275 ORGANIC COTTON PILLOWS" },
  { title: "K275 ORGANIC COTTON PILLOWS", details: "When It Comes To Sleep, Finding A Great Pillow Can Be Challenging", image: white, imageNext: mondayNext, nextTitle: "THANKS FOR VIEWING MY SITE" },
  { title: "THANKS FOR VIEWING MY SITE", details: "I learned quite a lot building this website. It was challenging and fun", image: monday, imageNext: mainNext, nextTitle: "GODFREY DESIGNER BED" },
]

const Hero = () => {
  const [ curSlide, setCurSlide ] = useState(0);
  const context = useContext(ConfigContext);

  const nextSlide = (n) => {
    let k = curSlide + n

    if (k > heroSliders.length - 1) {
      k = 0 
    } else if (k < 0) {
      k = heroSliders.length - 1
    }  

    setCurSlide(k)
  }

  return (
    <>
      <div style={{padding: '2.5rem'}} /> 
      <div className="hero">
        <div className="hero-slider">
          {heroSliders.map((heroSlider, idx) => (
            <HeroImage key={idx} navOpen={context.navOpen} nextSlide={nextSlide} curSlide={curSlide} idx={idx} {...heroSlider}/>
          ))}
        </div>
      </div>
    </>
  )
}




export default Hero

