import React from 'react';

const SurveyFormReview = ({ onCancel }) => {
  return (
    <div>
      <h5>confirm entries</h5>
      <button
        onClick={onCancel}
      >Back</button>
    </div>
  )
}

export default SurveyFormReview;