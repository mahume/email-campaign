import React from "react";
import { NewSurveyBtn, PlusIcon } from './styles';
import SurveyList from '../surveys/SurveyList/index';

const Dashboard = () => {
  return (
    <div>
      <SurveyList />
      <NewSurveyBtn to="/surveys/new">
        <PlusIcon>+</PlusIcon>
      </NewSurveyBtn>
    </div>
  )
}

export default Dashboard