import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import SurveyField from '../SurveyField/index';
import validateEmails from '../../../utils/validateEmails';

const FIELDS = [
  { label: 'Survey Title', name: 'title', error: 'You must provide a title.' },
  { label: 'Subject Line', name: 'subject', error: 'You must provide a subject line.' },
  { label: 'Email Body', name: 'body', error: 'You must provide an email body.' },
  { label: 'Recipient List', name: 'emails', error: 'You must provide a recipient list.' },
]
class SurveyForm extends Component {
  renderFields() {
    return FIELDS.map(({ label, name }) => (
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
  
  errors.emails = validateEmails(values.emails || '');

  FIELDS.forEach(({ name, error }) => {
    if (!values[name]) {
      errors[name] = error;
    }
  })
  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
})(SurveyForm);