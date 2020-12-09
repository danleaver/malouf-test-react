/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const HeroImage = (props) => (
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
              css={css`${props.navOpen && "overflow-x: hidden; visibility: hidden;"}`}
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
  
  @media (min-width: 1024px) {
    background-position: center;
    background-size: cover;
  }
`

export default HeroImage
