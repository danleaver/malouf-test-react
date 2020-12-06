/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import styled  from '@emotion/styled';
import bus from '../assets/sponsors/businsider.png'
import ny from '../assets/sponsors/newyork.png'
import mens from '../assets/sponsors/menshealth.svg'
import esq from '../assets/sponsors/esquire.png'

const Sponsors = () => (
  <div css={css`
    background: #1f1f1f;
    padding: 8rem 8rem;
    display: flex;
    justify-content: center;
  
    @media (max-width: 1200px) {
      padding: 4rem 4rem;
    }
    
    @media (max-width: 1023px) {
      padding: 4rem 2rem;
    }

    @media (max-width: 767px) {
      padding: 1rem 0rem;
    }
  `}
  >
    <div 
      css={css`
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        @media (max-width: 768px) {
          flex-direction: column;
        }        
      `}
    >
      <FlexContainer>
        <div 
          css={css`
            background: url(${mens}) center no-repeat;
            background-size: contain;
            height: 39px;
            width: 186px;
            margin: 0 2rem;

            @media (max-width: 767px) {
              flex-shrink: 0;
              height: 26px;
              width: 125px;
              margin: 1rem;
            }
          `}
        >
        </div>
        <div
          css={css`
            background: url(${esq}) center no-repeat;
            background-size: contain;
            height: 24px;
            width: 163px;
            margin: 0 2rem;

            @media (max-width: 767px) {
              flex-shrink: 0;
              height: 16px;
              width: 110px;
              margin: 1rem;
            }
          `}      
        >
        </div>
      </FlexContainer>
      <FlexContainer>
        <div
          css={css`
            background: url(${bus}) center no-repeat;
            background-size: contain;
            height: 81px;
            width: 179px;
            margin: 0 2rem;

            @media (max-width: 767px) {
              flex-shrink: 0;
              height: 48px;
              width: 105px;
              margin: 1rem;
            }
          `}      
        >
        </div>
        <div
          css={css`
            background: url(${ny}) center no-repeat;
            background-size: contain;
            height: 53px;
            width: 249px;
            margin: 0 2rem;

            @media (max-width: 767px) {
              flex-shrink: 0;
              height: 30px;
              width: 146px;
              margin: 1rem;
            }
          `}      
        >
        </div>
      </FlexContainer>
    </div>
  </div>
)

const FlexContainer = styled.div`
  display: flex; 
  justify-content: space-around; 
  align-items: center;
  width: 50%;
`
export default Sponsors