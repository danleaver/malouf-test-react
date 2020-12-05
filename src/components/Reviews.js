/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';
import { useState } from 'react';

const reviews = [
 { review: "This is a customer review that informs other people that our products are the bomb and they should buy them.",
   customer: "- Mrs. Reviewer"
 },
 { review: "A different review from some other customer who also loves the company and everything about it.",
   customer: "- John Johnston"
 },
 { review: "This is an even longer and better  customer review that informs other people that our products are the  the best they have ever had and they should buy them or else their life will suck until they give in and buy already.",
   customer: "- Pillows Yearly Report 2021"
 },
]

const Reviews = () => {
  const [ slidePos, setSlidePos ] = useState(1);
  const [ currentSlides, setCurrentSlides ] = useState([reviews[0], reviews[1], reviews[2]]) 


  // This badly needs to be refactored, but oh well.
  const changeSlide = (index) => {
    switch (index) {
      case 0:
        setSlides(0)
      break;
      case 1:
        setSlides(1)
      break;
      default:
        setSlides(2)
    }
  }

  const pickSlide = (index) => {
    switch (index) {
      case 0:
        switch (slidePos) {
          case 0:
            setSlides(2)
            break;
          case 1:
            setSlides(0)
            break;
          default:
            setSlides(1)
          break;
        }
      break;
      case 2:
        switch (slidePos) {
          case 0:
            setSlides(1)
            break;
          case 1:
            setSlides(2)
            break;
          default:
            setSlides(0)
          break;
        }
      break;
      default:
        return
    }
  }

  const setSlides = (pos) => {
    if (pos === 0) {
      setCurrentSlides([reviews[2], reviews[0], reviews[1]])  
      setSlidePos(0)
    } else if (pos === 1) {
      setCurrentSlides([reviews[0], reviews[1], reviews[2]])
      setSlidePos(1)
    } else {
      setCurrentSlides([reviews[1], reviews[2], reviews[0]])
      setSlidePos(2)
    }
  }
  return (
    <>
      <div 
        css={css`
          display: flex;
          justify-content: center;
          overflow-x: hidden;
          // width: 100%;
          background: #1f1f1f;
        `}
      >

        { currentSlides.map( (item, pos) => (
          <div onClick={() => pickSlide(pos)}>
            <Review review={item.review} customer={item.customer} />
          </div>
        ))}
      </div>
      <div 
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          background: #1e1e1e;
        `}
      >
        <Line />
        { 
          [...Array(3)].map( (tmp, pos) => (
            <Indicator slidePos={slidePos} pos={pos} onClick={() => changeSlide(pos)}> </Indicator>
          ))
        }
        <Line />
      </div>
    </>
  )
}


const Review = (props) => (
  <div 
    className="reviews"
  >
    <div className="review">
      <div>
        <img height="35px" src="assets/SVG/5stars.svg" />
      </div>
        {props.review}
      <div className="reviewer">
        {props.customer}
      </div>
    </div>
  </div>
)

const Line = styled.div`
  height: 1px;
  width: 100%;
  background: grey;
  margin: 10px;
`
const Indicator = styled.div`
  background: grey;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  margin: 10px;
  flex-shrink: 0;
  ${props=> props.pos === props.slidePos && "background: white"};
  cursor: pointer;
`

export default Reviews