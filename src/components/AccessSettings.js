import styled from '@emotion/styled/macro'
import { css } from '@emotion/react';
import accessoptions from '../assets/access/accessoptions.png'
import { useState, useRef } from 'react';

const AccessSettings = (props) => {
  const [ showAccess, setShowAccess ] = useState(true);
 
  return (
    <>
    {props.tabAccessPopUp &&
      <EnableTab 
        tabIndex="1"
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            props.enableTabNav()
          } else {
            props.setTabAccessPopUp(false)
          }
        }}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            props.setTabAccessPopUp(false)
          }
        }}  
      >
        <h3>
         Enable Keyboard Navigation
        </h3>
        <p>Press Enter</p>
        
      </EnableTab>
    }
    <Wrapper showAccess={showAccess}>
      <Hide onClick={() => setShowAccess(!showAccess)}> {!showAccess ? "Unhide" : "Hide"}</Hide>
      <img onClick={() => props.enableTabNav()} alt="enable Keyboard Navigation" src={accessoptions} height="60px" />
    </Wrapper>
    </>
  )
}

const EnableTab = styled.div`
  border-radius: 10px;
  background: white;
  width: 300px;
  height: 100px;
  position: fixed;
  top: 30px;
  left: 30px;
  text-align: center;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-bewteen;
  align-items: center;
  
  &:focus {
    border: 3px dotted red;
  }

  z-index: 9999;
`


const Wrapper = styled.div`
  width: 80px;
  height: 60px;
  position: fixed;
  bottom: 35px;
  right: 70px;
  cursor: pointer;
  justify-content: space-between;
  align-items: center;
  display: flex;
  transition: all 1s ease;


  ${props => !props.showAccess && "transform: translateX(80%);"}
  &:hover > span {
    visibility: visible;
    opacity: 1;
    transform: translateX(-20%);
  }

  z-index: 9999;
`

const Hide = styled.span`
  background: #0F4268;
  visibility: hidden;
  position: relative;
  right: 0px;
  color: white;
  opacity: 0;
  padding: 0.5rem 0.8rem;
  transition: all 1s ease;
  // padding-right: 1rem;
  text-align: center;
  flex-shrink: 0;
  border-radius: 15px;
  font-size: 14px;
`

export default AccessSettings