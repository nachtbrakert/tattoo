import { css } from "@emotion/react"
import { vars } from "@styles/variables"

export const footerStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: ${vars.sizes.small};
  width: 100%;

  @media (min-width: ${vars.breakpoints.medium}) {
    bottom: ${vars.sizes.large};
  }

  a {
    color: ${vars.colors.black};
    text-decoration: none;
    text-transform: uppercase;
    font-size: ${vars.fontSize.xs};

    &:not(:last-child) {
      &::after {
        padding: 0 ${vars.sizes.small};
        content: "|";

        @media (min-width: ${vars.breakpoints.medium}) {
          padding: 0 ${vars.sizes.medium};
        }
      }
    }
  }
`

export const copyrightStyles = css`
  left: ${vars.sizes.small};
  bottom: ${vars.sizes.small};
  font-size: ${vars.fontSize.xs};
  position: fixed;
  width: 100%;
  transform-origin: left top;
  transform: rotate(270deg) translateX(0%);

  @media (min-width: ${vars.breakpoints.medium}) {
    left: ${vars.sizes.large};
    bottom: ${vars.sizes.large};
    transform: rotate(270deg) translateX(0%);
  }
`
