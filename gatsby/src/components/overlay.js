import React, { useState, useEffect, useCallback, useRef } from "react"
import { Link } from "gatsby"
import { Global, css } from "@emotion/react"
import styled from "@emotion/styled"

const MenuOverlayStyles = styled("div")`
  width: 100%;
  position: fixed;
  padding-bottom: 50px;
  z-index: 4; /* Sit on top */
  left: 0;
  top: 0;
  overflow-x: hidden; /* Disable horizontal scroll */
  transform: ${({ overlayOpen }) =>
    overlayOpen ? "translateY(0)" : "translateY(-100%)"};
  transition: 0.5s; /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
`
const NavStyles = styled("div")`
  z-index: 1; /* Sit on top */
  width: 80%;
  margin: 45px auto 0;
  padding: 25px 0 50px;
  background: var(--tan);
  border-radius: 13px;
  position: relative;
  font-family: "Gideon Roman";
  text-transform: uppercase;
  font-size: 24px;

  a {
    display: block;
    padding: 20px 0;
    text-decoration: none;
    color: black;
    :focus {
      color: var(--tan);
      background: var(--dark-purple);
    }
  }

  hr {
    width: 50%;
    border: solid var(--dark-purple) 2px;
    border-border-radius: 20px;
  }

  button {
    cursor: pointer;
    width: 175px;
    height: 50px;
    margin: auto;
    font-size: 24px;
    font-family: inherit;
    border: 0;
    border-radius: 13px;
    color: var(--tan);
    background: var(--dark-purple);
    position: absolute;
    left: 0;
    right: 0;
    bottom: -25px;
    :focus {
      animation: hover-pop 0.3s linear 1;
    }
    @keyframes hover-pop {
      50% {
        transform: scale(1.2);
      }
    }
  }
`

const Overlay = ({ overlayOpen, setOverlayOpen }) => {
  return (
    <MenuOverlayStyles overlayOpen={overlayOpen}>
      <NavStyles>
        <Link
          overlayOpen={overlayOpen}
          onClick={() => setOverlayOpen(!overlayOpen)}
          to="/"
        >
          Home
        </Link>
        <hr />
        <Link
          overlayOpen={overlayOpen}
          onClick={() => setOverlayOpen(!overlayOpen)}
          to="/meet-the-party"
        >
          Meet Us
        </Link>
        <hr />
        <Link
          overlayOpen={overlayOpen}
          onClick={() => setOverlayOpen(!overlayOpen)}
          to="/testimonials"
        >
          Testimonials
        </Link>
        <hr />
        <Link
          overlayOpen={overlayOpen}
          onClick={() => setOverlayOpen(!overlayOpen)}
          to="/contact-us"
        >
          Call for aid
        </Link>
        <hr />
        <Link
          overlayOpen={overlayOpen}
          onClick={() => setOverlayOpen(!overlayOpen)}
          to="/blog"
        >
          Althea's Blog &rarr;
        </Link>
        <button
          overlayOpen={overlayOpen}
          onClick={() => setOverlayOpen(!overlayOpen)}
        >
          CLOSE
        </button>
      </NavStyles>
    </MenuOverlayStyles>
  )
}

export default Overlay
