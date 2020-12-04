const Navbar = () => (
  <>
    <div className="nav-upper">
      <div className="nav-upper-left">
        <div className="wellsville-logo">
          <img height="28px" src="./assets/wellsville-logo.png" />
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
    <div className="nav-lower">
      <div className="nav-lower-hamburger" onclick="toggleMobileMenu()">
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
    <div className="nav-mobile-menu">
      <div className="nav-mobile-menu-top">
        <div className="nav-mobile-menu-item">  
          <div className="nav-mobile-menu-item"> 
            <div className="nav-mobile-menu-item-icon">
              <img width="25px" src="assets/nav-mobile/furniture.svg" />
            </div>
            <div className="nav-mobile-menu-item-title">
              FURNITURE
            </div>
          </div>
          <div />
        </div>
        <div className="nav-mobile-menu-item">
          <div className="nav-mobile-menu-item"> 
            <div className="nav-mobile-menu-item-icon">
              <img width="25px" src="assets/nav-mobile/bases.svg" />
            </div>
            <div className="nav-mobile-menu-item-title">        
              BASES 
            </div>
          </div>
          <div className="nav-mobile-menu-plus"> + </div>
        </div>
        <div className="nav-mobile-menu-item">
          <div className="nav-mobile-menu-item"> 
            <div className="nav-mobile-menu-item-icon">
              <img width="25px" src="assets/nav-mobile/bases.svg" />
            </div>
            <div className="nav-mobile-menu-item-title">
              BEDDING
            </div>
          </div>
          <div className="nav-mobile-menu-plus"> + </div>
        </div>
        <div className="nav-mobile-menu-item">
          <div className="nav-mobile-menu-item"> 
            <div className="nav-mobile-menu-item-icon">
              <img width="25px" src="assets/nav-mobile/pillows.svg" />
            </div>
            <div className="nav-mobile-menu-item-title">
              PILLOWS
            </div>
          </div>
          <div className="nav-mobile-menu-plus" onclick="openPillows()"> + </div>
        </div>
        <div className="nav-mobile-menu-item">
          <div className="nav-mobile-menu-item"> 
            <div className="nav-mobile-menu-item-icon">
              <img width="25px" src="assets/nav-mobile/bases.svg" />
            </div>
            <div className="nav-mobile-menu-item-title">
              PROTECTORS
            </div>
          </div>
          <div />
        </div>
        <div className="nav-mobile-menu-item">
          <div className="nav-mobile-menu-item"> 
            <div className="nav-mobile-menu-item-icon">
              <img width="25px" src="assets/nav-mobile/bases.svg" />
            </div>
            <div className="nav-mobile-menu-item-title">
              MATTRESS TOPPERS
            </div>
          </div>
          <div />
        </div>
      </div>
      <div className="nav-mobile-menu-bottom">
        <div className="nav-mobile-menu-item">
          <div className="nav-mobile-menu-item"> 
            <div className="nav-mobile-menu-item-icon">
              <img width="25px" src="assets/nav-mobile/bases.svg" />
            </div>
            <div className="nav-mobile-menu-item-title">
              WHOLESALE
            </div>
          </div>
          <div className="nav-mobile-menu-plus">+</div>
        </div>
        <div className="nav-mobile-menu-item">
          <div className="nav-mobile-menu-item"> 
            <div className="nav-mobile-menu-item-icon">
              <img width="25px" src="assets/nav-mobile/bases.svg" />
            </div>
            <div className="nav-mobile-menu-item-title">
              RETAILER LOGIN
            </div>
          </div>
          <div />
        </div>
      </div>
      <div className="nav-mobile-expanded">
        <div className="close" onclick="toggleMobileMenu()">
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
    </div>
  </>
)

export default Navbar