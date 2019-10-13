import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import SurveyField from '../SurveyField/index';
import validateEmails from '../../../utils/validateEmails';
import formFields from '../formFields';

class SurveyForm extends Component {
  renderFields() {
    return formFields.map(({ label, name }) => (
      <Field 
        component={SurveyField} 
        type="text" 
        label={label} 
        name={name} 
        key={name}
      />
    ))
  }

  render() {
    return (
      <form 
        onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}
      >
        {this.renderFields()}
        <Link to="/surveys">Cancel</Link>
        <button type="submit">Next</button>
      </form>
    )
  }
}

function validate(values) {
  const errors = {};
  
  errors.recipients = validateEmails(values.recipients || '');

  formFields.forEach(({ name, error }) => {
    if (!values[name]) {
      errors[name] = error;
    }
  })
  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false,
})(SurveyForm);