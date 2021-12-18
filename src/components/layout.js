import React from "react"
import { Global, css } from "@emotion/react"
import styled from "@emotion/styled"
import Header from "./header"

const Wrapper = styled("div")`
  padding: 10px;
`
export default function Layout({ children }) {
  return (
    <Wrapper>
      <Header />
      <Global
        styles={css`
          @font-face {
            font-family: "Korinan";
            src: local("korinan"),
              url("../fonts/korinan.ttf") format("truetype");
          }
        `}
      />
      {children}
    </Wrapper>
  )
}
