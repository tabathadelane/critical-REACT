import React from "react"
import { Global, css } from "@emotion/react"
import styled from "@emotion/styled"
import Header from "./header"
import Overlay from "./overlay"

const PageBackgroundStyles = styled("div")`
  min-height: 100vh;
  font-size: 32px;
  background-attachment: fixed;
  background: url(/images/background-pattern.png);
  background-size: cover;
  filter: saturate(0.8);
  background-repeat: repeat;
  background-size: 500px 500px;
  font-family: "Lato";
  color: #563752;
  z-index: 1;
`
const BackgroundFadeStyles = styled("div")`
  min-height: 100vh;
  filter: saturate(100%);
  background-color: rgba(207, 194, 155, 0.9);
  ${"" /* background-color: rgba(227, 214, 175, 0.9); */}
  margin: 0px auto 0;
  text-align: center;
  z-index: 1;
`
const ContentStyles = styled("div")`
  max-width: 1200px;
  margin: 50px auto 0px;
  padding: 0 0 100px;
  text-shadow: 0px 0px 3px white;
  z-index: 1;

  h1 {
    font-size: 2rem;
    text-align: center;
    line-height: 2.5rem;
    text-transform: uppercase;
  }
`

const FooterStyles = styled("footer")`
  position: absolute;
  font-size: 16px;
  left: 0;
  right: 0;
  bottom: 0;
  display: block;
  text-align: center;
  padding: 20px;
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
              --purple-transparent: rgba(86, 55, 82, 0.7);
              --tan: rgb(226, 218, 195);
              --tan-transparent: rgba(226, 218, 195, 0.7);
              --header-height: calc(
                60.5px + 25px
              ); //the margin set on ContentStyles
              --adjust-page-vh: calc(100vh - var(--header-height));
            }
            html {
              height: 100vh;
              position: relative;
              margin: 0;
            }
            body {
              min-height: 100vh;
              margin: 0;
              padding: 0;
            }
            img {
              filter: sepia(0.4) contrast(0.9);
              ${"" /* filter: sepia(0.4) hue-rotate(-15deg) contrast(0.9); */}
            }
            .pop {
              :active {
                animation: hover-pop 0.3s linear 1;
              }
              @keyframes hover-pop {
                50% {
                  transform: scale(0.9);
                }
              }
            }
          `}
        />
        <ContentStyles>{children}</ContentStyles>
        <FooterStyles>
          &copy; Waterdeep Weaver Design, Co - All rights reserved.
        </FooterStyles>
      </BackgroundFadeStyles>
    </PageBackgroundStyles>
  )
}
