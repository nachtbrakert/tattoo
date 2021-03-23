import React from "react"
// import { Link } from "gatsby"
import { cardStyles } from "./styles"

const Card = ({ title }) => (
  <div css={cardStyles}>
    <h5>{title}</h5>
  </div>
)

export default Card
