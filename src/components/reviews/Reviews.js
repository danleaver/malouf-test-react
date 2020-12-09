/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useState } from 'react';
import Review from './Review';

const reviews = [
  { review: "This is an even longer and better  customer review that informs other people that our products are the  the best they have ever had and they should buy them or else their life will suck until they give in and buy already.",
    customer: "- Pillows Yearly Report 2021"
  },
 { review: "This is a customer review that informs other people that our products are the bomb and they should buy them.",
   customer: "- Mrs. Reviewer"
 },
 { review: "What a great place to get all the things! A different review from some other customer who also loves the company and everything about it.",
   customer: "- John Johnston"
 },
]

const Reviews = () => {
  const [ slidePos, setSlidePos ] = useState(1);
  const [ currentSlides, setCurrentSlides ] = useState([reviews[0], reviews[1], reviews[2]]) 

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
          background: #1f1f1f;
        `}
      >

        { currentSlides.map( (item, pos) => (
          <div onClick={() => pickSlide(pos)}>
            <Review pos={pos} review={item.review} customer={item.customer} />
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
            <Indicator slidePos={slidePos} pos={pos} onClick={() => changeSlide(pos)} />
          ))
        }
        <Line />
      </div>
    </>
  )
}

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

const Line = styled.div`
  height: 1px;
  width: 100%;
  background: grey;
  margin: 10px;
`

export default Reviews
