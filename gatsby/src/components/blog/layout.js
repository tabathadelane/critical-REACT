import React from "react";
import { Link } from "gatsby";
import { Global, css } from "@emotion/react";
import styled from "@emotion/styled";
import Header from "./header.js";

import { FrizQuadrataRegular, futur2, korinan, Masquerade } from "./fonts.js";

const Wrapper = styled("div")`
  max-width: 1100px;
  padding: 10px 0;
`;
export default function Layout({ children }) {
  const SMALLER_PAGE_BREAKPOINT = "1200px";
  const TABLET_VIEW_BREAKPOINT = "800px";
  const MOBILE_VIEW_BREAKPOINT = "500px";
  return (
    <Wrapper>
      <Header />
      <Global
        styles={css`
          ${
            "" /* @font-face {
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
              url("../fonts/FrizQuadrata-Regular.ttf") format("truetype");
          }
          @font-face {
            font-family: "Masq";
            src: local("Masquerade"),
              url("../fonts/Masquerade.ttf") format("truetype");
          } */
          }
          @font-face {
            font-family: "Korinan";
            src: local("korinan"), url(${korinan}) format("truetype");
          }
          @font-face {
            font-family: "Futura";
            src: local("futur2"), url(${futur2}) format("truetype");
          }
          @font-face {
            font-family: "Friz";
            src: local("FrizQuadrataRegular"),
              url(${FrizQuadrataRegular}) format("truetype");
          }
          @font-face {
            font-family: "Masq";
            src: local("Masquerade"), url(${Masquerade}) format("truetype");
          }
          body {
            font-family: "Korinan", serif;
            margin: auto;
            max-width: 1100px;
            background-color: #fefeff;
            ${"" /* border: 1px solid; */}
            padding: 0px 25px;
            @media (max-width: ${MOBILE_VIEW_BREAKPOINT}) {
              padding: 0 0px;
            }

          }
          aside {
            @media (max-width: ${SMALLER_PAGE_BREAKPOINT}) {
              margin: 50px auto 20px;
              h4 {
                margin: 80px 10px 40px;
                font-size: 1.5em;
                opacity: 0.7;
              }
              .pad {
                @media (max-width: ${MOBILE_VIEW_BREAKPOINT}) {
                padding-left: 10px;
                padding-right: 10px;
                }
              }
            }
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
          h4 {
            font-size: 18px;
          }
          a {
            text-decoration: none;
            color: black;
          }

          img {
            filter: hue-rotate(0deg) contrast(0.8) saturate(100%) grayscale(0.6)
              brightness(1);
          }
          .accolade {
            padding: 20px 0 0 5px;
            opacity: 0.5;
            margin: auto;
            @media (max-width: ${SMALLER_PAGE_BREAKPOINT}) {
            padding:0 0 15px ;
              width: 95%;
              margin-top: 10px;
            }
            @media (max-width: ${TABLET_VIEW_BREAKPOINT}) {
              margin-top: 30px;
            }
          }
          .i-award {
            fill: #1155e2;
          }
          .about-title {
            text-align: center;
            letter-spacing: 2px;
            font-size: 48px;
          }

          .content-flex {
            padding-top: 20px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
          }
          .bio {
              margin: 0 auto;
              padding: 0px 5px 0px 20px;
              line-height: 2;
              width: 375px;
              @media (max-width: ${SMALLER_PAGE_BREAKPOINT}) {
                margin-top: 2rem;
                width: 80%;
              }
              @media (max-width: ${TABLET_VIEW_BREAKPOINT}) {
              padding: 0px 0 20px;
                margin-top: 2rem;
                width: 95%;
                text-align: center;
              }

          }
          .photo-container {
            width: 375px;
            @media (max-width: ${MOBILE_VIEW_BREAKPOINT}) {
              width: 95%;
            }
          }
          .photo-frame {
            border: 1px solid black;
            padding: 10px;
            div {
              text-align: center;
              text-justify: center;
              border: 6px solid #1155e2;
              padding: 7px;
            }
            img {
              width: 100%;
            }
            @media (max-width: ${MOBILE_VIEW_BREAKPOINT}) {
              border: 0px;
              div {

              }
              img {

              }
            }
          }

          .blog-template {
            width: 90%; 
            margin: 0 auto;
          }

            .blog-styles {
              p {
                text-indent: 3rem;
                line-height: 2rem;
                width: 100%;
              }
              h4 {
                text-align: left;
                color: #1155e2;
                opacity: .9;
                width: 100%;
                
              }
              em {
                opacity: .6;
                text-align: left;
              }
              blockquote {
                opacity: .9;
                color: #1155e2;
                margin: 1rem 0;
                background: #eee;
                border-radius: 6px;
              padding: 1rem 2rem;
              font-style: italic;
              }
              a {
                color: #1155e2;
                opacity: .8;

              }
              ul {
               list-style-type: none;
                li {
                  padding-bottom: 1rem;
                  ::before {
                color: #1155e2;
                content: "⟢    ";

                  }
                }
              }
            }


          .pre {
            font-family: "Korinan", serif;
            white-space: pre;
            pointer-events: visible;
            all: unset;
            cursor: pointer;
            &:hover {
              background-color: lightgrey;
            }
          }

          .flex-container {
            display: flex;
          }
          .flex-r {
            @media (max-width: 800px) {
              flex-wrap: wrap-reverse;
            }
          }

          .title {
            font-weight: 500;
            font-size: 48px;
            color: #444;
            border: none;
            margin-bottom: 0px;
            @media (max-width: ${MOBILE_VIEW_BREAKPOINT}) {
              font-size: 40px;
              padding: 0 10px;
            }
          }
          .sub-title {
            @media (max-width: ${MOBILE_VIEW_BREAKPOINT}) {
              font-size: 14px;
              padding: 0 20px;
            }

          }
          .header {
            margin-bottom: 50px;
            background-color: #efefef;
            text-align: center;
            border: 2px solid black;
            @media (max-width: ${MOBILE_VIEW_BREAKPOINT}) {
              border-left: unset;
              border-right: unset;
            }

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
            @media (max-width: ${TABLET_VIEW_BREAKPOINT}) {
              margin: 20px auto;
              min-width: 250px;
              width: 100%;
            }
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
            font-size: 1.2em;
          }
          .line {
            border-bottom: 4px solid black;
            padding-bottom: 10px;
            font-size: 1.2em;
          }
          .line-thin {
            border-bottom: 2px solid black;
          }
          .line-blue {
            border-top: 6px solid #1155e2;
            padding-top: 10px;
          }
          footer {
            display: flex;
            justify-content: space-between;
            text-align: center;
            border-top: solid #ddd 1px;
            margin: 50px 10px 0;
            padding-top: 10px;
            @media (max-width: ${TABLET_VIEW_BREAKPOINT}) {
              margin: 2rem auto 10px;
              width: 100%;
              flex-wrap: wrap-reverse;
              justify-content: center;
              .hide {
                display: none;
              }
            }
          
            a {
            color: #1155e2;
            }
          a,
          div {
              padding: 0px 20px;
            @media (max-width: ${TABLET_VIEW_BREAKPOINT}) {
              margin-top: 20px;
            }
          }
        `}
      />
      {children}
      <footer>
        <Link to="/">&#8592; Back to Critical Reactions</Link>
        <div>&copy; Althea Moonbrooke. All rights reserved.</div>
        <Link class="hide" to="/blog/archive">
          Archives
        </Link>
      </footer>
    </Wrapper>
  );
}
