import React from 'react';
import { ErrorMessage } from "./styles";

const SurveyField = ({ label, input, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} />
      <ErrorMessage>
        {touched && error}
      </ErrorMessage>
    </div>
  )
}

export default SurveyField;