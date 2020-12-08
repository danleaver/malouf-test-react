import { useState } from 'react';
import styled from '@emotion/styled/macro';

const products = [
  { title: "Blackwell headboard", price: "$856.99" },
  { title: "Hennesy Platform Bed Base", price: "$856.99" },
  { title: "M555 Adjustable Base", price: "$856.99" },
  { title: "Gel Memory Foam Hybrid mattress", price: "View on Wellsville" },
  { title: "Tencenl Sheet Set", price: "$856.99" },
  { title: "Gel ActiveDough Pillow", price: "$856.99" },
  { title: "Tenon Nightstand", price: "View on SaltFlat" },
  { title: "Tenon Dresser", price: "View on SaltFlat" },
]

const InTheRoom = () => {
  const [ open, setOpen ] = useState(false);

  return (
  
    <Greyspace>
      <Wrapper>
        <Menu onClick={() => setOpen(!open)}>
          SHOP PRODUCTS IN THE ROOM
          <Icon open={open} />
        </Menu>
        {/* mobile */}
        { open && 
          <List>
            {products.map( product => (
              <Product {...product}/>
            ))}
          </List>
        }
      </Wrapper>
      {/* min width 768px */}
      <ListMain>
        <ProductsContainer>
          {open && 
            <>
              {products.map( product => (
                <Product {...product} />
              ))}
            </>
          }
        </ProductsContainer>
      </ListMain>
    </Greyspace>
  )
}

const Product = ({title, price}) => {

  return (
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
  
}
export default InTheRoom

const Greyspace = styled.div`
  background: #c4c4c4;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  @media (min-width: 834px) {
 
      margin: 1.5rem;
    
  }
  
  @media(min-width: 1024px) {

      margin: 4.5rem;
    
  }
`

const Wrapper = styled.div`
  background: #1f1f1f;
  color: white;
  text-align: center;
  font-family: "Geograph-500";
  padding: 0.5rem 1rem ;
  margin: 0.75rem 0;
  width: calc(100% - 1.75rem);
  font-size: 14px;
  letter-spacing: 1.5px;

  @media (min-width: 834px) {
    margin: 0;
    padding: 0;
    background: #c4c4c4;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  @media (min-width: 834px) {
    background: #1f1f1f;
    display: flex;
    justify-content: center;
    width: 300px;
    padding: 2rem;
  }
`

const Icon = styled.div`
  background: url(./assets/SVG/products-room-close.svg) center no-repeat;
  background-size: cover;
  margin-left: 0.5rem;
  height: 26px;
  width: 26px;
  transition: transform 0.8s;
  ${props => props.open && "transform: rotateX(180deg);"}
`


const List = styled.div`
  @media(min-width: 834px) {display: none;}
  font-family: "Geograph-Bold";
` 


const ListMain = styled.div`
  font-family: "Geograph-Bold";
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  @media (max-width: 833px) { 
    display: none;
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


const Grey = styled.div`
  height: 75px;
  width: 90px;
  background: #c4c4c4;
  flex-shrink: 0;
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

const StyledP = styled.p`
  font-family: "Geograph";
`


const ProductContainer = styled.div`
  display: flex;
`


const ProductsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  background: #1f1f1f;

  @media(min-width: 834px) {
    justify-content: flex-start;
  }
  `

