import React from "react"

import Layout from "../components/layout"
import styled from "@emotion/styled"

import {
  RiDoubleQuotesL as LQuote,
  RiDoubleQuotesR as RQuote,
} from "react-icons/ri"

const TestimonialsStyles = styled("div")`
  padding-bottom: 100px;
  > div:nth-child(even) {
    margin-left: 200px;
  }
  h1 {
    font-family: "Montserrat";

    text-align: left;
    padding-bottom: 30px;
  }
`
const QuoteStyles = styled("div")`
  font-size: 20px;
  background-color: rgba(207, 194, 155, 0.45);
  width: 800px;
  margin: 0 0 40px;
  padding: 20px;
  text-align: left;
  border: 4px ridge burlywood;
  border-radius: 8px;
  box-shadow: 3px 5px 8px 3px rgba(50, 25, 0, 0.6);

  div {
    text-align: center;
  }

  svg {
    display: inline;
    padding: 5px;
    margin: auto;
  }

  p {
    margin: auto;
    display: inline;
    text-align: center;
  }
  .author {
    padding-right: 50px;
    font-size: 24px;
    display: block;
    text-align: right;
  }
`
const quoteList = [
  {
    author: "Narg",
    quote:
      "My house and tavern were destroyed in the process, but I guess they saved the city.",
  },
  {
    author: "Trelesarra",
    quote:
      "They were the heroes I needed when my brain was nearly sucked out by a mindflayer.",
  },
  { author: "Bill", quote: "Goo goo gaa gaa." },
  { author: "Ghost of Glom", quote: "They saved me, but then I died anyways." },
  {
    author: "Vernis",
    quote:
      "They really are an odd crew, but they took on a job to save the realm from giants, so they can't be that bad.",
  },
]

const Testimonials = () => {
  return (
    <Layout>
      <TestimonialsStyles>
        <h1>Hear what our grateful, surving clients have to say!</h1>
        {quoteList.map(q => (
          <QuoteStyles>
            <div>
              <LQuote />
              <p class="quote">{q.quote}</p>
              <RQuote />
            </div>
            <p class="author">
              <i>
                <b>-</b> {q.author}
              </i>
            </p>
          </QuoteStyles>
        ))}
      </TestimonialsStyles>
    </Layout>
  )
}

export default Testimonials
