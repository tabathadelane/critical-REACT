import React from "react"

import Layout from "../components/layout"
import styled from "@emotion/styled"

const TestimonialsStyles = styled("div")`
  height: 100vh;

  font-size: 40px;
`

const Testimonials = () => {
  return (
    <Layout>
      <TestimonialsStyles class="">
        Hopefully some of our clients will have nice things to say about us.
      </TestimonialsStyles>
    </Layout>
  )
}

export default Testimonials
