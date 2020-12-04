import NavUpper from "./NavUpper"
import NavLower from './NavLower';
import NavMobile from "./NavMobile";
import { useState } from "react";

const Navbar = () => {
  const [ mobileOpen, setMobileOpen ] = useState(false);

  return (
    <>
      <NavUpper />
      <NavLower mobileOpen={mobileOpen} setMobileOpen={setMobileOpen}/>
      {mobileOpen && 
        <NavMobile setMobileOpen={setMobileOpen}/>
      }
    </>
  )
}

export default Navbar