/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import styled from '@emotion/styled'; 
import chevDown from '../../assets/nav-main/chev-down.svg'
import { useContext, useState } from 'react';
import { ConfigContext } from '../../App';
import pillow from "../../assets/nav-main/pillow.png"


// const categories = [
//   { name: "FURNITURE", image: furniture, expands: false, },
//   { name: "BASES", image: bedding, expands: true, },
//   { name: "BEDDING", image: bases, expands: true, },
//   { name: "PILLOWS", image: pillows, expands: true, },
//   { name: "PROTECTORS", image: protectors, expands: false, },
//   { name: "MATTRESS TOPPERS", image: mattressToppers, expands: false, },
// ]

const NavLower = (props) => {
  const [ open, setOpen ] = useState(false);
  const context = useContext(ConfigContext);

  const toggleNav = (isOpen) => {
    setOpen(isOpen)
    context.setNavOpen(isOpen)
  }
  return (
    <>
      <div className="nav-lower">
        <div className="nav-lower-hamburger" onClick={() => props.setMobileOpen(!props.mobileOpen)}>
        </div>
        <div className="nav-lower-logo">
        </div>
        <div className="nav-lower-spacer" />
        <div className="nav-lower-categories">
          <div>
            FURNITURE
          </div>
          <div>
            BASES
          </div>
          <div>
            BEDDING
          </div>
          <div 
            css={css`
              position: relative;
              display: inline-block;
              display: flex; 
              justify-content: space-between; width: 83px; align-items: center;
            `}
            onMouseEnter={() => toggleNav(true)}
            // onMouseLeave={() => toggleNav(false)}
          >
            PILLOWS
            <img height="3.82px" alt="open pillow" src={chevDown} />
            { open && 
              <div 
                onMouseLeave={() => toggleNav(false)}
                css={css`
                  position: absolute;
                  min-width: 400px;
                  left: 0;
                  top: 25px;
                  width: calc(609px - 2rem);
                  height: calc(393px - 2rem);
                  background: white;
                  // margin: -2rem;
                  display: flex;
                  justify-content: space-between;
                  color: black;
                  padding: 1rem;
                `}
              >
                <div
                  css={css`
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    margin: 1.5rem 0rem 1.5rem 2rem;
                  `}                  
                >
                  <div>MEMORY FOAM</div>
                  <div>ACTIVEDOUGH</div>
                  <div>LATEX</div>
                  <div>FILLED</div>
                  <div>COOLING</div>
                  <div>INFUSIONS</div>
                  <div>UNIQUE SHAPES</div>
                  <div>TRAVEL</div>
                  <UnderlinedBold>PILLOWS 101</UnderlinedBold>
                  <UnderlinedBold>VIEW ALL PILLOWS</UnderlinedBold>
                </div>
                <div>
                  <img src={pillow} />
                </div>
              </div>
            }
          </div>
          <div>
            PROTECTORS
          </div>
          <div>
            MATTRESS TOPPERS
          </div>
        </div>
        <div className="nav-lower-cart">
        </div>
      </div>

    </>
  )
}

const UnderlinedBold = styled.div`
  text-decoration: underline;
  font-family: "Geograph-Bold";
`
export default NavLower