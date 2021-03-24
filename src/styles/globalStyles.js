import emotionReset from "emotion-reset"
import { css } from "@emotion/react"
import { vars } from "./variables"

export const styles = css`
  ${emotionReset}
  body {
    font-family: ${vars.font.sans};
  }

  main {
    min-height: 100vh;
  }
`
