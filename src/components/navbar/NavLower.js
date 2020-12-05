/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import chevDown from '../../assets/nav-main/chev-down.svg'
import { useContext, useState } from 'react';
import { ConfigContext } from '../../App';

const NavLower = (props) => {
  const [ open, setOpen ] = useState(false);
  const context = useContext(ConfigContext);

  const toggleNav = () => {
    setOpen(!open)
    context.setNavOpen(!open)
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
            onClick={toggleNav}
          >
            PILLOWS
            <img height="3.82px" alt="open pillow" src={chevDown} />
            { open && 
              <div 
                css={css`
                  position: absolute;
                  min-width: 400px;
                  left: 0;
                  top: 60px;
                  width: 609px;
                  height: 393px;
                  border: 1px solid red;
                  background: white;
                  margin: -2rem;
                `}
              >
                HELLL O OPEN NAV
                <div>MEMORY FOAM</div>
                <div>ACTIVEDOUGH</div>
                <div>LATEX</div>
                <div>FILLED</div>
                <div>COOLING</div>
                <div>INFUSIONS</div>
                <div>UNIQUE SHAPES</div>
                <div>TRAVEL</div>
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

export default NavLower