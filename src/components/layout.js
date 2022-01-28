import React from "react"
import { Global, css } from "@emotion/react"
import styled from "@emotion/styled"
import Header from "./header"

const BackgroundStyle = styled("div")`
  height: 100vh;
  background-image: url(/images/background-pattern.png);
  background-repeat: repeat;
  background-size: 500px 500px;
  font-family: "Lato";
  color: #563752;
  h3 {
    font-size: 30px;
  }
  p,
  div {
    font-size: 24px;
  }
`
const FadedStyle = styled("div")`
  height: 100%;
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
          :root {
            --dark-purple: #563752;
            --tan-transparent: rgba(226, 218, 195, 0.7);
          }
          body {
            margin: 0;
            padding: 0;
            height: 100vh;
            
          }
          header {
            height: 40px;
            padding: 20px 0 10px 0;          
            }
          .cr {
            font-size: 42px;
            font-family: "Gideon Roman";
            text-shadow:.5px 0 0;
            padding-left: 15px;
          }
          .title {
            display: flex;
            align-items: baseline;;
            justify-content: space-between;
            background: var(--tan-transparent);
            border-bottom: solid 5px var(--dark-purple);
          }
          p,
          h1 {
            margin: 0;
          }
          nav {
            font-size: 24px;
            font-family: "Gideon Roman";            
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
