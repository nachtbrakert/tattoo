import React from "react"
import { Link } from "gatsby"
import {
  headerStyles,
  navigation,
  primaryNavigation,
  secondaryNavigation,
  logo,
} from "./styles"
import { onlyMobile, onlyDesktop } from "@styles/helpers"
// import MobileMenu from "@components/mobileMenu"
import Instagram from "@svg/instagram.inline.svg"
import Menu from "@svg/menu.inline.svg"

const Header = ({ siteTitle }) => (
  <header css={headerStyles}>
    {/* <MobileMenu /> */}
    <div css={[navigation, primaryNavigation]}>
      <div css={onlyMobile}>
        <Menu />
      </div>
      <div css={onlyDesktop}>
        <Link to="/contact">People</Link>
        <Link to="/contact">Shops</Link>
      </div>
    </div>
    <div css={logo}>
      <Link to="/">{siteTitle}</Link>
    </div>
    <div css={[navigation, secondaryNavigation]}>
      <div css={onlyDesktop}>
        <Link to="/about">Over</Link>
      </div>
      <Link to="/contact">
        <Instagram />
      </Link>
    </div>
  </header>
)

export default Header
