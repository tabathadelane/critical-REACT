import { useState } from 'react';

export default function useForm(defaults) {
  const [values, setValues] = useState(defaults);
  console.log({values})

  function updateValue(e) {
    // console.log(e.target)
    let { value } = e.target;
    if (e.target.type === 'number') {
      value = parseInt(value);
    }
    if (e.target.name === 'emergency') {
      value = value === "true" ? false : true;
    }
    setValues({
      ...values,
      [e.target.name]: value,
    });
  }

  async function submitForm(e) {
    e.preventDefault();
    console.log("SUBMIT")
    console.log("E", e.target.emergency.value);
    const value = e.target;
    const date = (new Date()).toISOString();
    console.log(date);
    console.log(process.env.GATSBY_SANITY_HTTP_TOKEN);


    const res = await fetch(
      "https://wquwjb1d.api.sanity.io/v2022-03-18/data/mutate/production",
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.GATSBY_SANITY_HTTP_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "mutations": [
            {
              "create": {
                "_type": "contact",
                "name": value.name.value,
                "info": value.help.value,
                "town": value.town.value,
                "region": value.region.value,
                'emergency': value.emergency.value,
                "date": date
              }
            }
          ]
        }),
      }
    );
    let resJson = await res.json();
    console.log("Res", resJson);

    if (res.status >= 400 && res.status < 600) {
      console.log("Error-----------------", resJson);
    } else {
      console.log('We received your order!');
    }
  }

  return { values, updateValue, submitForm };
}
