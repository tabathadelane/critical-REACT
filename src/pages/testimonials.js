import React from "react"

import Layout from "../components/layout"
import styled from "@emotion/styled"

const TestimonialsStyle = styled("div")`
  font-size: 40px;
`

const Testimonials = () => {
  return (
    <Layout>
      <TestimonialsStyle class="">
        Hopefully some of our clients will have nice things to say about us.
      </TestimonialsStyle>
    </Layout>
  )
}

export default Testimonials
