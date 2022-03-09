import React from "react"

import Layout from "../components/layout"
import styled from "@emotion/styled"

const DeckStyles = styled("div")`
  font-size: 40px;
`

const Unlucky = () => {
  return (
    <Layout>
      <DeckStyles>I'M FEELING UNLUCKY</DeckStyles>
    </Layout>
  )
}

export default Unlucky
