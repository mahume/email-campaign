import React from 'react';

const SurveyField = ({ label, input }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} />
    </div>
  )
}

export default SurveyField;