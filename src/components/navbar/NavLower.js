/** @jsxImportSource @emotion/react */

import styled from '@emotion/styled/macro'
import { css } from '@emotion/react';

import chevDown from '../../assets/nav-main/chev-down.svg'
import { useContext, useState } from 'react';
import { ConfigContext } from '../../App';
import pillow from "../../assets/nav-main/pillow.png"

const pillowsLinks = ["MEMORY FOAM", "ACTIVEDOUGH", "LATEX", "FILLED", "COOLING", "INFUSIONS", "UNIQUE SHAPES", "TRAVEL"]


const NavLower = (props) => {
  const [ open, setOpen ] = useState(false);
  const context = useContext(ConfigContext);

  const toggleNav = (isOpen) => {
    setOpen(isOpen)
    context.setNavOpen(isOpen)
  }
  
  return (
    <div className="nav-lower">
      <NavItemLeft
        tabIndex="0"
        onClick={() => props.setMobileOpen(!props.mobileOpen)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            props.setMobileOpen(!props.mobileOpen)
          }
        }}
      >
      <>
      
        <Burger open={props.mobileOpen}>
          <BurgerBun openRight={props.mobileOpen} forward={true}></BurgerBun>
            <BurgerMeat open={props.mobileOpen}></BurgerMeat>
          <BurgerBun openLeft={props.mobileOpen}></BurgerBun>
        </Burger>
      
       
      </>
      </NavItemLeft>
      <div className="nav-lower-logo">
      </div>
      <div className="nav-lower-spacer" />
      <div className="nav-lower-categories">
        <div tabIndex="0">
          FURNITURE
        </div>
        <div tabIndex="0">
          BASES
        </div>
        <div tabIndex="0">
          BEDDING
        </div>
        <div 
          tabIndex="0"
          css={css`
            position: relative;
            display: inline-block;
            display: flex; 
            justify-content: space-between; width: 83px; align-items: center;
          `}
          onMouseEnter={() => toggleNav(true)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              toggleNav(true)
            }
          }}
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
{pillowsLinks.map(link => (
  <nav tabIndex="0"> {link}</nav>
))}
                <UnderlinedBold tabIndex="0">PILLOWS 101</UnderlinedBold>
                <UnderlinedBold tabIndex="0">VIEW ALL PILLOWS</UnderlinedBold>
              </div>
              <div>
                <img src={pillow} />
              </div>
            </div>
          }
        </div>
        <div tabIndex="0">
          PROTECTORS
        </div>
        <div tabIndex="0">
          MATTRESS TOPPERS
        </div>
      </div>
      <NavItemRight >
        <div tabIndex="0" className="nav-lower-cart" />
      </NavItemRight>
    </div>
  )
}

const UnderlinedBold = styled.div`
  text-decoration: underline;
  font-family: "Geograph-Bold";
`



const BurgerBun = styled.div`
  background: white;
  height: 1px;
  width: 19px;
  transition: 0.3s linear;
  ${props => props.openRight && "transform-origin: left top; transform: rotate(45deg); width: 26px;" }
  ${props => props.openLeft && "transform-origin: left bottom; transform: rotate(-45deg); width: 26px;" }
  
`

const NavItemLeft = styled.div`
  width: 50px;

  @media (min-width 768px) {
    display: none;
  }
`

const NavItemRight = styled.div`
  width: 50px;
`

const Burger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 19px;
  cursor: pointer;

  ${props => !props.open && 
    `
      &:hover > div {
        width: 30px;  
      }
    `
  }

  @media (min-width: 1024px) {
    display: none;
  }
`

const BurgerMeat = styled.div`
  background: white;
  height: 1px;
  width: 27px;
  transition: 0.5s ease;
  
  ${props => props.open && "width: 0px;"}

`

export default NavLower