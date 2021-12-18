import React from "react"
import { useSiteMetadata } from "../../hooks/use-site-metadata"

const About = () => {
  const { blogTitle, blogDescription } = useSiteMetadata()
  return (
    <main>
      <h2>Welcome to my blog!</h2>
      <div class="photo-frame">
        <div>
          <img src={`/images/althea-headshot.jpg`} alt="Althea Moonbrooke" />
        </div>
      </div>
    </main>
  )
}

export default About
