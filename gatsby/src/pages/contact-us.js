import React from "react"

import Layout from "../components/layout"
import styled from "@emotion/styled"

const ContactStyles = styled("div")`
  height: 100vh;
  width: 500px;
  margin: auto;
  text-align: left;
  input,
  select,
  textarea {
    margin: auto;
    font-size: 18px;
    font-family: "Gideon Roman";
    width: 100%;
    display: inline-block;
    padding: 5px;
  }
`

const Contact = () => {
  return (
    <Layout>
      <ContactStyles>
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
      </ContactStyles>
    </Layout>
  )
}

export default Contact
