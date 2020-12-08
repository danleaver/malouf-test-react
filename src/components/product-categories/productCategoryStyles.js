import styled from '@emotion/styled'
import furniture from '../../assets/product-categories/icons/furniture.svg'
import chevLeft from '../../assets/product-categories/chev-left.svg'
import chevRight from '../../assets/product-categories/chev-right.svg'



export const ChevLeft = styled.div`
  background: url(${chevLeft}) center no-repeat;
  background-size: cover;
  height: 23px;
  width: 12px;
  cursor: pointer;
`

export const ChevRight = styled.div`
  background: url(${chevRight}) center no-repeat;
  background-size: cover;
  height: 23px;
  width: 12px;
  cursor: pointer;

  &:hover {
    transform: scale3d(10);
  }
`

export const Details = styled.div`
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
`

export const DetailsLower = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    display: none;
  }
`

export const Icon = styled.div`
  background-image: url(${furniture});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 50px;
  width: 53px;
  filter: opacity(35%);
  cursor: zoom-in;
`

export const Indicator = styled.div`
  background: grey;
  border-radius: 50%;
  height: 14px;
  width: 14px;
  cursor: pointer;
  margin: 0 0.25rem;
  ${props=> props.pos === props.indicatorPos && "background: #1E1e1e;"}
`

export const LowerActionButton = styled.div`
  background: #1e1e1e;
  width: 180px;
  height: 45px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Mercury-Text-G2";
  font-style: italic; 
`

export const ProductTitle = styled.div`
  font-family: "Geograph-500";
  font-size: 20px;
`

export const SliderAction = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  @media (min-width: 768px) {
    display: none;
  }
`

export const SliderActionMain = styled.div`
  display: flex;
  width: 40rem;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 767px) {
    display: none;
  }
`

export const Slider = styled.div`
  display: flex;
  align-items: flex-end;
  position: relative;
  right: 85%;
  height: 51vw; 
  max-height: 735px;
  transition: transform .35s ease-in-out;
  ${props => props.animateInRight && `transform: translateX(-${props.offset}px);`}
  ${props => props.animateInLeft && `transform: translateX(+${props.offset}px);`}
  ${props => props.animateOver && "transition: none; transform: translateX(0);"}
  
  @media (max-width: 767px) {
    display: none;
  }
`

export const SlidesContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`

export const SliderMobile = styled.div`
  display: flex;
  height: 80vw;
  position: relative;
  right: calc(50% + 10vw);

  @media (min-width: 768px) {
    display: none;
  }
`

export const Title = styled.div`
  transform-origin: top left;
  transform: rotate(-90deg);
  width: 12rem;
  height: 4.5rem;
  flex-shrink: 0;
  margin-bottom: 0;
  margin-left: 0rem;
  font-style: italic;
  position: relative;
  top: -6rem;
  right: -2rem;
  font-family: Mercury-Text-G2;
  display: flex;
  justify-content: space-between;
  text-align: right;
  font-size: 20px;

  @media (min-width: 768px) { 
    display: none;
    margin-right: 0;
  }
`

export const VertLine = styled.div`
  width: 1px;
  height: 85px;
  background: black;
`

export const Wrapper = styled.div`
  overflow-x: hidden;

  margin-top: -10vw;
  @media (max-width: 767px) {
    margin-top: -2rem;
  }
`

export const UpperWrapper = styled.div`
  @media (max-width: 767px) {
    margin-bottom: -4rem;
  }
`