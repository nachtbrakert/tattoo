import { css } from "@emotion/react"
import { vars } from "@styles/variables"

export const cardStyles = css`
  a {
    position: relative;
  }

  picture {
    transition: opacity 0.3s ease-in;
    opacity: 0.9;
  }

  &:hover {
    picture {
      opacity: 1;
    }

    div {
      opacity: 1;
    }
  }
`

export const cardInfo = css`
  bottom: ${vars.sizes.medium};
  left: ${vars.sizes.medium};
  color: ${vars.colors.white};
  position: absolute;
  opacity: 0;
  z-index: 5;
  text-transform: uppercase;
  transition: opacity 0.3s ease-in;
  font-size: ${vars.fontSize.xs};
`
