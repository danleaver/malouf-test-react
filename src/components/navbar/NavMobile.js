import { useState } from "react";
import MenuItem from './MenuItem';
import furniture from '../../assets/nav-mobile/SVG/furniture.svg';
import bedding from '../../assets/nav-mobile/SVG/bedding.svg';
import bases from '../../assets/nav-mobile/SVG/bases.svg';
import pillows from '../../assets/nav-mobile/SVG/pillows.svg';
import protectors from '../../assets/nav-mobile/SVG/protectors.svg';
import mattressToppers from '../../assets/nav-mobile/SVG/mattress-toppers.svg';
import wholesale from '../../assets/nav-mobile/SVG/wholesale.svg';
import retailer from '../../assets/nav-mobile/SVG/retailer.svg';

const categories = [
  { name: "FURNITURE", image: furniture, expands: false, },
  { name: "BASES", image: bases, expands: true, },
  { name: "BEDDING", image: bedding, expands: true, },
  { name: "PILLOWS", image: pillows, expands: true, },
  { name: "PROTECTORS", image: protectors, expands: false, },
  { name: "MATTRESS TOPPERS", image: mattressToppers, expands: false, },
]

const lower = [
  { name: "WHOLESALE", image: wholesale, expands: true, },
  { name: "RETAILER LOGIN", image: retailer, expands: false, },
]

const NavMobile = (props) => {
  const [ subOpen, setSubOpen ] = useState(false);
  const [ open, setOpen ] = useState({
    BASES: false,
    BEDDING: false,
    PILLOWS: false,
    WHOLESALE: false,
  });

  const openSubMenu = (name) => {
    if (name === false || open[name] === true) {
      setSubOpen(false) 
      setOpen({
        BASES: false,
        BEDDING: false,
        PILLOWS: false,
        WHOLESALE: false,
      })
    } else {
      setOpen({
        BASES: false,
        BEDDING: false,
        PILLOWS: false,
        WHOLESALE: false,
        [name]: true,
      })
      setSubOpen(true)
    }
  }

  return (
    <div className="nav-mobile-menu">
      <div className="nav-mobile-menu-top">
        {categories.map((category, idx) => (
          <MenuItem openSubMenu={openSubMenu} open={open} subOpen={subOpen}  key={idx} category={category} />
        ))}
      </div>
      <div className="nav-mobile-menu-bottom">
        {lower.map((category, idx) => (
          <MenuItem openSubMenu={openSubMenu} open={open} subOpen={subOpen} key={idx} category={category} />
        ))}
      </div>
    </div>
  )
}

export default NavMobile
