import { css } from "@emotion/react"
import { vars } from "@styles/variables"

export const gridStyles = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: ${vars.sizes.small};
`
