import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { cardStyles, cardInfo } from "./styles"

const Card = props => {
  const image = getImage(props.image.gatsbyImageData)

  return (
    <div css={cardStyles}>
      <Link to="/people">
        <GatsbyImage image={image} alt={props.name} objectFit={"cover"} />
        <div css={cardInfo}>
          <h5>{props.name}</h5>
        </div>
      </Link>
    </div>
  )
}

export default Card
