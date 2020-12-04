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
    <SliderMain />
    {/* <div className="product-categories">
      <div className="product-categories-flexcenter">
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
      </div>      
      <div className="product-categories-details-lower">
        <div className="product-categories-product-title">FURNITURE</div>
        <div className="product-categories-lower-action-button">
          Learn More &nbsp; ⟶
        </div>
        <div> Indicator </div>
      </div>
    </div> */}
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

    setCurrentSlides([
      pics[prevSlide],
      pics[tmpPos - 1],
      pics[nextSlide]
    ])

    setSlidePos(tmpPos)
    setAnimateOver(false)
   
    //resets css
    let tmp = mainDivRef.current.offsetWidth
    console.log("offsetWidth:" ,  tmp)
    console.log("innderwidth: ", window.innerWidth)
    console.log(sliderRef)
  }, [slidePos])

  const nextSlide = (n) => {
    if (n === -1) {
      setAnimateInLeft(true)
    } else { 
      setAnimateInRight(true)
    }

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
      setSlidePos(k)
    }
  }

  return (
    <div
      css={css`
        overflow-x: hidden;
        margin-top: -13%;
        
        
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
          `}
        >
          {currentSlides.map ((slide) => (
            <Slider animateOver={animateOver} animateInLeft={animateInLeft} animateInRight={animateInRight}>
              <img alt="curr" src={slide.image}></img>
              <div 
                css={css`
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                  padding: 5rem;
                  margin: 5rem 5rem 5rem 5rem;
                  max-width: 400px;
                  height: 400px;
                  
              

                  @media (max-width: 1250px) {
                    margin: 3rem;
                    padding: 1rem;
                  }

                  @media (max-width: 1000px) {
                    margin: 3rem;
                    margin-bottom: 4rem;
                    // padding: 2rem;
                    
                   
                  }

                  @media (max-width: 875px){
                    margin: 1rem;
                    padding: 1rem;
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
                <div onClick={()=>nextSlide(1)}>
                  <img height="144px" src={nextCat}></img>
                </div>
                </div>
                <div
                  css={css`
                    font-size: 26px;
                    font-family: "Geograph-500";
                    line-height: 28px;
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
      <div>
        <button onClick={() => nextSlide(-1)}>Previous</button>
        <button onClick={() => nextSlide(1)}>Next</button>
        <button onClick={() => chooseSlide(1)}>1</button>
        <button onClick={() => chooseSlide(2)}>2</button>
        <button onClick={() => chooseSlide(3)}>3</button>
        <button onClick={() => chooseSlide(4)}>4</button>
        <button onClick={() => chooseSlide(5)}>5</button>
        <button onClick={() => chooseSlide(6)}>6</button>
      </div>
    </div>
  );
}

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

    @media (max-width: 768px) {
      transform: scale(.423)
    }
  }
`

export default ProductCategories
