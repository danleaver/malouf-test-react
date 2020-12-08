import styled from '@emotion/styled/macro'
import accessoptions from '../assets/access/accessoptions.png'
import { useState, useRef, useEffect, ReactDOM } from 'react';

const AccessSettings = (props) => {
  const [ showAccess, setShowAccess ] = useState(true);
  const accessRef = useRef()
  const [ toastAlert, setToastAlert ] = useState(false)

  useEffect(() => {
    console.log("the ref", accessRef)
    accessRef.current && focusDiv()
  }, [props.tabAccessPopUp])

  function focusDiv() {
    accessRef.current.focus();
  }

  const showToastAlert = () => {

    setToastAlert(true)
    setTimeout( () => {
      setToastAlert(false)
    }, 4000)
  }
  const toggleTabNav = () => {
    if (props.tabAccess === false) {
      props.setTabAccessPopUp(true)
    } else if (props.tabAccessPopUp === true) {
      props.setTabAccessPopUp(false)
      props.setTabAccess(false)
    } else {
      props.setTabAccess(false)
      props.setTabAccessPopUp(false)
      showToastAlert()
    }
  }
  return (
    <>
    { toastAlert && 
     <EnableTab>
        <h3>
          Keyboard Navigation Disabled
        </h3>
        <p>Press Tab To Enable</p>
      </EnableTab>}
    {props.tabAccessPopUp &&
      <EnableTab 
        ref={accessRef}
        tabIndex="99"
        onBlur={() => props.setTabAccessPopUp(false)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            props.enableTabNav()
          } else {
            props.setTabAccessPopUp(false)
          }
        }}
        onKeyDown={(e) => {
          if ((e.key === "Escape") || (e.key === "Tab")) {
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
    <Settings  showAccess={showAccess}>
      <Hide onClick={() => setShowAccess(!showAccess)}> {!showAccess ? "Unhide" : "Hide"}</Hide>
      <img onClick={() => toggleTabNav()} alt="enable Keyboard Navigation" src={accessoptions} height="60px" />
    </Settings>
    </>
  )
}

const EnableTab = styled.div`
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.5);
  width: 300px;
  height: 100px;
  position: fixed;
  top: 105px;
  left: 30px;
  text-align: center;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-bewteen;
  align-items: center;
  
  &:focus {
    border: 4px dashed red;
  }

  z-index: 9999;
`


const Settings = styled.div`
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