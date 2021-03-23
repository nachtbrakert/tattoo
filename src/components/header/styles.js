import { css } from "@emotion/react"
import { vars } from "@styles/variables"

export const headerStyles = css`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: ${vars.sizes.large};
  position: fixed;
  width: 100%;

  /* @media (max-width: 767px) {
    .barsMenu {
      display: inline-block;
    }
  } */
`

export const navigation = css`
  flex-grow: 1;
  display: flex;
  padding-left: ${vars.sizes.large};

  a {
    margin-right: ${vars.sizes.large};
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
  justify-content: flex-start;
`

export const secondaryNavigation = css`
  justify-content: flex-end;
`

export const logo = css`
  color: black;
  text-transform: uppercase;
  font-weight: ${vars.fontWeight.bold};
  font-size: ${vars.fontSize.xl};
`
