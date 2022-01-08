import React from "react"
import { useSiteMetadata } from "../../hooks/use-site-metadata"

const About = () => {
  const { blogTitle, blogDescription } = useSiteMetadata()
  return (
    <main>
      <h2 class="about-title">Welcome my world of words.</h2>
      <div class="about-flex">
        <div class="photo-container">
          <div class="photo-frame">
            <div>
              <img
                src={`/images/althea-headshot.jpg`}
                alt="Althea Moonbrooke"
              />
            </div>
          </div>
        </div>
        <span>
          <p>
            My name is Althea Moonbrooke. I have spent the last few years
            travelling all over the continent with our adventuring party,
            Critical Reactions. I have come face to face with dragons - blasting
            one from the top of a castle with a crack of my thunderwave, and
            making friends with another who gifted me the Ollahm Harp. I have
            piloted the Apparatus of Kwalish from the depths of a sunken city
            through a lake of ooze. And I have crawled my way back from the 3rd
            level of Hell after an attempt was made on our lives to sacrifice us
            to a dark god. -- With our aquired riches, we have constructed a
            beautiful manor where I host parties for all of the most import
            personalities in Waterdeep when we are between quests. While we are
            on the road, I will keep you updated on all of our exciting
            happenings here through the new magic of the World Wide Weave.
          </p>
        </span>
      </div>
      <h4 class="accolade futura">
        <em>
          A "Waterdeep Exuberant Quill Guild" Award Winning Blog 2018-2021!
        </em>
      </h4>
      <h4 class="accolade futura">
        <em>Fearun Feathered Pen Society Member since 2020.</em>
      </h4>
    </main>
  )
}

export default About
