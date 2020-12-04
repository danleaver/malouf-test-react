/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled'
import { useState } from "react";

const categories = [
  "FURNITURE", "BASES", "BEDDING", "PILLOWS", "PROTECTORS", "MATTRESS TOPPERS",
]

const lower = ["WHOLESALE", "RETAILER LOGIN"]

const NavMobile = (props) => {
  const [ open, setOpen ] = useState(false);
  
  return (
    <>
      <div className="nav-mobile-menu">
        <div className="nav-mobile-menu-top">
          {categories.map(category => (
            <NavMobileMenuItem open={open}>  
              <NavMobileMenuItem open={open}> 
                <div className="nav-mobile-menu-item-icon">
                  <img width="25px" src="assets/nav-mobile/furniture.svg" />
                </div>
                { !open &&
                  <div className="nav-mobile-menu-item-title">
                    {category}
                  </div>
                }
              </NavMobileMenuItem>
              <div />
              <div class="nav-mobile-menu-plus" onClick={() => setOpen(!open)}> + </div>
            </NavMobileMenuItem>
          ))}
        </div>
        <div className="nav-mobile-menu-bottom">
            {["WHOLESALE", "RETAILER LOGIN"].map( item => (
            <NavMobileMenuItem open={open}>  
              <NavMobileMenuItem open={open}> 
                <div className="nav-mobile-menu-item-icon">
                  <img width="25px" src="assets/nav-mobile/furniture.svg" />
                </div>
                <div className="nav-mobile-menu-item-title">
                  {item}
                </div>
              </NavMobileMenuItem>
              <div />
            </NavMobileMenuItem>              
            ))}
        </div>
        { open && 
        
          <div className="nav-mobile-expanded">
            <div className="close" onClick={() => setOpen(false)}>
              X Close
            </div>
            <div>
              <div style={{textDecoration: 'underline'}}>PILLOWS 101</div>
              <div style={{textDecoration: 'underline'}}>ALL PILLOWS</div>
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
      </div>
    </>
  )
}


const NavMobileMenuItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.8rem;
  padding-left: 0.8rem;
  ${props => props.open && "justify-content: left;"}
` 
export default NavMobile