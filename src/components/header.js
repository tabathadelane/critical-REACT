import React from "react"
import { Link } from "gatsby"
import { useSiteMetadata } from "../hooks/use-site-metadata"

const Header = () => {
  const { title, description } = useSiteMetadata()
  return (
    <header>
      <div class="">
        <h1 class="">{title}</h1>
        <p class="">{description}</p>
      </div>
      <nav>
        <Link to="/contact-us">Contact</Link>
        <Link to="/meet-the-party">Meet Us</Link>
        <Link to="/testimonials">Testimonials</Link>
        <Link to="/blog">Altheas Journal of Sending</Link>
      </nav>
    </header>
  )
}

export default Header
