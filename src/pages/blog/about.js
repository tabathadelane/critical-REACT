import React from "react"
import { useSiteMetadata } from "../../hooks/use-site-metadata"

const About = () => {
  const { blogTitle, blogDescription } = useSiteMetadata()
  return (
    <div>
      <h1>Welcome to {blogTitle}</h1>
      <p>About: {blogDescription}</p>
    </div>
  )
}

export default About
