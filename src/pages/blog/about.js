import React from "react"
import { useSiteMetadata } from "../../hooks/use-site-metadata"

const About = () => {
  const { blogTitle, blogDescription } = useSiteMetadata()
  return (
    <main>
      <h2>Welcome to my blog!</h2>
      <h4 class="accolade">
        <em>A Waterdeep Exuberant Quill Guild Award Winning Blog 2018-2021!</em>
      </h4>
      <div class="photo-container">
        <div class="photo-frame">
          <div>
            <img src={`/images/althea-headshot.jpg`} alt="Althea Moonbrooke" />
          </div>
        </div>
      </div>
    </main>
  )
}

export default About
