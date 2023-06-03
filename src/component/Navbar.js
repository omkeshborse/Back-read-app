import React from "react"
import img from "../images/logo.svg"
import { links, socialLinks } from "./data"

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={img} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>
          {/*  <!-- left this comment on purpose --> */}
          <ul className="nav-links" id="nav-links">
            {links.map((link) => {
              const { id, href, text } = link
              return (
                <li key={id}>
                  <a href={href} className="nav-link">
                    {text}
                  </a>
                </li>
              )
            })}
          </ul>

          <ul className="nav-icons">
            {socialLinks.map((link) => {
              const { id, href, className } = link
              return (
                <li key={id}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="nav-icon"
                  >
                    <i className={className}></i>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
