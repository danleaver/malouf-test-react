/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { CenterBox, Details, Indicator, NextCategory, ProductCategoriesStyled, SlideDetails, SlideTitle, Slider, SliderMobile, SliderActionMain, SliderAction,  SlidesContainer, Title, Icon, ChevLeft, ChevRight, DetailsLower, ProductTitle, LowerActionButton, VertLine, Wrapper, UpperWrapper } from "./productCategoryStyles"
import { useState, useEffect, useRef } from 'react';
import bedding from '../../assets/product-categories/bedding.png'
import bases from '../../assets/product-categories/bases.png'
import furniture from '../../assets/product-categories/furniture.png'
import matressTopper from '../../assets/product-categories/matress-topper.png'
import pillows from '../../assets/product-categories/pillows.png'
import protectors from '../../assets/product-categories/protectors.png';
import nextCat from '../../assets/product-categories/nextCatGold.svg'

const pics = [
  { image: furniture, title: "FURNITURE"},
  { image: bases, title: "BASES" },
  { image: bedding, title: "BEDDING" },
  { image: pillows, title: "PILLOWS"},
  { image: protectors, title: "PROTECTORS" },
  { image: matressTopper, title: "MATTRESS TOPPERS" },
]

const ProductCategories = () => {
  const [ indicatorTitle, setIndicatorTitle ] = useState(pics[0].title)
  const [ indicatorPos, setIndicatorPos ] = useState(1)
  const [ slidePos, setSlidePos ] = useState(1);
  const [ currentSlides, setCurrentSlides] = useState([pics[pics.length - 1], pics[0], pics[1], pics[2]])
  const sliderRef = useRef(null)

  const [ animateInRight, setAnimateInRight ] = useState(false)
  const [ animateInLeft, setAnimateInLeft ] = useState(false)
  const [ animateOver, setAnimateOver ] = useState(false)

  const [offset, setOffset] = useState(0)
  const [ slidesRemain, setSlidesRemain ] = useState(0);
  
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
    let thirdSlide = tmpPos + 1
    let nextSlide = tmpPos
    let prevSlide = tmpPos - 2

    if(tmpPos === pics.length){
      nextSlide = 0
      thirdSlide = 1
    } else if (tmpPos === 1){
      prevSlide = pics.length - 1
    } else if (tmpPos === pics.length - 1) {
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

    let tmp = sliderRef.current.offsetWidth; 
   }, [slidePos])

  useEffect(() => {
    setIndicatorTitle(pics[ wrapPos(indicatorPos)- 1 ].title)
  }, [indicatorPos])

  useEffect(() => {
    if (animateOver === false && slidesRemain !== 0) {
        slidesRemain > 0 ? setSlidesRemain(slidesRemain - 1) : setSlidesRemain(slidesRemain + 1)
        slidesRemain > 0 ? nextSlide(1) : nextSlide(-1)
      } 
  }, [animateOver])
 
  const wrapPos = (pos) => {
    if (pos > pics.length) {
      return 1
    } else if (pos < 1) {
      return pics.length
    }
    return pos
  }

  const nextSlide = (n, mobile) => {
    if (n === -1) {
      setAnimateInLeft(true)
    } else { 
      setAnimateInRight(true)
    }

    setIndicatorPos(wrapPos(slidePos + n))

    setTimeout(() => {
      setAnimateOver(true)
      setAnimateInRight(false)
      setAnimateInLeft(false)
      setSlidePos(slidePos + n)
    }, mobile ? 0 : 400)    
  }

  const chooseSlide = (k, mobile) => {
    if (k === 1 && slidePos === pics.length) {
      nextSlide(1)
    } else if (k === pics.length && slidePos === 1 ) {
      nextSlide(-1)
    } else if (k === slidePos - 1) {
      nextSlide(-1)
    } else if (k === slidePos + 1) {
      nextSlide(1)
    } else {
      mobile ? setSlidePos(k) : multipleSlides(k)     
    }
  }

  const multipleSlides = (k) => {
    if (k - slidePos === 2) {
      advanceSlides(1, 1)
    } else if (k - slidePos === 3) {
      advanceSlides(2, 1)
    } else if (k - slidePos === -2) {
      advanceSlides(-1, -1)
    } else if (k - slidePos === -3) {
      advanceSlides(-2, -1)
    } else if (slidePos === 2 || slidePos === 1) {
      advanceSlides(-1, -1)
    } else {
      advanceSlides(1, 1)
    }
  }

  const advanceSlides = (a, b) => {
    setSlidesRemain(a)
    nextSlide(b)
  }

  return (
    <Wrapper>
      <UpperWrapper>
        <SliderMobile> 
          {currentSlides.map((slide, idx) => (           
            <SlidesContainer onClick={() => idx === 2 && nextSlide(1, true)} idx={idx}>
              <img height="100%" alt={slide.title} src={slide.image} />
              <div css={css`height: 100%; width: ${idx === 0 ? "20vw" : "10vw"} `}/>
            </SlidesContainer>
          ))} 
        </SliderMobile>
        <Slider 
          offset={offset} animateOver={animateOver} animateInLeft={animateInLeft} animateInRight={animateInRight}        
        >
          {currentSlides.map ((slide, idx) => (           
            <SlidesContainer onClick={() => idx === 2 && nextSlide(1)} idx={idx} ref={sliderRef}>
              <img height="100%" alt={slide.title} src={slide.image} />
              <Details>
                <CenterBox>
                  <ProductCategoriesStyled>
                    Product Categories
                  </ProductCategoriesStyled>                  
                  <NextCategory onClick={()=>nextSlide(1)}>
                    <img height="144px" alt="next category" src={nextCat}></img>
                  </NextCategory>
                </CenterBox>
                <SlideTitle>       
                  {slide.title}
                </SlideTitle>
                <SlideDetails              >
                  Here is copy that provides a description of this feel and material. Also brief mention of how our material is different. Here is copy that provides a description of this feel and material. Also brief mention of how our material is different. 
                </SlideDetails>
                <LowerActionButton>
                  Learn More &nbsp; ⟶
                </LowerActionButton>
              </Details>
            </SlidesContainer>
          ))}
        </Slider>     
        <div css={css`display: flex; justify-content: center; margin: 2rem;`}>
          <SliderActionMain>
            { [...Array(6)].map( (tmp, idx) => (
              <>
                <Icon 
                  onClick={() => chooseSlide(idx + 1)}
                  css={css`
                    ${(indicatorPos - 1 === idx) && "filter: none;"}
                    &:hover { transform: scale(1.1); }
                  `}
                />
                { idx !== 5 && <VertLine /> }
              </>
            ))}
          </SliderActionMain>
        </div>  
        <Title>
            Product Categories
        </Title>   
      </UpperWrapper>
      <div>      
        <SliderAction>
          <Icon css={css`cursor: auto;`} />
          <ChevLeft onClick={() => nextSlide(-1, true)} />
          <Icon css={css`filter: none; cursor: auto;`} />
          <ChevRight onClick={() => nextSlide(1, true)} />
          <Icon css={css`cursor: auto;`} />
        </SliderAction>
        <DetailsLower>
          <ProductTitle>{indicatorTitle}</ProductTitle>
          <div css={css`padding: 1.5rem`}>
            <LowerActionButton>
              Learn More &nbsp; ⟶
            </LowerActionButton>
          </div>
          <div css={css`display: flex; margin: 0 0 1rem;`}>
            { [...Array(6)].map( (tmp, idx) => (
              <Indicator
                onClick={() => chooseSlide(idx + 1, true)}
                indicatorPos={indicatorPos} pos={idx + 1}
              /> 
            ))}
          </div>
        </DetailsLower>
      </div>
    </Wrapper>
  );
}

export default ProductCategories
