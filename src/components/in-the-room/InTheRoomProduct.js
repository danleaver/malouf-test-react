import styled from '@emotion/styled/macro';

const InTheRoomProduct = ({title, price}) => (
  <StyledProduct>
    <ProductContainer>
      <Grey>
      </Grey>
      <ProductRight>
        <div>
          {title} 
        </div>
        <StyledP style={{fontStyle: price && price.split("")[0] === "V" &&  "italic" }}>
          {price}
        </StyledP>
      </ProductRight>
    </ProductContainer>
  </StyledProduct>
)

const Grey = styled.div`
  height: 75px;
  width: 90px;
  background: #c4c4c4;
  flex-shrink: 0;
`

const StyledP = styled.p`
  font-family: "Geograph";
`

const ProductContainer = styled.div`
  display: flex;
`

const ProductRight = styled.div`
  padding: 0 1.5rem; 
  display: flex; 
  flex-direction: column;
  text-align: left; 
  height: 80px; 
  justify-content: space-between; 
  @media (max-width: 767px) {
    flex-shrink: 0;
  }

   @media (max-width: 500px) {
     & > div { width: 200px }
  }
`

const StyledProduct = styled.div`
  padding: 1rem;
  background: #1f1f1f;
  color: white;
  width: 50%;
  cursor: pointer;
  
  @media (min-width: 834px) {
    max-width: calc(33.33% - 2rem - 2px);
    min-width: calc(50% - 2rem - 2px);
    border: 1px solid white; 
  }

  @media (min-width: 1152px) {
    max-width: calc(25% - 2rem - 2px);
    min-width: calc(33.33% - 2rem - 2px);
  }

  @media (min-width: 1440px) {
    min-width: calc(25% - 2rem - 2px);
  }
`

export default InTheRoomProduct
