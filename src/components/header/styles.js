import { css } from "@emotion/react"
import { vars } from "@styles/variables"

export const headerStyles = css`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: ${vars.sizes.large};
  position: fixed;
  width: 100%;
  z-index: 10;

  /* @media (max-width: 767px) {
    .barsMenu {
      display: inline-block;
    }
  } */
`

export const navigation = css`
  flex-grow: 1;
  display: flex;

  a {
    color: ${vars.colors.black};
    text-decoration: none;
    text-transform: uppercase;
    text-underline-offset: ${vars.sizes.small};

    &:hover {
      text-decoration: underline;
    }
  }
`

export const primaryNavigation = css`
  padding-left: ${vars.sizes.large};
  justify-content: flex-start;

  a {
    margin-right: ${vars.sizes.large};
  }
`

export const secondaryNavigation = css`
  padding-right: ${vars.sizes.large};
  justify-content: flex-end;

  a {
    margin-left: ${vars.sizes.large};
  }
`

export const logo = css`
  color: black;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: ${vars.fontWeight.bold};
  font-size: ${vars.fontSize.xl};
`
