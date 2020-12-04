/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled'

const App = () => (
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
  {/* HERO   clearfix should be 5 rem total */}
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
  {/* Image 3 */}
  {/* Image 4 */}
  {/* End Of Image 4 */}
  <div className="we-understand">
    We understand that restorative sleep requires attention and intention. That’s why we design products to maximize your health, comfort, and wellbeing. Let’s commit to purposeful sleep.
    <div className="we-understand-lower">
      <div className="we-understand-logo">
        M
      </div>
    </div>
  </div>
  <div className="product-categories">
    <div className="product-categories-flexcenter">
      <div className="product-categories-title">
        Product Categories
      </div>
      <div className="product-categories-product">
        <img src="./assets/product-categories/furniture.png" />
      </div>
      <div className="product-categories-product">
        <img src="./assets/product-categories/furniture2.png" />
      </div>
      <div className="product-categories-product">
        <img src="./assets/product-categories/furniture3.png" />
      </div>
      <div className="product-categories-next-product">
        <img src="./assets/product-categories/furniture2.png" />
      </div>
      <div className="product-categories-details-main">
        <div className="product-categories-title-main">
          Product Categories
        </div>
        <div className="product-categories-product-title">
          FURNITURE
        </div>
        <div>
          Here is copy that provides a description of this feel and material. Also brief mention of how our material is different. Here is copy that provides a description of this feel and material. Also brief mention of how our material is different. 
        </div>
        <div className="product-categories-lower-action-button">
          Learn More &nbsp; ⟶
        </div>
      </div>
      <div className="product-categories-spacer" />
    </div>
    <div className="product-categories-slider-action">
      <div className="product-categories-icon">
      </div>
      <div className="product-categories-chev-left" onclick="nextSlide(-1)" />
      <div className="product-categories-icon">
      </div>
      <div className="product-categories-chev-right" onclick="nextSlide(1)" />
      <div className="product-categories-icon">
      </div>
    </div>
    <div className="product-categories-slider-container">
      <div className="product-categories-slider-action-main">
        <div className="product-categories-icon">
        </div>
        <div className="product-categories-vert-line">
        </div>
        <div className="product-categories-icon">
        </div>
        <div className="product-categories-vert-line">
        </div>
        <div className="product-categories-icon">
        </div>
        <div className="product-categories-vert-line">
        </div>
        <div className="product-categories-icon">
        </div>
        <div className="product-categories-vert-line">
        </div>
        <div className="product-categories-icon">
        </div>
        <div className="product-categories-vert-line">
        </div>
        <div className="product-categories-icon">
        </div>
      </div>
    </div>      
    <div className="product-categories-details-lower">
      <div className="product-categories-product-title">FURNITURE</div>
      <div className="product-categories-lower-action-button">
        Learn More &nbsp; ⟶
      </div>
      <div> Indicator </div>
    </div>
  </div>
  <div className="sleep-purpose">
    <div className="sleep-purpose-img">
      <div className="sleep-purpose-main">
        <div className="sleep-purpose-lower-cert">
          Certified B Corporation®
        </div>
        <div className="sleep-purpose-lower-title">
          SLEEP WITH A PURPOSE
        </div>
        <div className="sleep-purpose-lower-body">
          When you’re refreshed and invigorated by great sleep, you can take on the world. Let’s do it together. As a Certified B Corporation®, we work every day to build a healthier planet and positively impact people. Your purchase directly funds our work fighting child sexual exploitation through the Malouf Foundation™.
        </div>
        <div className="sleep-purpose-lower-action">
          <div className="sleep-purpose-lower-action-btn">
            Learn More &nbsp; ⟶
          </div>
        </div>
      </div>
    </div>
    {/* mobile */}
    <div className="sleep-purpose-lower">
      <div className="sleep-purpose-lower-cert">
        Certified B Corporation®
      </div>
      <div className="sleep-purpose-lower-title">
        SLEEP WITH A PURPOSE
      </div>
      <div className="sleep-purpose-lower-body">
        When you’re refreshed and invigorated by great sleep, you can take on the world. Let’s do it together. As a Certified B Corporation®, we work every day to build a healthier planet and positively impact people. Your purchase directly funds our work fighting child sexual exploitation through the Malouf Foundation™.
      </div>
      <div className="sleep-purpose-lower-action">
        <div className="sleep-purpose-lower-action-btn">
          Learn More &nbsp; ⟶
        </div>
      </div>
    </div>
  </div>
  {/* BEST SELLERS */}
  <div className="best-sellers">
    <div className="best-sellers-container">
      <div className="best-sellers-title">
        BEST SELLERS
        <div className="best-sellers-subtitle">
          With gel, PCM, and zoned ventilation options we have the pillows to help you have a cooler, more com fortable sleep all night long. 
        </div>
      </div>
      <div className="best-sellers-products">
        <div className="best-sellers-product">
          <img height="200px" src="assets/bestsellers/bestsellers.png" />
          <div className="best-sellers-product-info">
            <div className="best">
              Shoulder Zoned Dough® + Bamboo Charcoal Pillow 
            </div>
            <div>
              $115.99
            </div>
          </div>
        </div>
        <div className="best-sellers-product">
          <img height="200px" src="assets/bestsellers/bestsellers.png" />
          <div className="best-sellers-product-info">
            <div className="best">
              Shoulder Zoned Dough® + Bamboo Charcoal Pillow 
            </div>
            <div>
              $115.99
            </div>
          </div>
        </div>
        <div className="best-sellers-product">
          <img height="200px" src="assets/bestsellers/bestsellers.png" />
          <div className="best-sellers-product-info">
            <div className="best">
              Shoulder Zoned Dough® + Bamboo Charcoal Pillow 
            </div>
            <div>
              $115.99
            </div>
          </div>
        </div>
        <div className="best-sellers-product">
          <img height="200px" src="assets/bestsellers/bestsellers.png" />
          <div className="best-sellers-product-info">
            <div className="best">
              Shoulder Zoned Dough® + Bamboo Charcoal Pillow 
            </div>
            <div>
              $115.99
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="best-sellers-slider-bar">
    </div>
  </div>
  <div className="grayspace">
    <div className="products-in-the-room">
      <div className="products-in-the-room-menu" onclick="toggleMenu()">
        SHOP PRODUCTS IN THE ROOM
        <div className="products-in-the-room-icon-open">
        </div>
        <div className="products-in-the-room-icon-close">
        </div>
      </div>
      {/* mobile */}
      <div className="products-in-the-room-list">
        <div className="products-in-the-room-product">
          <div className="products-in-the-room-product-container">
            <div className="products-in-the-room-product-gray">
            </div>
            <div className="products-in-the-room-product-right">
              <div>
                Testing 
              </div>
              <div>
                $809.99
              </div>
            </div>
          </div>
        </div>
        <div className="products-in-the-room-product">
          <div className="products-in-the-room-product-container">
            <div className="products-in-the-room-product-gray">
            </div>
            <div className="products-in-the-room-product-right">
              <div>
                Testing 
              </div>
              <div>
                $809.99
              </div>
            </div>
          </div>
        </div>
        <div className="products-in-the-room-product">
          <div className="products-in-the-room-product-container">
            <div className="products-in-the-room-product-gray">
            </div>
            <div className="products-in-the-room-product-right">
              <div>
                Testing 
              </div>
              <div>
                $809.99
              </div>
            </div>
          </div>
        </div>
        <div className="products-in-the-room-product">
          <div className="products-in-the-room-product-container">
            <div className="products-in-the-room-product-gray">
            </div>
            <div className="products-in-the-room-product-right">
              <div>
                Testing 
              </div>
              <div>
                $809.99
              </div>
            </div>
          </div>
        </div>
        <div className="products-in-the-room-product">
          <div className="products-in-the-room-product-container">
            <div className="products-in-the-room-product-gray">
            </div>
            <div className="products-in-the-room-product-right">
              <div>
                Testing 
              </div>
              <div>
                $809.99
              </div>
            </div>
          </div>
        </div>
        <div className="products-in-the-room-product">
          <div className="products-in-the-room-product-container">
            <div className="products-in-the-room-product-gray">
            </div>
            <div className="products-in-the-room-product-right">
              <div style={{width: 100}}>
                A Bit Longer Of A Title
              </div>
              <div>
                $809.99
              </div>
            </div>
          </div>
        </div>
        <div className="products-in-the-room-product">
          <div className="products-in-the-room-product-container">
            <div className="products-in-the-room-product-gray">
            </div>
            <div className="products-in-the-room-product-right">
              <div>
                Testing 
              </div>
              <div>
                $809.99
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* min width 768px */}
    <div id="in-the-room" className="products-in-the-room-list-main">
      <div className="products-in-the-room-container">
        <div className="products-in-the-room-product">
          <div className="products-in-the-room-product-container">
            <div className="products-in-the-room-product-gray">
            </div>
            <div className="products-in-the-room-product-right">
              <div>
                Testing 
              </div>
              <div>
                $809.99
              </div>
            </div>
          </div>
        </div>
        <div className="products-in-the-room-product">
          <div className="products-in-the-room-product-container">
            <div className="products-in-the-room-product-gray">
            </div>
            <div className="products-in-the-room-product-right">
              <div>
                Testing 
              </div>
              <div>
                $809.99
              </div>
            </div>
          </div>
        </div>
        <div className="products-in-the-room-product">
          <div className="products-in-the-room-product-container">
            <div className="products-in-the-room-product-gray">
            </div>
            <div className="products-in-the-room-product-right">
              <div>
                Testing 
              </div>
              <div>
                $809.99
              </div>
            </div>
          </div>
        </div>
        <div className="products-in-the-room-product">
          <div className="products-in-the-room-product-container">
            <div className="products-in-the-room-product-gray">
            </div>
            <div className="products-in-the-room-product-right">
              <div>
                Testing 
              </div>
              <div>
                $809.99
              </div>
            </div>
          </div>
        </div>
        <div className="products-in-the-room-product">
          <div className="products-in-the-room-product-container">
            <div className="products-in-the-room-product-gray">
            </div>
            <div className="products-in-the-room-product-right">
              <div>
                A Bit Longer Of A Title
              </div>
              <div>
                $809.99
              </div>
            </div>
          </div>
        </div>
        <div className="products-in-the-room-product">
          <div className="products-in-the-room-product-container">
            <div className="products-in-the-room-product-gray">
            </div>
            <div className="products-in-the-room-product-right">
              <div>
                Testing 
              </div>
              <div>
                $809.99
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="reviews">
    <div className="review">
      <div>
        <img height="25px" src="assets/SVG/5stars.svg" />
      </div>
      This is a customer review that informs other people that our products are the bomb and they should 
      buy them.
      <div className="reviewer">
        - Ms. Reviewer
      </div>
    </div>
  </div>
  <div className="sponsors">
    <div className="sponsors-container">
      <div className="sponsor-grid-item">
        <div className="sponsors-logo1">
        </div>
      </div>
      <div className="sponsor-grid-item">
        <div className="sponsors-logo2">        
        </div>
      </div>
      <div className="sponsor-grid-item">
        <div className="sponsors-logo3">
        </div>
      </div>
      <div className="sponsor-grid-item">
        <div className="sponsors-logo4">  
        </div>
      </div>
    </div>
  </div>
  <div className="footer">
    <div className="footer-line" />
    <div className="footer-full">
      <div className="footer-main-1">
        <div className="footer-1">
          <div className="footer-1-topflex">
            <div className="footer-1-certified" />
            <div className="footer-1-vert-line" />
            <div className="footer-1-follow-us">
              <div>
                FOLLOW US
              </div>
              <div className="footer-1-follow-us-social">
                <img height="23px" src="assets/social/facebook.svg" />
                <img height="23px" src="assets/social/insta.svg" />
                <img height="23px" src="assets/social/linkedin.svg" />
                <img height="23px" src="assets/social/twitter.svg" />
                <img height="23px" src="assets/social/youtube.svg" />
              </div>
            </div>
          </div>
          <div className="footer-1-contact-us">
            CONTACT US
            <div>
              info@maloufsleep.com
            </div>
            <div>
              (800)517-7179
            </div>
          </div>
        </div>
        <div className="footer-line-mobile" />
        <div className="footer-nav">
          <div className="footer-nav-products">
            <div>PRODUCTS</div>
            <div>Furniture</div>
            <div>Bases</div>
            <div>Bedding</div>
            <div>Pillows</div>
            <div>Protectors</div>
            <div>Matress Toppers</div>
          </div>
          <div className="footer-nav-company">
            <div>COMPANY</div>
            <div>About Us</div>
            <div>Impact</div>
            <div>Product Information</div>
            <div>Blog</div>
            <div>Military/Healthcar</div>
            <div>Careers</div>
          </div>
          <div className="footer-nav-retailers">
            <div>RETAILERS</div>
            <div>Wholesale</div>
            <div>Retailer Login</div>
          </div>
        </div>
      </div>
      <div className="footer-line-main" />
      <div className="footer-news">
        Latest News
        <div className="footer-news-img">
          <img src="./assets/news.png" />
        </div>
        Malouf™ Releases New E-Commerce Website Guide for Retail Partners
        <div>
          Read more &gt;
        </div>
      </div>
    </div>
    <div className="footer-line" />
    <div className="footer-rights-reserved">
      2020 Malouf. All rights reserved. 
      <div>
        Privacy Policy | Terms of Service
      </div>
    </div>
  </div>
</>

)

export default App