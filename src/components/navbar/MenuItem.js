import styled from '@emotion/styled'
import closeX  from '../../assets/nav-mobile/SVG/close-x.svg';
import closeX2 from '../../assets/nav-mobile/SVG/close-x2.svg'

const pillowsLinks = ["MEMORY FOAM", "ACTIVEDOUGH", "LATEX", "FILLED", "COOLING", "INFUSIONS", "UNIQUE SHAPES", "TRAVEL"]

const MenuItem = ({openSubMenu, open, subOpen, category}) => (
  <>
    <NavMobileMenuItem
      tabIndex="0"  
      onClick={ category.expands ? () => openSubMenu(category.name) : undefined }
      onKeyPress={category.expands ? (e) => {
        if (e.key === 'Enter') {
           openSubMenu(category.name)
        }
      } : undefined }
      category={category} open={open} subOpen={subOpen}
    >  
      <NavMobileMenuItem category={category} open={open} subOpen={subOpen} > 
        <div className="nav-mobile-menu-item-icon">
          <CategoryIcon category={category} open={open} url={category.image}/>
        </div>
        { !subOpen &&
          <div 
            className="nav-mobile-menu-item-title"
          >
            {category.name}
          </div>   
        }
      </NavMobileMenuItem>
      <div />
      { category.expands && 
        open[category.name] === true
          ? <div
              className="nav-mobile-menu-plus" 
              onClick={() => openSubMenu(category.name)}
            >
              { category.expands && <img alt="close category" src={closeX2} height="10px"/>} 
             </div>
          : <div 
              class="nav-mobile-menu-plus" 
              onClick={() => openSubMenu(category.name)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  openSubMenu(category.name)
                }
              }}
            > 
              { category.expands && "+" } 
            </div>
      }
    </NavMobileMenuItem>
    { open[category.name] === true && 
      <div className="nav-mobile-expanded">
        <CloseButton 
          tabIndex="0" 
          onClick={() => openSubMenu(false)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              openSubMenu(false)
            }
          }}
          >
          <img src={closeX} height="19px"/> &nbsp;&nbsp;Close
        </CloseButton>
        <div>
            <a tabIndex="0">
              <p style={{textDecoration: 'underline'}}>{category.name} 101</p>
            </a>
            <a tabIndex="0">
              <p style={{textDecoration: 'underline'}}>ALL {category.name}</p>           
            </a>
          <div className="nav-mobile-expanded-list">
            {pillowsLinks.map(link => (
              <nav tabIndex="0">
                <a>
                  {link}
                </a>
              </nav>
            ))}
          </div>
        </div>
      </div>
    }
  </>
)

const CategoryIcon = styled.div`
  background: url(${props => props.url}) center no-repeat;
  background-size: contain;
  height: 25px;
  width: 25px;
  ${props => props.open[props.category.name] && "filter: invert(1);"}
`

const CloseButton = styled.div`
  display: flex; 
  align-items: center; 
  margin-bottom: 2.5rem;  
  cursor: pointer;
`

const NavMobileMenuItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0.5rem 0.5rem;
  ${props => props.subOpen && "justify-content: left;"}
  ${props => props.open[props.category.name] && "background: white; color: black;"}
  cursor: pointer;
  font-family: Geograph-500;
  font-size: 14px;
` 

export default MenuItem