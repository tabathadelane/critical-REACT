import React from "react"
import { Global, css } from "@emotion/react"
import styled from "@emotion/styled"
import Header from "./header"

const Wrapper = styled("div")`
  padding: 10px;
  height: 100vh;
  background-image: url(/images/background-pattern.png);
  background-repeat: repeat;
  background-size: 500px 500px;
  font-family: "Dongle";
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

          body {
            height: 100vh;
          }
          .fade {
            margin: 50px auto 0;
            max-width: 1200px;
            text-align: center;
            background-color: rgba(255, 255, 240, 0.8);
          }
          header {
            margin: 100px 100px 0 100px;
          }
          .cr {
            font-family: "Source Serif Pro";
          }
          p {
            margin: 0;
          }
          .content {
            min-height: 500px;
            padding: 25px 0;
            margin: 0px auto 50px;
          }
          .margin {
            margin: 0px 100px 100px 100px;
          }
          nav {
            padding: 25px 0;
            display: flex;
            justify-content: center;
            margin: 0 10px;
            & a {
              padding: 10px;
              border-radius: 3px;
              color: rgb(76, 69, 58);
            }
          }
        `}
      />

      {children}
    </Wrapper>
  )
}
