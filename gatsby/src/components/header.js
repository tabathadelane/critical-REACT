import React, { useState, useRef } from "react"
import { Link } from "gatsby"
import { useSiteMetadata } from "../utils/use-site-metadata"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

import { HiMenu } from "react-icons/hi"
import Overlay from "./overlay"
import { useOnClickOutsideOverlay } from "../utils/use-click-outside-overlay"

const HEADER_MOBILE_BREAKPOINT = "768px"

const OverlayFadeStyles = styled("div")`
  background: var(--tan);
  opacity: ${({ overlayOpen }) => (overlayOpen ? "55%" : "0")};
  transition: 1s;
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: ${({ overlayOpen }) => (overlayOpen ? "3" : "-1")}; /* Sit on top */
  left: 0;
  top: 0;
  overflow-x: hidden; /* Disable horizontal scroll */
`

const HeaderStyles = styled("header")`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background: var(--tan);
  margin: 0;
  padding: 0;
  box-shadow: 2px 4px 8px 3px rgba(50, 25, 0, 0.4);
  position: relative;
  z-index: 5;

  @media (max-width: ${HEADER_MOBILE_BREAKPOINT}) {
    height: 60px;
    justify-content: space-between;
  }
  > button {
    display: none;
    background: none;
    padding: none;
    font-size: 32px;
    color: var(--dark-purple);
    padding-right: 10px;
    border: none;
    @media (max-width: ${HEADER_MOBILE_BREAKPOINT}) {
      display: inline;
    }
  }
`
const TitleStyles = styled("h1")`
  font-size: 32px;
  display: flex;
  font-family: "Gideon Roman";
  text-shadow: 0.5px 0 0;
  padding-left: 10px;
  margin: 0;
`
const NavStyles = styled("nav")`
  font-family: "Gideon Roman";
  height: 100%;
  ul {
    margin: 0;
    padding: 0;
    height: 100%;
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    li {
      height: 100%;
      a {
        height: 100%;
        :focus {
          animation: hover-pop 0.2s linear 1;
        }
        @keyframes hover-pop {
          50% {
            transform: scale(0.9);
          }
        }
      }
    }
  }
`
const NavItemStyles = styled("li")`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 15px;
  > a {
    padding: 20px 0;
    margin: 0;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    color: var(--dark-purple);
  }
  &:hover {
    background-color: var(--dark-purple);
    > a {
      color: var(--tan-transparent);
    }
  }
  @media (max-width: ${HEADER_MOBILE_BREAKPOINT}) {
    display: none;
  }
`

const Header = () => {
  const node = useRef()
  const [overlayOpen, setOverlayOpen] = useState(false)
  useOnClickOutsideOverlay(node, () => setOverlayOpen(false))

  const { title, description } = useSiteMetadata()
  return (
    <div>
      <OverlayFadeStyles overlayOpen={overlayOpen} />
      <HeaderStyles>
        <div>
          <TitleStyles>
            <p
              css={css`
                font-size: 12px;
                > a {
                  text-decoration: none;
                  color: var(--tan-transparent);
                }
              `}
            >
              <Link to="/submissions">*</Link>
            </p>
            {title}
          </TitleStyles>
          {/* <p class="">{description}</p> */}
        </div>
        <NavStyles
          css={css`
            margin: 0 10px;
          `}
        >
          <ul>
            <NavItemStyles>
              <Link to="/">Home</Link>
            </NavItemStyles>
            <NavItemStyles>
              <Link to="/meet-the-party">Meet Us</Link>
            </NavItemStyles>
            <NavItemStyles>
              <Link to="/testimonials">Testimonials</Link>
            </NavItemStyles>
            <NavItemStyles>
              <Link to="/contact-us">Call for aid</Link>
            </NavItemStyles>
            <NavItemStyles>
              <Link to="/blog">Althea's Blog &rarr;</Link>
            </NavItemStyles>
          </ul>
        </NavStyles>
        <button
          aria-label="Open mobile menu"
          overlayOpen={overlayOpen}
          onClick={() => {
            setOverlayOpen(!overlayOpen)
            console.log(overlayOpen)
          }}
        >
          <HiMenu />
        </button>
      </HeaderStyles>
      <div ref={node}>
        <Overlay overlayOpen={overlayOpen} setOverlayOpen={setOverlayOpen} />
      </div>
    </div>
  )
}

export default Header
