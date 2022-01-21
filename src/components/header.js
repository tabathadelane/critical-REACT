import React from "react"
import { Link } from "gatsby"
import { useSiteMetadata } from "../hooks/use-site-metadata"

const Header = () => {
  const { title, description } = useSiteMetadata()
  return (
    <header class="title">
      <div class="">
        <h1 class="cr">{title}</h1>
        {/* <p class="">{description}</p> */}
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/meet-the-party">Meet Us</Link>
        <Link to="/testimonials">Testimonials</Link>
        <Link to="/contact-us">Contact</Link>
      </nav>
      <nav>
        <Link to="/blog">Altheas Journal of Sending &rarr;</Link>
      </nav>
    </header>
  )
}

export default Header
