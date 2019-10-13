import React from "react";
import { NewSurveyBtn, PlusIcon } from './styles';

const Dashboard = () => {
  return (
    <div>
      Dashboard
      <NewSurveyBtn to="/surveys/new">
        <PlusIcon>+</PlusIcon>
      </NewSurveyBtn>
    </div>
  )
}

export default Dashboard