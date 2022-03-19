import React from "react"

import Layout from "../components/layout"
import styled from "@emotion/styled"

const PartyStyles = styled("div")`
  min-height:var(--adjust-page-vh);
  font-size: 32px;
  p {margin-top: 0;}
`

const TheParty = () => {
  return (
    <Layout>
      <PartyStyles class="">
        <p>MEET THE PARTY</p>
        <p>add mini character profiles to this page. perhaps little cards?</p>
      </PartyStyles>
    </Layout>
  )
}

export default TheParty
