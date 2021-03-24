import React from "react"
import { Link } from "gatsby"
import { menuContainerStyles } from "./styles"

const MobileMenu = ({ navigation }) => (
  <div css={menuContainerStyles}>
    <h1>mobile</h1>
    <Link to="/contact">People</Link>
  </div>
)

export default MobileMenu
