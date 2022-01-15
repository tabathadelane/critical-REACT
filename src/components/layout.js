import React from "react"
import { Global, css } from "@emotion/react"
import styled from "@emotion/styled"
import Header from "./header"

const Wrapper = styled("div")`
  height: 100vh;
  background-image: url(/images/background-pattern.png);
  background-repeat: repeat;
  background-size: 500px 500px;
  font-family: "Dongle";
  color: #563752;
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
          html {
          }
          body {
            margin: 0;
            padding: 0;
            height: 100vh;
          }
          .fade {
            margin: 0px auto 0;
            text-align: center;
            background-color: rgba(207, 194, 155, 0.9);
          }
          header {
            height: 60px;
            padding: 20px 0;
          }
          .cr {
            font-size: 42px;
            font-family: "Source Serif Pro";
            padding-left: 15px;
          }
          .title {
            display: flex;
            align-items: baseline;
            justify-content: space-between;
            ${"" /* border-bottom: rgb(76, 69, 58) solid 5px; */}
            background: rgba(226, 218, 195, 0.9);
          }
          p,
          h1 {
            margin: 0;
          }
          .content {
            height: calc(100vh - 100px);
            padding: 25px 0;
            margin: 0px auto 00px;
          }
          .margin {
          }
          nav {
            font-size: 32px;
            line-height: 1;
            display: flex;
            justify-content: space-around;
            & a {
              text-decoration: none;
              padding: 0 15px;
              border-radius: 3px;
              color: #563752;
          }
        `}
      />

      {children}
    </Wrapper>
  )
}
