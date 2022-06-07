import React from "react"
import { Link } from "gatsby"
import { useSiteMetadata } from "../utils/use-site-metadata"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

const HeaderStyles = styled("header")`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background: var(--tan-transparent);
  margin: 0;
  padding: 0;
  box-shadow: 2px 4px 8px 3px rgba(50, 25, 0, 0.4);
`
const TitleStyles = styled("h1")`
  font-size: 32px;
  display: flex;
  font-family: "Gideon Roman";
  text-shadow: 0.5px 0 0;
  padding-left: 15px;
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
`

const Header = () => {
  const { title, description } = useSiteMetadata()
  return (
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
            <Link to="/blog">Altheas Journal of Sending &rarr;</Link>
          </NavItemStyles>
        </ul>
      </NavStyles>
      <NavStyles>
        <ul></ul>
      </NavStyles>
    </HeaderStyles>
  )
}

export default Header
