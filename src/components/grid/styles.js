import { css } from "@emotion/react"
import { vars } from "@styles/variables"

export const gridStyles = css`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${vars.sizes.small};

  @media (min-width: ${vars.breakpoints.tiny}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: ${vars.breakpoints.medium}) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: ${vars.breakpoints.large}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`
