import { css } from "@emotion/react"
import { vars } from "@styles/variables"

export const onlyMobile = css`
  @media (min-width: ${vars.breakpoints.medium}) {
    display: none;
  }
`

export const onlyDesktop = css`
  @media (max-width: ${vars.breakpoints.medium}) {
    display: none;
  }
`
