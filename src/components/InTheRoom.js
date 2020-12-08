import { useState } from 'react';

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
  
    <div className="grayspace">
      <div className="products-in-the-room">
        <div className="products-in-the-room-menu" onClick={() => setOpen(!open)}>
          SHOP PRODUCTS IN THE ROOM
          <div className={ open ? "products-in-the-room-icon-open" : "products-in-the-room-icon-close"}>
          </div>
        </div>
        {/* mobile */}
        { open && 
          <div className="products-in-the-room-list">
            {[ ...Array(6)].map( product => (
              <Product />
            ))}
          </div>
        }
      </div>
      {/* min width 768px */}
      <div id="in-the-room" className="products-in-the-room-list-main">
        <div className="products-in-the-room-container">
          {open && 
            <>
              {products.map( product => (
                <Product {...product} />
              ))}
            </>
          }
        </div>
      </div>
    </div>
  )
}

const Product = ({title, price}) => {

  return (
    <div className="products-in-the-room-product">
      <div className="products-in-the-room-product-container">
        <div className="products-in-the-room-product-gray">
        </div>
        <div className="products-in-the-room-product-right">
          <div>
            {title} 
          </div>
          <p style={{fontStyle: price && price.split("")[0] === "V" &&  "italic" }}>
            {price}
          </p>
        </div>
      </div>
    </div>
  )
  
}
export default InTheRoom