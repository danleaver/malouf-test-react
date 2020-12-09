import wellsville from '../../assets/nav-main/wellsville.png'

const NavUpper = () => (
  <div className="nav-upper">
  <div className="nav-upper-left">
    <div className="wellsville-logo">
      <img height="28px" src={wellsville} />
    </div>
    <div className="salt-flat-logo">
      <img height="7px" src="./assets/salt-flat-logo.svg" />
    </div>
  </div>
  <div className="nav-upper-logo" />
  <div className="nav-upper-right">
  <div className="nav-upper-right-wholesale">
        WHOLESALE
      </div>
      RETAILER LOGIN
    </div>
  </div>
)

export default NavUpper