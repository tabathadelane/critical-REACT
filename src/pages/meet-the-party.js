import React from "react"

import Layout from "../components/layout"
import styled from "@emotion/styled"

const PartyStyle = styled("div")`
  font-size: 40px;
`

const TheParty = () => {
  return (
    <Layout>
      <PartyStyle class="">
        <p>MEET THE PARTY</p>
        <p>add mini character profiles to this page. perhaps little cards?</p>
      </PartyStyle>
    </Layout>
  )
}

export default TheParty
