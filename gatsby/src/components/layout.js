import React from "react"
import { Global, css } from "@emotion/react"
import styled from "@emotion/styled"
import Header from "./header"

const PageBackgroundStyles = styled("div")`
  background-attachment: fixed;
  background: url(/images/background-pattern.png);
  background-size: cover;
  filter: saturate(0.8);
  background-repeat: repeat;
  background-size: 500px 500px;
  font-family: "Lato";
  color: #563752;
`
const BackgroundFadeStyles = styled("div")`
  filter: saturate(100%);
  background-color: rgba(207, 194, 155, 0.9);
  ${"" /* background-color: rgba(227, 214, 175, 0.9); */}
  margin: 0px auto 0;
  text-align: center;
`
const ContentStyles = styled("div")`
  height: 100%;
  max-width: 1050px;
  margin: 25px auto 00px;
  text-shadow: 0px 0px 3px white;
`

export default function Layout({ children }) {
  return (
    <PageBackgroundStyles>
      <BackgroundFadeStyles>
        <Header />
        <Global
          styles={css`
            :root {
              --dark-purple: #563752;
              --tan-transparent: rgba(226, 218, 195, 0.7);
              --header-height: calc(60.5px + 25px); //the margin set on ContentStyles
              --adjust-page-vh: calc(100vh - var(--header-height))
            }
            html {
              height: 100vh;
              margin: 0;
            }
            body {
              min-height: 100vh;
              margin: 0;
              padding: 0;
            }
          `}
        />
        <ContentStyles>{children}</ContentStyles>
      </BackgroundFadeStyles>
    </PageBackgroundStyles>
  )
}
