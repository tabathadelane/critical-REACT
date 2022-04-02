import React from "react"
import Layout from "../components/layout"
import styled from "@emotion/styled"
import { graphql } from "gatsby"
import { css } from "@emotion/react";

import { IoSkullSharp } from "react-icons/io5";
import { GiScrollUnfurled } from "react-icons/gi";

const HelpStyles = styled("div")`
  margin: auto;
  text-align: left;
`
const SubFormatStyles = styled("div")`
  background-color: rgba(207, 194, 155, 0.45);
  margin: 0 auto 20px;
  padding: 20px 0;
  text-align: left;
  border: 6px ridge burlywood;
  border-radius: 8px;
  box-shadow: 3px 5px 8px 3px rgba(50, 25, 0, 0.6);
  display: grid;
  justify-content: center;
  grid-template: 
    [row1-start] "s-icon s-title" 40px [row1-end] 
    [row2-start] "s-icon s-date" 30px [row2-end] 
    [row3-start] "s-info s-info" auto [row3-end] 
    / 75px 900px;

  .submission-icon {
      margin: auto 0;
      grid-area: s-icon;
      font-size: 50px;
  }
  .icon-e{
    fill: maroon;
  }
  .icon {
    fill: #434c44;
  }
  .submission-title {
    font-size: 28px;
    grid-area: s-title;
  }
  .submission-date {
    font-size: 20px;
    font-style: italic;
    display: flex;
    justify-content: space-between;
    column-gap: 50px;
    grid-area: s-date;
    p {
      margin: 0;
      padding: 0;
    }
  }
  .submission-info {
    margin-top: 20px;
    grid-area: s-info;
  }

`


const Submissions = ({ data: { HelpSubmissions: { nodes: submissions }}}) => {
  
  function Icon({ isEmergency }) {
    console.log(isEmergency)
    if (isEmergency === true) {
      return <IoSkullSharp 
        class="submission-icon icon-e"
      />
    } return <GiScrollUnfurled
        class="submission-icon icon"
    />
  }

  const regionNames = {
    'waterdeep': 'Sword Coast/Waterdeep',
    'chult': 'Chultan Peninsula',
    'moonshae': 'Moonshae Isles',
    'amn': 'Amn/Athkatla',
    'tethyr': 'Tethyr/Zazesspur',
    'calimshan': 'Calimshan/Calimport',
    'mulhorand': 'Mulhorand/Skuld',
    'unther': 'Unther/Ulthalass',
    'chessenta': 'Chessenta/Cimbar',
    'thay': 'Thay/Bezantur',
    'icewindDale': 'Icewind Dale',
    'underdark': 'Underdark',
    'faerun': 'Faerun',
    'anotherPlane': 'Another Plane',
  }

  return (
    <Layout>

      <HelpStyles>
        <h1>Your current help requests:</h1>

        {submissions.map((sub) => (
          <SubFormatStyles>
            <Icon isEmergency={sub.emergency} />
            <div class="submission-title">
              {sub.name + " in " + (sub.town ? regionNames[sub.region]+ " / " + sub.town : regionNames[sub.region])}
            </div>
            <div class="submission-date">
              <p>{sub.date}</p>
              <p>{sub.timeAgo}</p>
            </div>
            <div class="submission-info">{sub.info}</div>
          </SubFormatStyles>
        ))}
        
      </HelpStyles>
    </Layout>
  )
}

export default Submissions

export const query = graphql`
query HelpQuery {
  HelpSubmissions: allSanityContact(sort: {order: [DESC, ASC], fields: [emergency, date]}) {
    nodes {
      name
      emergency
      date(formatString: "MMMM DD, YYYY")
      timeAgo: date(fromNow: true)
      region
      town
      info
      id
    }
  }
}

`



