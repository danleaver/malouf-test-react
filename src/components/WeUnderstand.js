import weUndertand from "../assets/we-understand/we-understand.svg"
import styled from '@emotion/styled';

const WeUnderstand = () => (
  <>
    <div className="we-understand">
      <div className="we-understand-text">
        We understand that restorative sleep requires attention and intention. That’s why we design products to maximize your health, comfort, and wellbeing. Let’s commit to purposeful sleep.
      </div>
      <div className="we-understand-lower">
        <Logo img={weUndertand} />
      </div>
    </div>
  </>
)

const Logo = styled.div`
  background: url(${props => props.img});
  margin: 3rem;
  /* padding: 3rem; */
  border-radius: 50%;
  border: 1px solid white;
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default WeUnderstand
