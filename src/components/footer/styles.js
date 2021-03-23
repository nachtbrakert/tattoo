import { css } from "@emotion/react"
import { vars } from "@styles/variables"

export const footerStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: ${vars.sizes.large};
  width: 100%;

  a {
    color: ${vars.colors.black};
    text-decoration: none;
    text-transform: uppercase;
    font-size: ${vars.fontSize.xs};

    &:not(:last-child) {
      &::after {
        padding: 0 ${vars.sizes.medium};
        content: "|";
      }
    }
  }

  /* @media (max-width: 767px) {
    .barsMenu {
      display: inline-block;
    }
  } */
`

export const copyrightStyles = css`
  position: fixed;
  left: ${vars.sizes.large};
  bottom: ${vars.sizes.large};
  transform-origin: left top;
  transform: rotate(270deg) translateX(-3%);
`
