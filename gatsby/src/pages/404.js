import React from "react"
import Layout from "../components/layout"
import styled from "@emotion/styled"

import { FaSkull } from "react-icons/fa"

const The404Styles = styled("div")`
  min-height:var(--adjust-page-vh);
  font-size: 32px;
`
const FrameStyles = styled("div")`
  width: 600px;
  margin: 0 auto;
  padding: 20px !important;
  background-color: rgba(207, 194, 155, 0.45);
  border: 6px ridge burlywood;
  border-radius: 8px;
  box-shadow: 3px 5px 8px 3px rgba(50, 25, 0, 0.6);
  p {margin-top: 0; font-size: 24px;}
  h2 {
    margin: 0 0 20px; 
    font-size:64px; 
    display: flex; 
    align-items: center; 
    justify-content: center;
    text-shadow: none;
    font-weight: bolder;
    -webkit-text-stroke-width: 3px;
    -webkit-text-stroke-color: var(--dark-purple);
    }
  .icon {   
    margin: auto 0; 
    height: .8em; ;
}
`


const TheParty = () => {
  return (
    <Layout>
      <The404Styles>
      <FrameStyles>
        <h2>4<FaSkull class="icon"><feDropShadow></feDropShadow></FaSkull>4</h2>
        <p>It appears the page has been banished from this plane of existence.</p>
        <p>However, this spell usually only lasts about 10 rounds of combat. Please try again soon. </p>
        </FrameStyles>
      </The404Styles>
    </Layout>
  )
}

export default TheParty
