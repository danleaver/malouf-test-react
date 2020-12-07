/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';
import cat from '../assets/hero/cat.png'
import catNext from '../assets/hero/cat-next.png'
import main from '../assets/hero/main.png'
import mainNext from '../assets/hero/main-next.png'
import monday from '../assets/hero/monday.png'
import mondayNext from '../assets/hero/monday-next.png'
import white from '../assets/hero/white.png'
import whiteNext from '../assets/hero/white-next.png'
import { useContext, useState } from 'react';
import { ConfigContext } from '../App';

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
            <Image key={idx} navOpen={context.navOpen} nextSlide={nextSlide} curSlide={curSlide} idx={idx} {...heroSlider}/>
          ))}
        </div>
      </div>
    </>
  )
}

const Image = (props) => (
  <>
    { props.curSlide === props.idx && 
      <div className="hero-slide fade">
        <HeroSliderImage className="hero-slider-image" image={props.image}>
          <div className="hero-spacer" />
          <div className="hero-chev-main">
            <div className="hero-up-next" onClick={() => props.nextSlide(-1)}>
              PREVIOUS
              <img height="30px" src="assets/hero-slider/chev-right.svg" />
            </div>
            <div 
              css={css`${props.navOpen && "margin: 0 -15rem;"}`}
              className="hero-up-next-full slide-in"
            >
              <div className="hero-up-next" onClick={() => props.nextSlide(1)}>
                UP NEXT
                <img height="30px" src="assets/hero-slider/chev-left.svg" />
              </div>
              <div className="hero-up-next-full-right " onClick={() => props.nextSlide(1)}>
                <img src={props.imageNext} />
              </div>
              <div className="hero-up-next-full-right2" onClick={() => props.nextSlide(1)}>
                <p style={{fontFamily: 'Mercury-Text-G2', fontStyle: 'italic', fontSize: 14}}>
                  New
                </p>
                <div style={{fontSize: 12}}>
                  {props.nextTitle}
                </div>
              </div>
            </div>
          </div>
          <div className="hero-chev-mobile"> 
            <div 
              onClick={() => props.nextSlide(-1)}
              css={css`cursor: pointer;`}
            >
              <img height="30px" src="assets/hero-slider/chev-left.svg" />
            </div>
            <div 
              onClick={() => props.nextSlide(1)}
              css={css`cursor: pointer;`}
            >
              <img height="30px" src="assets/hero-slider/chev-right.svg" />
            </div>
          </div>
          <div className="hero-slider-bottom-wide">
            <div className="hero-slider-placeholder">
              <div className="hero-slider-placeholder-text">
                {props.details}
              </div>
            </div>
            <div className="hero-slider-action-wide">
              <img height="60px" src="assets/SVG/bed-icon.svg" />
              <div className="hero-slider-action-wide-title">
                <div>
                  {props.title}
                </div>
                <div className="hero-slider-action-wide-learn">
                  Learn More &nbsp; ⟶
                </div>
              </div>
            </div>
          </div>
        </HeroSliderImage>
        <div className="hero-slider-bottom-mobile">
          <div className="hero-slider-placeholder">
            {props.details}
          </div>
          <div className="hero-slider-container">
            <div className="hero-slider-action-mobile">
              <img height="98px" src="assets/learnmorehero.svg" />
            </div>
          </div>
        </div>
      </div>
    }
  </>
)


const HeroSliderImage = styled.div`
  background: url(${props => props.image}) left no-repeat;
  //more in index.css

  @media (min-width: 1024px) {
    background-position: center;
    background-size: cover;
  }
`


export default Hero