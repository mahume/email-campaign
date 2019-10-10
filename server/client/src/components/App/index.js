import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { GlobalStyle } from './styles';

import Header from '../Header/index';
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>

const App = () => {
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

export default App;