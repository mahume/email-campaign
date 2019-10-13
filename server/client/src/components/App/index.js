import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { GlobalStyle } from './styles';

import Header from '../Header/index';
import Landing from '../Landing/index';
import Dashboard from '../Dashboard/index';
const SurveyNew = () => <h2>SurveyNew</h2>


class App extends Component {
  
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return(
      <div>
        <BrowserRouter>
          <Fragment>
            <GlobalStyle />
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </Fragment>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(null, actions)(App);