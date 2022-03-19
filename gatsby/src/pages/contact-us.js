import React from "react"
import Layout from "../components/layout"
import styled from "@emotion/styled"

import useForm from "../utils/use-form"
import { REGIONS } from "../utils/all-regions"

const ContactStyles = styled("div")`
  min-height: var(--adjust-page-vh);
  width: 500px;
  margin: auto;
  text-align: left;
  input,
  select,
  textarea, label {
    background: var(--tan-transparent);
    width: 80%;
    margin: auto;
    font-size: 18px;
    font-family: "Gideon Roman";
    display: inline;
    padding: 5px;
  }
  label { display: block; background: unset;}
  fieldset {
    padding: 10;
    background-color: rgba(207, 194, 155, 0.45);
  border: 6px ridge burlywood;
  border-radius: 8px;
  box-shadow: 3px 5px 8px 3px rgba(50, 25, 0, 0.6);
}
`

const Contact = () => {

  const { values, updateValue } = useForm({
    name: "",
    help: "",
    town: "",
    region: "",
    emergency: "false",
  })



  return (
    <Layout>
      <ContactStyles>
        <fieldset>
          <legend> How can we help you?</legend>
          <label htmlFor="name">Who is our point of contact?</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Their name is..."
            required
            value={values.name}
            onChange={updateValue}
          />

          <label htmlFor="town">Township</label>
          <input
            type="text"
            id="town"
            name="town"
            placeholder="Your town"
            value={values.town}
            onChange={updateValue}
          />

          <label htmlFor="region">Region</label>
          <select 
            id="region" 
            name="region" 
            required             
            value={values.region}
            onChange={updateValue}>
            {REGIONS.map((region) => {
              
            return <option value={region.value}>{region.title}</option>

            })}
          </select>

          <label htmlFor="help">How can we help?</label>
          <textarea
            id="help"
            name="help"
            placeholder="Describe your troubles"
            value={values.help}
            onChange={updateValue}
            required
          ></textarea>
          <label htmlFor="emergency">Is someone in immediate danger?</label>
          <input
            type="checkbox"
            id="emergency"
            name="emergency"
            value={values.emergency}
            onChange={updateValue}
          />

          <button type="submit" value="Submit">Submit</button>
        </fieldset>
      </ContactStyles>
    </Layout>
  )
}

export default Contact
