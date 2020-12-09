

const BestSellers = () => (
  <div className="best-sellers">
    <div className="best-sellers-container">
      <div className="best-sellers-title">
        BEST SELLERS
        <div className="best-sellers-subtitle">
          With gel, PCM, and zoned ventilation options we have the pillows to help you have a cooler, more com fortable sleep all night long. 
        </div>
      </div>
      <div className="best-sellers-products">
        { [...Array(4)].map( item=> (
          <div className="best-sellers-product">
            <img alt="best seller" height="200px" src="assets/bestsellers/bestsellers.png" />
            <div className="best-sellers-product-info">
              <div className="best">
                Shoulder Zoned Dough® + Bamboo Charcoal Pillow 
              </div>
              <div>
                $115.99
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default BestSellers
