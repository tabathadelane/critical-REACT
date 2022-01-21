import React from "react"

import Layout from "../components/layout"
import styled from "@emotion/styled"

const DeckStyle = styled("div")`
  font-size: 40px;
`

const Unlucky = () => {
  return (
    <Layout>
      <DeckStyle>I'M FEELING UNLUCKY</DeckStyle>
    </Layout>
  )
}

export default Unlucky
