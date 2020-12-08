import { useState } from 'react';

const products = [
  { title: "testing", price: "$809.99" },
  { title: "testing", price: "$809.99" },
  { title: "testing", price: "$809.99" },
  { title: "testing", price: "$809.99" },
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
              {[ ...Array(6)].map( product => (
                <Product />
              ))}
            </>
          }
        </div>
      </div>
    </div>
  )
}

const Product = (props) => {

  return (
    <div className="products-in-the-room-product">
      <div className="products-in-the-room-product-container">
        <div className="products-in-the-room-product-gray">
        </div>
        <div className="products-in-the-room-product-right">
          <div>
            Testing 
          </div>
          <div>
            $809.99
          </div>
        </div>
      </div>
    </div>
  )
  
}
export default InTheRoom