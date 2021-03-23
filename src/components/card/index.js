import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { cardStyles } from "./styles"

const Card = props => {
  const image = getImage(props.image.gatsbyImageData)

  return (
    <div css={cardStyles}>
      {/* <Link to="/people"> */}
      {/* <h5>{props.name}</h5> */}
      <GatsbyImage image={image} alt={props.name} />
      {/* </Link> */}
    </div>
  )
}

export default Card
