import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

const Header = () => {
  const { title, description } = useSiteMetadata()
  return (
    <div class="header line-thin">
      <h1 class="title masq">{title}</h1>
      <p class="futura line-blue">{description}</p>
    </div>
  )
}

export default Header
