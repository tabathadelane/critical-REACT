import React from "react"
import { Global, css } from "@emotion/react"
import styled from "@emotion/styled"
import Header from "./header.js"

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
          @font-face {
            font-family: "Futura";
            src: local("futur2"), url("../fonts/futur2.ttf") format("truetype");
          }
          @font-face {
            font-family: "Friz";
            src: local("FrizQuadrata-Regular"),
              url("....//fonts/FrizQuadrata-Regular.ttf") format("truetype");
          }
          @font-face {
            font-family: "Masq";
            src: local("Masquerade"),
              url("../fonts/Masquerade.ttf") format("truetype");
          }
          body {
            font-family: "Korinan", serif;
            margin: auto;
            max-width: 1100px;
            background-color: #fefeff;
            border: 1px solid;
            padding: 0px 50px 20px;
          }
          .center {
          }
          div {
            color: black;
          }
          h1,
          h2,
          h3,
          h4 {
            font-family: "Friz", sans-serif;
            font-weight: 900;
            text-transform: none;
            margin: 0;
          }
          h1 {
            color: #1155e2;
            font-size: 50px;
          }
          h2 {
            color: #1155e2;
            font-size: 36px;
          }
          h3 {
            color: #1155e2;
            font-size: 24px;
          }
          a {
            text-decoration: none;
            color: black;
          }
          .flex-container {
            display: flex;
          }

          .title {
            font-weight: 500;
            font-size: 48px;
            color: #444;
            border: none;
            margin-bottom: 0px;
          }
          .header {
            margin-left: 10px;
            margin-bottom: 50px;
            background-color: #efefef;
            text-align: center;
            border: 2px solid black;
          }
          .header p {
            margin: 5px 0px;
          }
          .block {
            margin: 30px 0px;

            &:hover {
              background-color: #efefef;
            }
          }
          .side-bar {
            width: 250px;
            font-size: 12px;
            margin-right: 50px;
          }
          .link {
            text-decoration: underline;
            &:hover {
              font-style: italic;
            }
          }
          .home-link {
            margin-bottom: 20px;
          }
          .futura {
            font-family: "Futura", sans-serif;
          }
          .masq {
            font-family: "Masq", sans-serif;
            text-transform: lowercase;
          }
          .date {
            background-color: lightgray;
            margin-top: 5px;
            font-size: 12px;
          }
          .line {
            border-bottom: 4px solid black;
            padding-bottom: 10px;
          }
          .line-thin {
            border-bottom: 2px solid black;
          }
          .line-blue {
            border-top: 6px solid #1155e2;
            padding-top: 10px;
          }
        `}
      />
      {children}
    </Wrapper>
  )
}
