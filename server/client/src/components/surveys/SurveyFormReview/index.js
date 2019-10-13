import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import formFields from '../formFields';
import * as actions from '../../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = formFields.map(({ label, name }) => (
    <div key={name}>
      <label htmlFor="">{label}</label>
      <div>
        {formValues[name]}
      </div>
    </div>
  ))

  return (
    <div>
      <h5>confirm entries</h5>
      {reviewFields}
      <button onClick={onCancel}>Back</button>
      <button onClick={() => submitSurvey(formValues, history)}>Send Survey</button>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values
  }
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));