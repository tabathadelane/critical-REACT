import React from "react";
import { useSiteMetadata } from "../../utils/use-site-metadata";

import { FaAward as Award } from "react-icons/fa";

const About = () => {
  const { blogTitle, blogDescription } = useSiteMetadata();
  return (
    <main>
      <h2 class="about-title">Welcome my world of words.</h2>
      <div class="content-flex">
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
          <p class="bio">
            My name is Althea Moonbrooke. My cloak never dirties, my hat always
            dazzles, and my harp shows no mercy. I have come face to face with
            dragons - blasting one from the top of a castle with a crack of my
            thunderwave, and making friends with another who gifted me the
            Ollahm Harp. I have piloted the Apparatus of Kwalish from the depths
            of a sunken city through a lake of ooze. And I have crawled my way
            back from the 3rd level of Hell after an attempt was made on our
            lives to sacrifice us to a dark god. -- With our aquired riches, we
            have constructed a beautiful manor where I host parties for all of
            the most import personalities in Waterdeep when we are between
            quests. While we are on the road, I will keep you updated on all of
            our exciting happenings here through the new magic of the World Wide
            Weave.
          </p>
        </span>
      </div>
      <h3 class="accolade">Recent Accolades:</h3>
      <h4 class="accolade futura">
        <em>
          <Award class="i-award" /> A "Waterdeep Exuberant Quill Guild" Award
          Winning Blog 2018-2021!
        </em>
      </h4>
      <h4 class="accolade futura">
        <em>
          <Award class="i-award" /> Fearun Feathered Pen Society Member since
          2019.
        </em>
      </h4>
      <h4 class="accolade futura">
        <em>
          <Award class="i-award" /> "Honorary Impressive Headpeices" Recepient
          2021{" "}
        </em>
      </h4>
    </main>
  );
};

export default About;
