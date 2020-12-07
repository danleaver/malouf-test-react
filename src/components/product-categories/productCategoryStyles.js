.product-categories-details {

}

export const DetailsLower = styled.div`
  display: none;
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
`

export const TitleSpacer = styled.div` //not using
.product-categories-title-spacer {
  background: #1e1e1e;
  height: 2rem;
  width: 10rem;
  border: 1px solid lime;
  position: relative;
  /* right: -20rem; */
  z-index: 999;
  margin: 0 0 -5rem -35rem;
`

.product-categories-spacer {
  display: block;
}

.product-categories-flexcenter {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  transform: translateY(-20%);
  /* margin-top: -5rem; */
  overflow-x: hidden;
  margin-bottom: -3rem;
}

.product-categories-icon {
  background: url(./assets/product-categories/icons/furniture.svg) center no-repeat;
  background-size: cover;
  height: 50px;
  width: 53px;
  filter: opacity(35%);
  cursor: zoom-in;
  /* cursor: pointer; */
}

export const Icon = styled.div`
  background: url(./assets/product-categories/icons/furniture.svg) center no-repeat;
  background-size: cover;
  height: 50px;
  width: 53px;
  filter: opacity(35%);
  cursor: zoom-in;
`

.product-categories-chev-left {
  background: url(./assets/product-categories/chev-left.svg) center no-repeat;
  background-size: cover;
  height: 23px;
  width: 12px;
  cursor: pointer;
}

.product-categories-chev-right {
  background: url(./assets/product-categories/chev-right.svg) center no-repeat;
  background-size: cover;
  height: 23px;
  width: 12px;
  cursor: pointer;
}

.product-categories-chev-right:hover {
  transform: scale3d(10);
  
}


.product-categories-mobile-wrapper {
  /* margin: -15rem 0 15rem;  */
  
  /* z-index: 999; */
  
}
/*  ^^ this cancels the buttons */

.product-categories-next-product {
  position: fixed;
  right: -10rem;

}

.product-categories-title-main {
  font-style: italic;
}

.product-categories-slider-action {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  
}

.product-categories-slider-action-main {
  display: none;
}

export const SliderActionMain = styled.div`
  display: none;
`

.product-categories-details-lower {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 120px; */
}

.product-categories-details-main {
  display: none;

}

.product-categories-product-title {
  font-family: "Geograph-500";
  font-size: 20px;
}

export const LowerActionButton = styled.div `
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

@media (min-width: 768px) {
  .product-categories-title {
    display: none;
    margin-right: 0;
  }
  .product-categories-spacer {
    display: none;
  }
  .product-categories-details-main {
    display: block;
    padding: 2rem;
    max-width: 30vw;
  }
  .product-categories-details-lower {
    display: none;
  }

  .product-categories-flexcenter {
    justify-content: flex-start;
    align-items: center;
    margin-left: 4rem;
  }

  .product-categories-mobile-wrapper {
    display: none;
  }

  .product-categories-product {
    height: 484px;
    width: 321px;
    
  }
  .product-categories-product img {
    height: 484px;
    width: 321px;
  }

  .product-categories-next-product {
    height: 484px;
    width: 321px;
    right: -15rem;
    

  }
  .product-categories-next-product img {
    height: 484px;
    width: 321px;
  }

  .product-categories-slider-action {
    display: none;
  }

  .product-categories-slider-container {
    display: flex;
    justify-content: center;
    padding: 1rem 0 6rem 0;
  }
  .product-categories-slider-action-main {
    
    display: flex;
    width: 40rem;
    justify-content: space-between;
    align-items: center;
  }

  .product-categories-vert-line {
    width: 1px;
    height: 85px;
    background: black;
  }

  const VertLine = styled.div`
    width: 1px;
    height: 85px;
    background: black;
  `
}

@media (min-width: 1024px) {
  .product-categories {
    /* height:  */
  }
}
