import React from "react"
import { useSiteMetadata } from "../utils/use-site-metadata"

import Layout from "../components/layout"
import { css } from "@emotion/react"
import styled from "@emotion/styled"

const FlexStyles = styled.div`
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`

const SloganStyles = styled("h3")`
  margin: auto;
  min-width: 475px;
  min-height: 100px;
  /* border: solid 3px var(--dark-purple); */

  font-size: 36px;
  font-weight: 500;
  font-family: "Montserrat";
`
const FrameStyles = styled("div")``

const ImageStyles = styled("div")`
  height: 300px;
  border: 10px ridge burlywood;
  box-shadow: 3px 5px 8px 3px rgba(50, 25, 0, 0.8);

  > img {
    height: inherit;
    filter: sepia(0.4) hue-rotate(-15deg) contrast(0.9);
    ${"" /* border: 10px ridge rgb(245, 239, 223); */}
  }
`
const InfoStyles = styled("p")`
  margin: auto;
  font-size: 24px;
  font-family: "Gideon Roman";
  font-weight: 700;
  line-height: 1.4;
  padding: 5px 15px 25px;
`

const HomePage = () => {
  return (
    <Layout>
      <div>
        <SloganStyles
          css={css`
            font-size: 40px;
            height: 120px;
          `}
        >
          Providing minor solutions to major problems.
        </SloganStyles>
        <FlexStyles>
          <div class="frame">
            <ImageStyles>
              <img src={`/images/party.jpeg`} alt="critical reactions" />
            </ImageStyles>
          </div>
          <InfoStyles
            css={css`
              margin: 0;
              width: 400px;
              text-align: left;
            `}
          >
            Formally known as the Minor Solutions, we self adopted this new name
            after a few back-to-back combat encounters resulted in our enemies
            trying to flee only to be met with critical strikes in return!
          </InfoStyles>
        </FlexStyles>
        <SloganStyles
          css={css`
            margin-top: 60px;
          `}
        >
          We are the Critical Reactions adventure party.
        </SloganStyles>
        <InfoStyles>
          Welcome to our home on the World Wide Weave where you get to know more
          about us or inquire about help. We are very experienced and posssess a
          wide range of talents and knowledge.
        </InfoStyles>
      </div>
    </Layout>
  )
}

export default HomePage
