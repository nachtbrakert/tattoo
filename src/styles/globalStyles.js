import { Global, css } from "@emotion/react"
import emotionReset from "emotion-reset"
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

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        ${styles}
      `}
    />
  )
}

export default GlobalStyle
