import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

import Layout from "../components/layout"
import styled from "@emotion/styled"

const SloganStyle = styled("div")`
  font-size: 40px;
`

const HomePage = () => {
  return (
    <Layout>
      <SloganStyle>
        <h3>"Providing minor solutions to major problems!"</h3>
        <p>
          Formally known as the Minor Solutions, we self adopted this new name
          after a few back-to-back combat encounters resulted in our enemies
          trying to flee only to be met with critical strikes in return! Please
          don't confuse us for that other over-commercialized group.
        </p>
      </SloganStyle>
    </Layout>
  )
}

export default HomePage
