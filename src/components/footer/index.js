import React from "react"
import { Link } from "gatsby"
import { footerStyles, copyrightStyles } from "./styles"

const Footer = () => (
  <>
    <div css={copyrightStyles}>
      <span>COPYRIGHT © TOOTAT. ALL RIGHTS RESERVED</span>
    </div>
    <footer css={footerStyles}>
      <Link to="/contact">Privacy Policy</Link>
      <Link to="/contact">Cookie Policy</Link>
      <Link to="/contact">Terms</Link>
    </footer>
  </>
)

export default Footer
