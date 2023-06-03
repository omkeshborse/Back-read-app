import React from "react"
import { FooterNavLink, FooterScoialLinks } from "./data"
const Footer = () => {
  return (
    <>
      <footer className="section footer">
        <ul className="footer-links">
          {FooterNavLink.map((link , index) => {
            const { href, linkText } = link
            return (
              <li key = {index}>
                <a href={href} className="footer-link">
                  {linkText}
                </a>
              </li>
            )
          })}
        </ul>
        <ul className="footer-icons">
          {FooterScoialLinks.map((link, index) => {
            const {href , className } = link ;
            return (
              <li key={index}>
                <a
                  href={href}
                  target="_blank"
                  className="footer-icon"
                  rel="noreferrer"
                >
                  <i className={className}></i>
                </a>
              </li>
            )
          })}
     
        </ul>
        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date"></span> all rights reserved
        </p>
      </footer>
    </>
  )
}

export default Footer
