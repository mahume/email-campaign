import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NewSurveyBtn = styled(Link)`
  background-color: salmon;
  border-radius: 100%;
  width: 60px;
  height: 60px;
  margin: 0;
  padding: 0;
  text-decoration: none;
  
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PlusIcon = styled.div`
  color: white;
  font-size: 40px;
`