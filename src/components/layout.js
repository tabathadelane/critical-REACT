import React from "react"
import { Global, css } from "@emotion/react"
import styled from "@emotion/styled"
import Header from "./header"

const BackgroundStyle = styled("div")`
  height: 100vh;
  background-image: url(/images/background-pattern.png);
  background-repeat: repeat;
  background-size: 500px 500px;
  font-family: "Dongle";
  color: #563752;
`
const FadedStyle = styled("div")`
  background-color: rgba(207, 194, 155, 0.9);
  margin: 0px auto 0;
  text-align: center;
`
const ContentStyle = styled("div")`
  height: calc(100vh - 130px);
  padding: 25px 0;
  margin: 0px auto 00px;
`

export default function Layout({ children }) {
  return (
    <BackgroundStyle>
      <FadedStyle>
        <Header />
        <Global
          styles={css`
          @font-face {
            font-family: "Korinan";
            src: local("korinan"),
              url("../fonts/korinan.ttf") format("truetype");
          }
          :root {
            --dark-purple: #563752;
            --tan-transparent: rgba(226, 218, 195, 0.3);
          }
          body {
            margin: 0;
            padding: 0;
            height: 100vh;
            
          }
          header {
            height: 60px;
            padding: 10px 0;
          }
          .cr {
            font-size: 42px;
            font-family: "Source Serif Pro";
            padding-left: 15px;
          }
          .title {
            display: flex;
            align-items: end;
            justify-content: space-between;
            background: var(--tan-transparent);
            border-bottom: solid 5px var(--dark-purple);
          }
          p,
          h1 {
            margin: 0;
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
              color: var(--dark-purple);
          }
        `}
        />
        <ContentStyle>{children}</ContentStyle>
      </FadedStyle>
    </BackgroundStyle>
  )
}
