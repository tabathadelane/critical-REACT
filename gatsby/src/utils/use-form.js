import { useState } from 'react';

export default function useForm(defaults) {
  const [values, setValues] = useState(defaults);
  console.log(defaults, {values})

  function updateValue(e) {
    console.log(e.target)
    let { value } = e.target;
    if (e.target.type === 'number') {
      value = parseInt(value);
    }
    if (e.target.name === 'emergency') {
      value = value === "true" ? false : true;
      console.log("VALUE:", typeof(value))
    }
    setValues({
      ...values,
      [e.target.name]: value,
    });
  }

  return { values, updateValue };
}
