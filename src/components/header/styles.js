import { css } from "@emotion/react"
import { vars } from "@styles/variables"

export const headerStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${vars.sizes.small};
  position: fixed;
  width: 100%;
  z-index: 10;

  @media (min-width: ${vars.breakpoints.medium}) {
    margin-top: ${vars.sizes.large};
  }
`

export const navigation = css`
  flex-basis: 33.33%;
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
  padding-left: ${vars.sizes.small};
  justify-content: flex-start;

  @media (min-width: ${vars.breakpoints.medium}) {
    padding-left: ${vars.sizes.large};
  }

  a {
    margin-right: ${vars.sizes.large};
  }
`

export const secondaryNavigation = css`
  padding-right: ${vars.sizes.small};
  justify-content: flex-end;

  @media (min-width: ${vars.breakpoints.medium}) {
    padding-right: ${vars.sizes.large};
  }

  a {
    margin-left: ${vars.sizes.large};
  }
`

export const logo = css`
  flex-basis: 33.33%;
  text-align: center;

  a {
    color: black;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: ${vars.fontWeight.bold};
    font-size: ${vars.fontSize.lg};

    @media (min-width: ${vars.breakpoints.medium}) {
      font-size: ${vars.fontSize.xxxl};
    }
  }
`
