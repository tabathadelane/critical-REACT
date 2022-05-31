import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import styled from "@emotion/styled"

import classSVGs from "../utils/class-svgs"

const breakpoints = {
  smallScreens: "3000px",
  mobile: "500px",
}

const MeetUsStyles = styled("div")`
  padding-bottom: 100px;
  display: flex;
  flex-gap: 0px;
  flex-wrap: wrap;
  justify-content: center;
  p {
    margin: 0;
  }
  h3 {
    width: 800px;
  }
`
const BioFrameStyles = styled("div")`
  width: 500px;
  font-family: "Gideon Roman";
  font-size: 28px;
  line-height: 36px;
  padding: 30px;
  margin: 20px;
  margin-bottom: 20px;
  border: 10px ridge burlywood;
  box-shadow: 3px 5px 8px 3px rgba(50, 25, 0, 0.8);
  position: relative;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-row-gap: 20px;
  grid-template-areas:
    "img name icon"
    "img role icon"
    "race interests interests"
    "class subclass subclass"
    "bio bio bio";

  @media (max-width: ${breakpoints.smallScreens}) {
    width: 500px;
    font-size: 24px;
    padding: 20px;
    grid-template-areas:
      "name name name"
      "role role role"
      "img . icon"
      "race interests interests"
      "class subclass subclass"
      "bio bio bio";
  }
  @media (max-width: ${breakpoints.mobile}) {
    width: 300px;
    font-size: 24px;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    p {
      width: 100%;
    }
  }

  #img {
    grid-area: img;
  }
  #name {
    grid-area: name;
    font-size: 42px;
    line-height: 36px;
  }
  #icon {
    grid-area: icon;
    height: 150px;
    padding: 25px;
    position: relative;
    background-color: var(--class-color);
    @media (max-width: ${breakpoints.mobile}) {
      height: 100px;
    }
    @media (max-width: ${breakpoints.mobile}) {
      height: 150px;
    }
  }
  #role {
    grid-area: role;
  }
  #race {
    grid-area: race;
  }
  #interests {
    grid-area: interests;
    justify-self: end;
  }
  #class {
    grid-area: class;
    justify-self: end;
  }
  #subclass {
    margin-left: 8px;
    grid-area: subclass;
    justify-self: start;
  }
  #bio {
    grid-area: bio;
    font-size: 24px;
    font-family: "Montserrat";
  }
  b {
    font-family: "Montserrat";
    font-weight: 700;
  }
  #frame-background {
    position: absolute;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 100%;
    background-color: var(--class-color);
    opacity: 0.4;
    filter: saturate(0.2) brightness(0150%);
    z-index: 1;
  }
  ${
    "" /* #icon-background {
    grid-area: icon;
    background-color: var(--class-color);
    z-index: 10;
  } */
  }

  img,
  object,
  #icon-background {
    height: 200px;
    border-radius: 60px;
    border: 5px solid var(--class-color);
  }
  img {
    opacity: unset;
    z-index: 2;
    background-color: var(--class-color);
  }
`

const BioInfoStyles = styled("p")`
  color: var(--class-color);
  text-shadow: none;
  margin-top: 0;
  z-index: 2;
  p {
  }
`

const IsMemberAliveStyles = ({ each, rip }) => {
  console.log(each)
  const classColorsList = {
    barbarian: "#E7623E",
    bard: "#AB6DAC",
    cleric: "#91A1B2",
    druid: "#7A853B",
    fighter: "#7F513E",
    monk: "#51A5C5",
    paladin: "#B59E54",
    ranger: "#507F62",
    rogue: "#555752",
    sorcerer: "#992E2E",
    warlock: "#7B469B",
    wizard: "#7B469B",
    artificer: "yellow",
    bloodhunter: "darkred",
    rip: "#555",
  }

  const theme =
    rip === "true" ? classColorsList.rip : classColorsList[each.class]

  const styles = {
    "--class-color": theme,
  }
  return (
    <BioFrameStyles style={styles}>
      <div id="frame-background" />
      <BioInfoStyles id="name">
        <b>{each.name}</b>
      </BioInfoStyles>
      <BioInfoStyles id="role">
        <i>{each.role}</i>
      </BioInfoStyles>
      <BioInfoStyles id="race">
        <b>Race:</b> {each.race}
      </BioInfoStyles>
      <img id="img" src={each.image.asset.fluid.srcWebp} />
      <BioInfoStyles id="class">
        <b>Class:</b> {each.class.charAt(0).toUpperCase() + each.class.slice(1)}
        {" -  "}
      </BioInfoStyles>
      <BioInfoStyles id="subclass">
        {"  "}
        {each.subclass}
      </BioInfoStyles>
      <BioInfoStyles id="interests">
        <b>Interests:</b> {each.interests}
      </BioInfoStyles>
      <object id="icon" type="image/svg+xml" data={classSVGs[each.class]} />
      <BioInfoStyles id="bio">{each.bio}</BioInfoStyles>
    </BioFrameStyles>
  )
}

const TheParty = ({
  data: {
    MemberBios: { nodes: bios },
  },
}) => {
  return (
    <Layout>
      <h1>MEET THE PARTY</h1>
      <MeetUsStyles class="">
        {bios.map(each => {
          if (each.role !== "RIP") {
            return <IsMemberAliveStyles each={each} />
          }
        })}
        <h3>In memory of...</h3>
        {bios.map(each => {
          if (each.role === "RIP") {
            return <IsMemberAliveStyles each={each} rip="true" />
          }
        })}
      </MeetUsStyles>
    </Layout>
  )
}

export default TheParty

export const query = graphql`
  query BioQuery {
    MemberBios: allSanityBio(sort: { order: ASC, fields: class }) {
      nodes {
        bio
        id
        class
        interests
        name
        race
        role
        subclass
        image {
          asset {
            fluid(maxHeight: 300, maxWidth: 300) {
              srcWebp
            }
          }
        }
      }
    }
  }
`
