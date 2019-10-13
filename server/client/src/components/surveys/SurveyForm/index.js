import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from '../SurveyField/index';

const FIELDS = [
  { label: 'Survey Title', name: 'title' },
  { label: 'Subject Line', name: 'subject' },
  { label: 'Email Body', name: 'body' },
  { label: 'Recipient List', name: 'emails' },
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
      <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
        {this.renderFields()}
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'surveyForm',
})(SurveyForm);