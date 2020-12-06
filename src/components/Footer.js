/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import styled  from '@emotion/styled';
import news from '../assets/footer/news.png'
import news2 from '../assets/footer/news2.png'
import facebook from '../assets/footer/facebook.svg'
import youtube from '../assets/footer/youtube.svg'
import insta from '../assets/footer/insta.svg'
import linkedin from '../assets/footer/linkedin.svg'
import twitter from '../assets/footer/twitter.svg'

const navLists = [
    {title: "PRODUCTS", items: ["Furniture", "Bases", "Bedding", "Pillows", "Protectors", "Mattress Toppers"]},
    {title: "COMPANY", items: ["About Us", "Impact", "Product Information", "Blog", "Military Healthcare", "Careers"]},
    {title: "RETAILERS", items: ["Wholesale", "Retailer Login",]},
]

const social = [ facebook, insta, linkedin, twitter, youtube ] 

const newsItems = [
  {image: news, text: "Malouf™ Releases New E-Commerce Website Guide for Retail Partners" },
  {image: news2, text: "Malouf™ Expands Photography and Video Studios to Boost In-House Capabilities" },
]

const Footer = () => (
  <>
    <div className="footer">
      <div className="footer-line" />
      <div className="footer-full">
        <div className="footer-main-1">
          <div className="footer-1">
            <div className="footer-1-topflex">
              <div className="footer-1-certified" />
              <div className="footer-1-vert-line" />
              <div className="footer-1-follow-us">
                <div css={css`font-family: Geograph-700; flex-shrink: 0;`}>
                  FOLLOW US
                </div>
                <div className="footer-1-follow-us-social">
                  {social.map ((item, idx) => (
                    <div
                      css={css`
                      margin: 0 0.5rem 0.25rem 0;
                      
                      @media(max-width: 767px) {
                        margin-right: 0.4rem;
                      }
                      `}
                    >
                      <img height={idx == 4 ? "19px" : "23px"} src={item} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="footer-1-contact-us">
              <div css={css`font-family: Geograph-700;`} >
                CONTACT US
              </div>
              <div>
                info@maloufsleep.com
              </div>
              <div>
                (800) 517-7179
              </div>
            </div>
          </div>
          <div className="footer-line-mobile" />
          <div className="footer-nav">
            { navLists.map( list => (
              <div className="footer-nav-list">
                <p css={css`font-family: Geograph-Bold;`}>
                  {list.title}
                </p>
                {list.items.map(item => (
                  <p css={css`font-family: Geograph`}>{item}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="footer-line-main" />
        <div className="footer-news">
          <p css={css`font-family: Geograph-Bold; margin: 0rem 0 0rem;`}>
            LATEST NEWS
          </p>
          <div 
            css={css`
              display: flex; 
              justify-content: space-between; 
              align-items: flex-end;
              width: 100%;

              @media (min-width: 1124px) {
                flex-direction: column;
                align-items: center;

              }
            `}
          >
            <div>
              <NewsItem content={newsItems[0]} />
            </div>
            <div
              css={css`
                @media (max-width: 689px) {
                  display: none;
                }
              `}
            >
              <NewsItem content={newsItems[1]} />
            </div>
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

const NewsItem = ({content}) => (
  <>
    <div 
      css={css`
        @media (min-width: 550px) {
          display: flex;
          justify-content: flex-start;
          min-width: 300px;
          max-width: 330px;
          align-items: center;
        }

        @media (min-width: 1024px) {
          max-width: 400px;
          margin-bottom: 1rem;
        }
      `}
    >
      <div css={css`margin-right: 1rem`}>
        <img src={content.image} />
      </div>
      <div>
        <p css={css`margin: 0.5rem; max-width: 250px; @media(max-width: 750) {max-width: 280px}`}>
          {content.text}
        </p>
        <p css={css`margin: 0 .5rem; font-family: Mercury-Text-G2; font-style: italic; @media(max-width: 1123px) {display: none;}`} >
          <strong>Read more &gt;</strong>
        </p>
      </div>
    </div>
    <div css={css`margin: 1rem; font-family: Mercury-Text-G2; font-style: italic; @media(min-width: 1124px) {display: none;}`}>
      <strong>Read more &gt;</strong>
    </div> 
  </>
)

export default Footer