import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { css } from "@emotion/react"
import styled from "@emotion/styled"

const GridStyles = styled.div`
  margin: 0 auto 40px;
  display: grid;
  max-width: 1200px;
  grid-template-areas:
    "slogan1 slogan1"
    "blurb1 pic"
    "slogan2 pic"
    "blurb2 blurb2"
    "button button";
  grid-template-columns: 1fr 1fr;
  justify-content: space-around;
  align-items: center;
  row-gap: 50px;
  column-gap: 40px;
  padding: 0 20px;
  @media (max-width: 1080px) {
    grid-template-areas:
      "slogan1 slogan1"
      "blurb1 pic"
      "slogan2 slogan2"
      "blurb2 blurb2"
      "button button";
    p {
      font-size: 24px;
    }
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0;
    > p,
    h3,
    div {
      margin: 0 30px;
    }
    grid-template-areas:
      "slogan1"
      "blurb1"
      "pic"
      "slogan2"
      "blurb2"
      "button";
    #slogan1 {
      background-color: var(--purple-transparent);
      text-shadow: none;
      color: var(--tan);

      margin: 0;
      padding: 20px;
    }
    #button {
      width: 100%;
      margin: 0;
      border-radius: 0;
    }
  }

  #slogan1 {
    grid-area: slogan1;
  }
  #slogan2 {
    grid-area: slogan2;
  }
  #blurb1 {
    grid-area: blurb1;
  }
  #blurb2 {
    grid-area: blurb2;
  }
  #pic {
    grid-area: pic;
  }
  #button {
    grid-area: button;
  }
`

const SloganStyles = styled("h3")`
  margin: auto;
  min-height: 100px;
  font-size: 48px;
  font-weight: 500;
  font-family: "Montserrat";
`
const ImageStyles = styled("div")`
  border: 10px ridge burlywood;
  box-shadow: 3px 5px 8px rgba(50, 25, 0, 0.8);
  padding: 0px;
  font-size: 0;

  > img {
    max-width: 100%;
  }
`
const BlurbStyles = styled("p")`
  margin: auto;
  font-size: 28px;
  font-family: "Gideon Roman";
  font-weight: 700;
  line-height: 1.4;
`

const MeetButtonStyles = styled("p")`
  background: var(--purple-transparent);
  width: 440px;
  font-family: "Gideon Roman";
  line-height: 36px;
  margin: auto;
  padding: 8px 0;
  border-radius: 6px;
  > a {
    color: var(--tan);
    font-size: 36px;
    text-shadow: none;
    text-decoration: none;
  }
`

const HomePage = () => {
  return (
    <Layout>
      <GridStyles>
        <SloganStyles id="slogan1">
          Providing minor solutions to major problems.
        </SloganStyles>
        <ImageStyles id="pic">
          <img src={`/images/party.jpeg`} alt="critical reactions" />
        </ImageStyles>
        <BlurbStyles id="blurb1">
          Formally known as the Minor Solutions, we self adopted this new name
          after a few back-to-back combat encounters resulted in our enemies
          trying to flee only to be met with critical strikes in return!
        </BlurbStyles>
        <SloganStyles id="slogan2">
          We are the Critical Reactions adventure party.
        </SloganStyles>
        <BlurbStyles id="blurb2">
          Welcome to our home on the World Wide Weave where you get to know more
          about us or inquire about help. We are very experienced and posssess a
          wide range of talents and knowledge.
        </BlurbStyles>
        <MeetButtonStyles id="button">
          <Link to="/meet-the-party">MEET US</Link>
        </MeetButtonStyles>
      </GridStyles>
    </Layout>
  )
}

export default HomePage
