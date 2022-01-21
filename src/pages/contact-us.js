import React from "react"

import Layout from "../components/layout"
import styled from "@emotion/styled"

const ContactStyle = styled("div")`
  font-size: 40px;
`

const Contact = () => {
  return (
    <Layout>
      <ContactStyle>This will be a form!</ContactStyle>
    </Layout>
  )
}

export default Contact
