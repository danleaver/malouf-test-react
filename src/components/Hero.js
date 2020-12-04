const Hero = () => (
  <>
    <div style={{padding: '2.5rem'}} /> 
    <div className="hero">
      <div className="hero-slider">
        {/* Image 1 */}
        <div className="hero-slide fade">
          <div className="hero-slider-image">
            <div className="hero-spacer" />
            <div className="hero-chev-main">
              <div className="hero-up-next" onclick="nextHeroSlide(-1)">
                PREVIOUS
                <img height="30px" src="assets/hero-slider/chev-right.svg" />
              </div>
              <div className="hero-up-next-full">
                <div className="hero-up-next" onclick="nextHeroSlide(1)">
                  UP NEXT
                  <img height="30px" src="assets/hero-slider/chev-left.svg" />
                </div>
                <div className="hero-up-next-full-right" onclick="nextHeroSlide(1)">
                  <img src="assets/hero/cat-next.png" />
                </div>
                <div className="hero-up-next-full-right2" onclick="nextHeroSlide(1)">
                  <p style={{fontFamily: 'Mercury-Text-G2', fontStyle: 'italic', fontSize: 14}}>
                    New
                  </p>
                  <div style={{fontSize: 12}}>
                    M555 ADJUSTABLE CAT BASE
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-chev-mobile"> 
              <div onclick="nextHeroSlide(-1)">
                <img height="30px" src="assets/hero-slider/chev-left.svg" />
              </div>
              <div onclick="nextHeroSlide(1)">
                <img height="30px" src="assets/hero-slider/chev-right.svg" />
              </div>
            </div>
            <div className="hero-slider-bottom-wide">
              <div className="hero-slider-placeholder">
                <div className="hero-slider-placeholder-text">
                  When It Comes To Sleep, Finding A Great Pillow Can Be Challenging
                </div>
              </div>
              <div className="hero-slider-action-wide">
                <img height="60px" src="assets/SVG/bed-icon.svg" />
                <div className="hero-slider-action-wide-title">
                  <div>
                    GODFREY DESIGNER BED
                  </div>
                  <div className="hero-slider-action-wide-learn">
                    Learn More &nbsp; ⟶
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-slider-bottom-mobile">
            <div className="hero-slider-placeholder">
              When It Comes To Sleep, Finding 
              A Great Pillow Can Be Challenging
            </div>
            <div className="hero-slider-container">
              <div className="hero-slider-action-mobile">
                <img height="98px" src="assets/learnmorehero.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* IMAGE 2 */}
      <div className="hero-slide fade">
        <div className="hero-slider-image2">
          <div className="hero-spacer" />
          <div className="hero-chev-main">
            <div className="hero-up-next" onclick="nextHeroSlide(-1)">
              PREVIOUS
              <img height="30px" src="assets/hero-slider/chev-right.svg" />
            </div>
            <div className="hero-up-next-full">
              <div className="hero-up-next" onclick="nextHeroSlide(1)">
                UP NEXT
                <img height="30px" src="assets/hero-slider/chev-left.svg" />
              </div>
              <div className="hero-up-next-full-right" onclick="nextHeroSlide(1)">
                <img src="assets/hero/white-next.png" />
              </div>
              <div className="hero-up-next-full-right2" onclick="nextHeroSlide(1)">
                <p style={{fontFamily: 'Mercury-Text-G2', fontStyle: 'italic', fontSize: 14}}>
                  New
                </p>
                <div style={{fontSize: 12}}>
                  M555 ADJUSTABLE CAT BASE
                </div>
              </div>
            </div>
          </div>
          <div className="hero-chev-mobile"> 
            <div onclick="nextHeroSlide(-1)">
              <img height="30px" src="assets/hero-slider/chev-left.svg" />
            </div>
            <div onclick="nextHeroSlide(1)">
              <img height="30px" src="assets/hero-slider/chev-right.svg" />
            </div>
          </div>
          <div className="hero-slider-bottom-wide">
            <div className="hero-slider-placeholder">
              <div className="hero-slider-placeholder-text">
                When It Comes To Sleep, Finding A Great Pillow Can Be Challenging
              </div>
            </div>
            <div className="hero-slider-action-wide">
              <img height="60px" src="assets/SVG/bed-icon.svg" />
              <div className="hero-slider-action-wide-title">
                <div>
                  GODFREY DESIGNER BED
                </div>
                <div className="hero-slider-action-wide-learn">
                  Learn More &nbsp; ⟶
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-slider-bottom-mobile">
          <div className="hero-slider-placeholder">
            When It Comes To Sleep, Finding 
            A Great Pillow Can Be Challenging
          </div>
          <div className="hero-slider-container">
            <div className="hero-slider-action-mobile">
              <img height="98px" src="assets/learnmorehero.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Hero