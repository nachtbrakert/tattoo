import React from "react"
import { Link } from "gatsby"
import {
  headerStyles,
  desktopNavigation,
  primaryNavigation,
  secondaryNavigation,
  logo,
} from "./styles"

const Header = ({ siteTitle }) => (
  <header css={headerStyles}>
    <div css={[desktopNavigation, primaryNavigation]}>
      <Link to="/contact">People</Link>
      <Link to="/contact">Shops</Link>
      <Link to="/contact">Journal</Link>
    </div>
    <div>
      <Link to="/" css={logo}>
        {siteTitle}
      </Link>
    </div>
    <div css={[desktopNavigation, secondaryNavigation]}>
      <Link to="/contact">About</Link>
      <Link to="/contact">Instagram</Link>
      <Link to="/contact">Journal</Link>
    </div>
  </header>
)

export default Header
