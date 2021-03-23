import React from "react"
import { gridStyles } from "./styles"

const Grid = ({ children }) => {
  return <div css={gridStyles}>{children}</div>
}

export default Grid
