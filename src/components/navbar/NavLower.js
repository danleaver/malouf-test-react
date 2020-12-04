const NavLower = (props) => {

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
          <div>
            PILLOWS
          </div>
          <div>
            PROTECTORS
          </div>
          <div>
            MATRESS TOPPERS
          </div>
        </div>
        <div className="nav-lower-cart">
        </div>
      </div>
    </>
  )
}

export default NavLower