import React from "react"

import Layout from "../components/layout"
import styled from "@emotion/styled"

const PartyStyles = styled("div")`
  height: 100vh;

  font-size: 40px;
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
