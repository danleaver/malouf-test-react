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

      {/* <div className="product-categories-flexcenter">
        <div className="product-categories-title">
          Product Categories
        </div>

        <div className="product-categories-details-main">
          <div className="product-categories-title-main">
            Product Categories
          </div>
          <div className="product-categories-product-title">
            FURNITURE
          </div>
          <div>
            Here is copy that provides a description of this feel and material. Also brief mention of how our material is different. Here is copy that provides a description of this feel and material. Also brief mention of how our material is different. 
          </div>
          <div className="product-categories-lower-action-button">
            Learn More &nbsp; ⟶
          </div>
        </div>
        <div className="product-categories-spacer" />
      </div>
      <div className="product-categories-slider-action">
        <div className="product-categories-icon">
        </div>
        <div className="product-categories-chev-left" onclick="nextSlide(-1)" />
        <div className="product-categories-icon">
        </div>
        <div className="product-categories-chev-right" onclick="nextSlide(1)" />
        <div className="product-categories-icon">
        </div>
      </div>
      <div className="product-categories-slider-container">
        <div className="product-categories-slider-action-main">
          <div className="product-categories-icon">
          </div>
          <div className="product-categories-vert-line">
          </div>
          <div className="product-categories-icon">
          </div>
          <div className="product-categories-vert-line">
          </div>
          <div className="product-categories-icon">
          </div>
          <div className="product-categories-vert-line">
          </div>
          <div className="product-categories-icon">
          </div>
          <div className="product-categories-vert-line">
          </div>
          <div className="product-categories-icon">
          </div>
          <div className="product-categories-vert-line">
          </div>
          <div className="product-categories-icon">
          </div>
        </div>
      </div>       */}

    </div>
  </>
)


const pics = [
  { image: furniture, title: "FURNITURE"},
  { image: bases, title: "BASES" },
  { image: bedding, title: "BEDDING" },
  { image: pillows, title: "PILLOWS"},
  { image: protectors, title: "PROTECTORS" },
  { image: matressTopper, title: "MATRESS TOPPERS" },
]

