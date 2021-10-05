import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

const Header = () => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <div class="">
        <h1 class="">{title}</h1>
        <p class="">{description}</p>
      </div>
      <nav>
        <a href="">nav link</a>
        <a href="">nav link</a>
        <a href="">nav link</a>
        <a href="">nav link</a>
      </nav>
    </div>
  )
}

export default Header
