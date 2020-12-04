const ProductCategories = () => (
  <>
    <div className="product-categories">
      <div className="product-categories-flexcenter">
        <div className="product-categories-title">
          Product Categories
        </div>
        <div className="product-categories-product">
          <img src="./assets/product-categories/furniture.png" />
        </div>
        <div className="product-categories-product">
          <img src="./assets/product-categories/furniture2.png" />
        </div>
        <div className="product-categories-product">
          <img src="./assets/product-categories/furniture3.png" />
        </div>
        <div className="product-categories-next-product">
          <img src="./assets/product-categories/furniture2.png" />
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
    </div>
  </>
)

export default ProductCategories