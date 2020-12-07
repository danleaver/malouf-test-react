/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';
import { useState, useEffect, useRef } from 'react';
import bedding from '../assets/product-categories/bedding.png'
import bases from '../assets/product-categories/bases.png'
import furniture from '../assets/product-categories/furniture.png'
import matressTopper from '../assets/product-categories/matress-topper.png'
import pillows from '../assets/product-categories/pillows.png'
import protectors from '../assets/product-categories/protectors.png';
import nextCat from '../assets/product-categories/nextCatGold.svg'

const ProductCategories = () => (
  <>
    <div className="product-categories">
      <SliderMain />
    </div>
  </>
)

const pics = [
  { image: furniture, title: "FURNITURE"},
  { image: bases, title: "BASES" },
  { image: bedding, title: "BEDDING" },
  { image: pillows, title: "PILLOWS"},
  { image: protectors, title: "PROTECTORS" },
  { image: matressTopper, title: "MATTRESS TOPPERS" },
]

function SliderMain() {
  const [ indicatorTitle, setIndicatorTitle ] = useState(pics[0].title)
  const [ indicatorPos, setIndicatorPos ] = useState(1)
  const [ slidePos, setSlidePos ] = useState(1);
  const [ currentSlides, setCurrentSlides] = useState([pics[pics.length - 1], pics[0], pics[1], pics[2]])
  const mainDivRef = useRef(null) //can delete this
  const sliderRef = useRef(null)

  const [ animateInRight, setAnimateInRight ] = useState(false)
  const [ animateInLeft, setAnimateInLeft ] = useState(false)
  const [ animateOver, setAnimateOver ] = useState(false)

  const [offset, setOffset] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setOffset(sliderRef.current.offsetWidth)
    }, 500)
  }, [])

  window.onresize = () => {
    setOffset(sliderRef.current.offsetWidth)
  }


  useEffect(() => {
    let tmpPos = wrapPos(slidePos)

    // sets neighbors
    let thirdSlide = tmpPos + 1
    let nextSlide = tmpPos
    let prevSlide = tmpPos - 2

    if(tmpPos === pics.length){
      nextSlide = 0
      thirdSlide = 1
    } else if (tmpPos === 1){
      prevSlide = pics.length - 1
    }

    if (tmpPos === pics.length - 1) {
      thirdSlide = 0
    }

    setCurrentSlides([
      pics[prevSlide],
      pics[tmpPos - 1],
      pics[nextSlide],
      pics[thirdSlide]
    ])

    setSlidePos(tmpPos)
    setIndicatorPos(tmpPos)
    setAnimateOver(false)

  
    //// resets css
      let tmp = sliderRef.current.offsetWidth;

   }, [slidePos])

  useEffect(() => {
    setIndicatorTitle(pics[ wrapPos(indicatorPos)- 1 ].title)
  }, [indicatorPos])

  const wrapPos = (pos) => {
    if (pos > pics.length) {
      return 1
    } else if (pos < 1) {
      return pics.length
    }
    return pos
  }

  const nextSlide = (n) => {
    if (n === -1) {
      setAnimateInLeft(true)
    } else { 
      setAnimateInRight(true)
    }

    setIndicatorPos(slidePos + n)

    setTimeout(() => {
      setAnimateOver(true)
      setAnimateInRight(false)
      setAnimateInLeft(false)
      setSlidePos(slidePos + n)
    }, 400)
  }

  const chooseSlide = (k) => {
    if (k === slidePos - 1) {
      nextSlide(-1)
    } else if (k === slidePos + 1) {
      nextSlide(1)
    } else {
      setIndicatorPos(k)
      setSlidePos(k)
    }
  }

  return (
    <div
      css={css`
        overflow-x: hidden;

        @media (max-width: 767px) {
          margin-top: -2rem;
        }
      `}
    >
      <div
        css={css`
          position: relative;

          @media (max-width: 767px) {
             margin-bottom: -4rem;
          }
        `}
      >
        <Slider2
          offset={offset} animateOver={animateOver} animateInLeft={animateInLeft} animateInRight={animateInRight}
          css={css`
            display: flex;
            height: 80vw;
            position: relative;
            right: calc(50% + 10vw);

            @media (min-width: 768px) {
              display: none;
            }
          `}
        > 
          {currentSlides.map((slide, idx) => (
            <>              
              <div 
                ref={sliderRef}
                css={css`
                  height: 100%;
                  width: 100%;
                  display: flex;
              `}>
                <img height="100%" src={slide.image} />
                <div css={css`height: 100%; width: ${idx === 0 ? "20vw" : "10vw"} `}/>
              </div>
            </>
          ))} 
        </Slider2>
        
        <Slider 
          offset={offset} animateOver={animateOver} animateInLeft={animateInLeft} animateInRight={animateInRight}        
          ref={mainDivRef}
          css={css`
            display: flex;
            position: relative;
            right: 85%;
            height: 51vw; 
            max-height: 735px;
            @media (max-width: 767px) {
              display: none;
            }
          `}
        >
          {currentSlides.map ((slide, idx) => (
            <>              
            <div 
              ref={sliderRef}
              css={css`
                height: 100%;
                width: 100%;
                display: flex;
            `}>
              <img height="100%" src={slide.image} />
            <div //Description and Learn More Button
                css={css`
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                  padding: 7rem 5rem;
                  margin: 3rem 6rem;
                  min-width: 50rem;
               
                  max-height: 450px;
                 
                  @media (max-width: 1850px) {
                    padding: 6rem;
                    margin: 4rem 4rem 4rem 8rem;
                    min-width: 40rem;            
                  }

                  @media (max-width: 1750px) {
                    margin: 4rem;
                  }

                  @media (max-width: 1650px) {
                    min-width: 35rem;
                  }

                  @media (max-width: 1550px) {
                    min-width: 30rem;

                  }
                  @media (max-width: 1500px) {
                    padding: 5rem;
                    height: 450px;
                    min-width: 450px;
                  }

                  @media (max-width: 1400px) {
                    margin: 15rem 5rem 2rem 4rem;
                    padding: 1rem;
                    height: 300px;
                    min-width: 500px;
                  }

                  @media (max-width: 1300px) {
                    min-width: 450px;
                  }

                  @media (max-width: 1160px) {
                    margin: 12rem 5rem 2rem 4rem;
                    min-width: 400px;
                  }

                  @media (max-width: 1050px) {
                    margin: 8rem 6rem 2rem 4rem;
                    min-width: 330px;
                  }

                  @media (max-width: 950px) {
                    margin: 7rem 6rem 2rem 2rem;
                    min-width: 280px;
                  }

                  @media (max-width: 868px) {
                    margin: 7rem 4rem 2rem 2rem;
                    height: 250px;
                  }
                  
                  @media (max-width: 767px) {
                    display: none;
                  }

                `}
              >
                <div 
                  css={css`
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    width: 100%;
                  `
                }>
                <div 
                  css={css`
                    font-family: "Mercury-Text-G2";
                    font-style: italic;
                    font-size: 16px;                   
                  `}
                >
                  Product Categories
                </div>                  
                <div 
                  onClick={()=>nextSlide(1)}
                  css={css`
                    margin: 2rem 0;

                    @media (max-width: 1400px) {
                      display: none;
                    }
                  `}
                >
                  <img height="144px" alt="next category" src={nextCat}></img>
                </div>
                </div>
                <div
                  css={css`
                    font-size: 26px;
                    font-family: "Geograph-Bold";
                    line-height: 28px;
                    margin: -1.5rem 0 0;

                    @media (max-width: 1023px) {
                      font-size: 20px;
                    }  
                  `}
                >       
                  {slide.title}
                </div>
                <div
                  css={css`
                    font-family: Mercury-Text-G2;

                    @media (max-width: 1023px) {
                      max-width: 350px;
                    }

                    @media (max-width: 868px) {
                      max-width: 280px;
                    }
                  `}
                >
                  Here is copy that provides a description of this feel and material. Also brief mention of how our material is different. Here is copy that provides a description of this feel and material. Also brief mention of how our material is different. 
                </div>
                <div className="product-categories-lower-action-button">
                  Learn More &nbsp; ⟶
                </div>
              </div>
             </div>
            </>
          ))}
        </Slider>
      </div>
      {/* for tablet/desktop */}      
      <div
        css={css`
          display: flex;
          justify-content: center;
          margin: 2rem;
        `}
      >
        <div className="product-categories-slider-action-main">
          { [...Array(6)].map( (tmp, idx) => (
            <>
              <div 
                onClick={() => chooseSlide(idx + 1)}
                css={css`
                  ${(indicatorPos - 1 === idx) && "filter: none;"}
                  &:hover{
                    transform: scale(1.1);
                  }
                `}
                className="product-categories-icon"
              />
              {idx !== 5 && 
                <div className="product-categories-vert-line" />
              }
            </>
          ))}
        </div>
      </div>  
      <div className="product-categories-title">
              {/* <div> */}
          Product Categories
              {/* </div> */}
          {/* <div className="product-categories-title-spacer"></div> */}
      </div>   
      
      {/* MOBILE */}
      <div className="product-categories-mobile-wrapper">      
        {/* for mobile slider */}
        <div className="product-categories-slider-action">
          <div css={css`cursor: auto;`} className="product-categories-icon">
          </div>
          <div className="product-categories-chev-left" onClick={() => nextSlide(-1)} />
          <div 
            css={css`filter: none; cursor: auto;`}
            className="product-categories-icon"
          >
          </div>
          <div className="product-categories-chev-right" onClick={() => nextSlide(1)} />
          <div css={css`cursor: auto;`} className="product-categories-icon">
          </div>
        </div>

        {/* MOBILE title, learn more, indicators */}
        <div className="product-categories-details-lower">
          <div className="product-categories-product-title">{indicatorTitle}</div>
          <div css={css`padding: 1.5rem`}>
            <div className="product-categories-lower-action-button">
              Learn More &nbsp; ⟶
            </div>
          </div>
          <div 
            css={css`
              display: flex;
              margin: 0 0 1rem;
            `}
          >
            { [...Array(6)].map( (tmp, idx) => (
              <Indicator
                onClick={() => chooseSlide(idx + 1)}
                indicatorPos={indicatorPos} pos={idx + 1}
              /> 
              
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const Indicator = styled.div`
  background: grey;
  border-radius: 50%;
  height: 14px;
  width: 14px;
  cursor: pointer;
  margin: 0 0.25rem;
  ${props=> props.pos === props.indicatorPos && "background: #1E1e1e;"}
`
const Slider = styled.div`
  display: flex;
  align-items: flex-end;
  
  transition: transform .35s ease-in-out;
  ${props => props.animateInRight && `transform: translateX(-${props.offset}px);`}
  ${props => props.animateInLeft && `transform: translateX(+${props.offset}px);`}
  ${props => props.animateOver && "transition: none; transform: translateX(0);"}

  & img {
    @media (max-width: 1250px) {
      // transform: scale(.74);
      // height: 543;
    }

    @media (max-width: 1023px) {
      // transform: scale(.66);
    }

    @media (max-width: 767px) {
      // transform: scale(.423);
      //I should set the height here and not transform.. transform is a terrible way of doing it
    }
  }
`

const Slider2 = styled.div`
  transition: transform .35s ease-in-out;
  ${props => props.animateInRight && `transform: translateX(-${props.offset}px);`}
  ${props => props.animateInLeft && `transform: translateX(+${props.offset}px);`}
  ${props => props.animateOver && "transition: none; transform: translateX(0);"}
`

export default ProductCategories