function SliderMain() {
  const [ indicatorTitle, setIndicatorTitle ] = useState(pics[0].title)
  const [ indicatorPos, setIndicatorPos ] = useState(1)
  const [ slidePos, setSlidePos ] = useState(1);
  const [ currentSlides, setCurrentSlides] = useState([pics[pics.length - 1], pics[0], pics[1]])
  const mainDivRef = useRef(null)
  const sliderRef = useRef([])

  const [ animateInRight, setAnimateInRight ] = useState(false)
  const [ animateInLeft, setAnimateInLeft ] = useState(false)
  const [ animateOver, setAnimateOver ] = useState(false)


  useEffect(() => {
    let tmpPos = slidePos

    // --for wraparoud --
    //wraps position
    if (tmpPos > pics.length) {
      tmpPos = 1
    } else if (tmpPos < 1) {
      tmpPos = pics.length
    }
    
    // sets neighbors
    let nextSlide = tmpPos
    let prevSlide = tmpPos - 2

    if(tmpPos === pics.length){
      nextSlide = 0
    } else if (tmpPos === 1){
      prevSlide = pics.length - 1
    }


    //here we should set timeout

    setCurrentSlides([
      pics[prevSlide],
      pics[tmpPos - 1],
      pics[nextSlide]
    ])

    setSlidePos(tmpPos)
    setIndicatorPos(tmpPos)
    setAnimateOver(false)
   
    //resets css
    let tmp = mainDivRef.current.offsetWidth
    console.log("offsetWidth:" ,  tmp)
    console.log("innderwidth: ", window.innerWidth)
    console.log(sliderRef)
  }, [slidePos])


  useEffect(() => {
    setIndicatorTitle(pics[indicatorPos - 1].title)
  }, [indicatorPos])

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
    }, 330)
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
        margin-top: -13%;
        @media (max-width: 1024px) {
          margin-top: -18%;
        }
        @media (max-width: 900px) {
          margin-top: -25%;
        }

        @media (max-width: 767px) {
          margin-top: -35%;
        }
        
      `}
    >
      <div
        css={css`
          position: relative;
          left: -100%;
          @media (max-width: 1250px) {
            left: -110%;
          }
          @media (max-width: 875px) {
            left: -93%;
          }
          @media (max-width: 767px) {
            left: -70%;
          }
        
        `}
      >

        <div 
          ref={mainDivRef}
          css={css`
            // background: #f6f6f6;
            display: flex;
            width: 300%;
            justify-content: center;
            @media (max-width: 875px) {
              width: 260%;
            }

            @media (max-width: 767px) {
              width: 200%;
            }
          `}
        >
          {currentSlides.map ((slide) => (
            <Slider animateOver={animateOver} animateInLeft={animateInLeft} animateInRight={animateInRight}>
              <img alt="curr" src={slide.image}></img>
              <div //Description and Learn More Button
                css={css`
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                  padding: 5rem;
                  margin: 5rem 5rem 5rem 5rem;
                  max-width: 400px;
                  height: 450px;
       
                  @media (max-width: 1250px) {
                    margin: 8rem 0rem;
                    padding: 1rem;
                    height: 300px;
                  }

                  @media (max-width: 1000px) {
                    margin: 10rem -3rem;
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
                    @media (max-width: 1250px) {
                      display: none;
                    }
                  `}
                >
                  <img height="144px" src={nextCat}></img>
                </div>
                </div>
                <div
                  css={css`
                    font-size: 26px;
                    font-family: "Geograph-500";
                    line-height: 28px;
                    margin: -1.5rem 0 0;
                  `}
                >       

                  {slide.title}
                </div>
                <div css={css`font-family: Mercury-Text-G2`}>
                  Here is copy that provides a description of this feel and material. Also brief mention of how our material is different. Here is copy that provides a description of this feel and material. Also brief mention of how our material is different. 
                </div>
                <div className="product-categories-lower-action-button">
                  Learn More &nbsp; ⟶
                </div>
              </div>
            </Slider>
          ))}
        </div>
      </div>
      <div className="product-categories-title">
          Product Categories
        </div>
      <div>

        {/* temp buttons */}
        <button onClick={() => nextSlide(-1)}>Previous</button>
        <button onClick={() => nextSlide(1)}>Next</button>
        <button onClick={() => chooseSlide(1)}>1</button>
        <button onClick={() => chooseSlide(2)}>2</button>
        <button onClick={() => chooseSlide(3)}>3</button>
        <button onClick={() => chooseSlide(4)}>4</button>
        <button onClick={() => chooseSlide(5)}>5</button>
        <button onClick={() => chooseSlide(6)}>6</button>
      </div>
      {/* for mobile */}
      <div className="product-categories-slider-action">
        <div className="product-categories-icon">
        </div>
        <div className="product-categories-chev-left" onClick={() => nextSlide(-1)} />
        <div 
          css={css`filter: none;`}
          className="product-categories-icon"
        >
        </div>
        <div className="product-categories-chev-right" onClick={() => nextSlide(1)} />
        <div className="product-categories-icon">
        </div>
      </div>
      {/* for tablet/desktop */}
      <div
        css={css`
          display: flex;
          justify-content: center;
        `}
      >
        <div className="product-categories-slider-action-main">
          { [...Array(6)].map( (tmp, idx) => (
            <>
              <div 
                onClick={() => chooseSlide(idx + 1)}
                css={css`
                  ${(indicatorPos - 1 === idx) && "filter: none;"}
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
        <div className="product-categories-details-lower">
        <div className="product-categories-product-title">{indicatorTitle}</div>
        <div className="product-categories-lower-action-button">
          Learn More &nbsp; ⟶
        </div>
        <div css={css`display: flex`}>
          { [...Array(6)].map( (tmp, idx) => (
            <Indicator indicatorPos={indicatorPos} pos={idx + 1}> </Indicator>
          ))}
        </div>
      </div>
    </div>
  );
}

const Indicator = styled.div`
  background: grey;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  ${props=> props.pos === props.indicatorPos && "background: #1E1e1e;"}
`
const Slider = styled.div`
  display: flex;
  align-items: flex-end;
  
  transition: transform .35s ease-in-out;
  ${props => props.animateInRight && `transform: translateX(-${window.innerWidth - 190}px);`}
  ${props => props.animateInLeft && `transform: translateX(+${window.innerWidth - 190}px);`}
  ${props => props.animateOver && "transition: none; transform: translateX(0);"}

  & img {
    @media (max-width: 1250px) {
      // display: none;
      transform: scale(.74);
    }

    @media (max-width: 1023px) {
      transform: scale(.66)
    }

    @media (max-width: 767px) {
      transform: scale(.423)
    }
  }
`

export default ProductCategories
