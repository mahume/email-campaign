import React, { Component } from 'react';
import SurveyForm from '../SurveyForm/index';
import SurveyFormReview from '../SurveyFormReview/index';


class SurveyNew extends Component {
  state = { showFormReview: false }
  
  renderContent() {
    if (this.state.showFormReview) {
      return (
        <SurveyFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    } else {
      return (
        <SurveyForm
          onSurveySubmit={() => this.setState({ showFormReview: true })}
        />
      ) 
    }
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    )
  }
}

export default SurveyNew;