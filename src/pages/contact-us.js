import React from "react"

import Layout from "../components/layout"
import styled from "@emotion/styled"

const ContactStyle = styled("div")`
  font-size: 40px;
  width: 500px;
  margin: auto;

  input,
  select,
  textarea {
    width: 100%;
    display: inline-block;
  }
`

const Contact = () => {
  return (
    <Layout>
      <ContactStyle>
        This will be a form!
        <form action="">
          <label for="name">Who is our point of contact?</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Their name is..."
          />

          <label for="lname">Township</label>
          <input type="text" id="town" name="town" placeholder="Your town" />

          <label for="region">Region</label>
          <select id="region" name="region">
            <option value="Waterdeep">Greater Waterdeep</option>
            <option value="Chult">Chult</option>
            <option value="Underdark">Underdark</option>
          </select>

          <label for="help">How can we help?</label>
          <textarea
            id="help"
            name="help"
            placeholder="Describe your troubles"
          ></textarea>

          <input type="submit" value="Submit" />
        </form>
      </ContactStyle>
    </Layout>
  )
}

export default Contact
