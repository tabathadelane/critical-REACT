import React from "react"
import Layout from "../components/layout"
import styled from "@emotion/styled"

import useForm, { submitForm } from "../utils/use-form"
import { REGIONS } from "../utils/all-regions"

import { FaSkullCrossbones } from "react-icons/fa"

const ContactStyles = styled("form")`
  --input-height: 2rem;
  max-width: 500px;
  margin: auto;
  padding: 0 30px;
  text-align: left;
  legend {
    font-size: 24px;
    text-align: center;
    margin: auto;
    margin-bottom: 1rem;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    filter: none;
    border: 0.5px solid var(--dark-purple) !important;
    color: var(--dark-purple) !important;
    -webkit-text-fill-color: var(--dark-purple) !important;
    -webkit-box-shadow: 0 0 0px 1000px var(--tan) inset !important;
  }
  input,
  select,
  textarea,
  label {
    background-color: var(--tan-transparent);
    margin: auto;
    font-family: "Gideon Roman";
    font-size: 18px;
    display: inline;
    color: var(--dark-purple);
    font-weight: bold;
  }
  input,
  select,
  textarea {
    width: 100%;
    margin-bottom: var(--input-height);
    padding: 0;
    border: none;
    border-radius: 4px;
    text-indent: 5px;
    ::placeholder {
      color: rgba(50, 25, 0, 0.4);
    }
  }
  input,
  select {
    height: var(--input-height);
  }
  select {
    color: rgba(50, 25, 0, 0.6);
  }
  textarea {
    height: 6rem;
    margin-top: 10px;
  }
  label {
    display: block;
    background: unset;
    text-shadow: 0.25px 0 var(--dark-purple);
  }
  #checkbox-label {
    position: relative;
    display: flex;
    margin-bottom: var(--input-height);
    line-height: var(--input-height);
    width: 100%;

    svg {
      font-size: 18px;
      margin: auto 10px auto 0;
    }
    p {
      padding-right: 75px;
    }
  }
  #emergency {
    cursor: pointer;
    opacity: 0;
    width: 0;
    height: 0;
  }
  #checkmark {
    position: absolute;
    cursor: pointer;
    margin: auto 0;
    top: 0;
    right: 0;
    bottom: 0;
    height: 2rem;
    width: 4rem;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    background-color: rgb(255, 251, 235);
    border-radius: 4px;
    :before {
      position: absolute;
      content: "";
      height: 1.6rem;
      width: 1.6rem;
      left: 0.2rem;
      bottom: 0.2rem;
      background-color: var(--tan-transparent);
      -webkit-transition: 0.4s;
      border-radius: 4px;
      transition: 0.4s;
    }
  }

  #emergency:checked + #checkmark {
    background-color: #6e2525;
  }

  #emergency:checked + #checkmark:before {
    -webkit-transform: translateX(var(--input-height));
    -ms-transform: translateX(var(--input-height));
    transform: translateX(var(--input-height));
  }

  button {
    cursor: pointer;
    width: 100%;
    font-size: 18px;
    height: var(--input-height);
    border: 0;
    border-radius: 4px;
    color: var(--dark-purple);
    background: var(--tan);
    :hover {
      background: var(--dark-purple);
      color: var(--tan);
      color: ;
    }
  }
  fieldset {
    padding: 20px;
    margin: auto;
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
    region: "waterdeep",
    emergency: "false",
  })

  const { submitForm } = useForm(values)

  return (
    <Layout>
      <ContactStyles onSubmit={submitForm}>
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
            placeholder="Your town is called..."
            value={values.town}
            onChange={updateValue}
          />

          <label htmlFor="region">Region</label>
          <select
            id="region"
            name="region"
            required
            value={values.region}
            onChange={updateValue}
          >
            {REGIONS.map(region => {
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
          <label id="checkbox-label" htmlFor="emergency">
            <FaSkullCrossbones />
            <p>Is someone in immediate danger?</p>
            <input
              type="checkbox"
              id="emergency"
              name="emergency"
              value={values.emergency}
              onChange={updateValue}
            />
            <span id="checkmark"></span>
          </label>

          <button
            aria-label="submit form"
            class="pop"
            type="submit"
            value="Submit"
          >
            Send request
          </button>
        </fieldset>
      </ContactStyles>
    </Layout>
  )
}

export default Contact
