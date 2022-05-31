import React from "react"
import Layout from "../components/layout"
import styled from "@emotion/styled"

import { FaSkull } from "react-icons/fa"

const The404Styles = styled("div")`
  min-height: var(--adjust-page-vh);
  font-size: 32px;
`
const FrameStyles = styled("div")`
  width: 600px;
  margin: 0 auto;
  padding: 20px !important;
  background-color: rgba(207, 194, 155, 0.45);
  ${"" /* border: 6px ridge burlywood; */}
  border-radius: 8px;
  ${"" /* box-shadow: 3px 5px 8px 3px rgba(50, 25, 0, 0.6); */}
  img {
    width: 400px;
    filter: hue-rotate(15);
    margin: -40px 0 0;
  }
  p {
    margin-top: 0;
    font-size: 24px;
  }
  h2 {
    font-size: 92px;
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
    height: 0.8em;
  }
`

const fourOhFour = () => {
  return (
    <Layout>
      <The404Styles>
        <FrameStyles>
          <h2>
            4
            <FaSkull class="icon">
              <feDropShadow></feDropShadow>
            </FaSkull>
            4
          </h2>
          <img src={`/images/404.png`} alt="mimic face - 404 page" />
          <p>AHK!</p>
          <p> It appears this isn't the page you were looking for.</p>
        </FrameStyles>
      </The404Styles>
    </Layout>
  )
}

export default fourOhFour
// <p>
//   It appears the page has been banished from this plane of existence.
// </p>
// <p>
//   However, this spell usually only lasts about a minute. Please try
//   again soon.{" "}
// </p>
