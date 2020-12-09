import styled from '@emotion/styled';

const Review = (props) => (
  <ReviewsWrapper>
    <StyledReview pos={props.pos}>
      <Stars>
        <img alt="star rating" height="35px" src="assets/SVG/5stars.svg" />
      </Stars>
        {props.review}
      <StyledReviewer>
        {props.customer}
      </StyledReviewer>
    </StyledReview>
  </ReviewsWrapper>
)

const ReviewsWrapper = styled.div`
  background: #1f1f1f;
  color: white;
  line-height: 30px;
  font-size: 18px;
  text-align: center;
  min-width: 50vw;
`

const Stars = styled.div`
  @media(max-width: 768px) {
    transform: scale(.9);
  }
`

const StyledReview = styled.div`
  font-family: Mercury-Text-G2;
  margin: 5rem;
  display: flex;
  flex-direction: column;
  transition: transform 0.1s ease;
  max-width: 500px;

  ${props => props.pos !== 1 && `
    cursor: pointer;
    &:hover { 
      transform: scale(1.05)
    }
  `}

  @media(max-width: 767px) {
    margin: 5rem 1rem;
  }
  @media(max-width: 400px) {
    margin: 5rem 0.5rem;
  }
  
`

const StyledReviewer = styled.div`
  padding: 2rem 0;
  font-family: "Geograph";
`

export default Review
