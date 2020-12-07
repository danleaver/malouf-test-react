/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled'
import { useState } from "react";
import furniture from '../../assets/nav-mobile/SVG/furniture.svg';
import bedding from '../../assets/nav-mobile/SVG/bedding.svg';
import bases from '../../assets/nav-mobile/SVG/bases.svg';
import pillows from '../../assets/nav-mobile/SVG/pillows.svg';
import protectors from '../../assets/nav-mobile/SVG/protectors.svg';
import mattressToppers from '../../assets/nav-mobile/SVG/mattress-toppers.svg';
import wholesale from '../../assets/nav-mobile/SVG/wholesale.svg';
import retailer from '../../assets/nav-mobile/SVG/retailer.svg';
import closeX  from '../../assets/nav-mobile/SVG/close-x.svg';
import closeX2 from '../../assets/nav-mobile/SVG/close-x2.svg'

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
    <>
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
    </>
  )
}

const MenuItem = ({openSubMenu, open, subOpen, category}) => (
  <>
    <NavMobileMenuItem
      onClick={ category.expands ? () => openSubMenu(category.name) : undefined}
      category={category} open={open} subOpen={subOpen}
    >  
      <NavMobileMenuItem
        category={category} open={open} subOpen={subOpen}
      > 
        <div className="nav-mobile-menu-item-icon">
          <CategoryIcon category={category} open={open} url={category.image}/>
        </div>
        { !subOpen &&
          <div 
            className="nav-mobile-menu-item-title"
          >
            {category.name}
          </div>   
        }
      </NavMobileMenuItem>
      <div />
      { category.expands && 
        open[category.name] === true
          ? <div class="nav-mobile-menu-plus" onClick={() => openSubMenu(category.name)}>
              { category.expands && <img src={closeX2} height="10px"/>} 
             </div>
          : <div class="nav-mobile-menu-plus" onClick={() => openSubMenu(category.name)}> { category.expands && "+" } </div>
      }
    </NavMobileMenuItem>
    { open[category.name] === true && 
      <div className="nav-mobile-expanded">
        <div css={css`display: flex; align-items: center; margin-bottom: 2.5rem;`} onClick={() => openSubMenu(false)}>
          <img src={closeX} height="19px"/> &nbsp;&nbsp;Close
        </div>
        <div>
          <p style={{textDecoration: 'underline'}}>{category.name} 101</p>
          <p style={{textDecoration: 'underline'}}>ALL {category.name}</p>
          <div className="nav-mobile-expanded-list">
            <div>MEMORY FOAM</div>
            <div>ACTIVEDOUGH</div>
            <div>LATEX</div>
            <div>FILLED</div>
            <div>COOLING</div>
            <div>INFUSIONS</div>
            <div>UNIQUE SHAPES</div>
            <div>TRAVEL</div>
          </div>
        </div>
      </div>
    }
  </>
)

const CategoryIcon = styled.div`
  background: url(${props => props.url}) center no-repeat;
  background-size: contain;
  height: 25px;
  width: 25px;
  ${props => props.open[props.category.name] && "filter: invert(1);"}
`

const NavMobileMenuItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0.5rem 0.5rem;
  
  ${props => props.subOpen && "justify-content: left;"}
  ${props => props.open[props.category.name] && "background: white; color: black;"}
  cursor: pointer;
  font-family: Geograph-500;
  font-size: 14px;
` 

export default NavMobile
