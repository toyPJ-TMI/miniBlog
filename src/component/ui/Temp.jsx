import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import {useNavigate} from 'react-router-dom';

const TempDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 60%;
  margin: 0 auto;
  padding: 8px;
`;

const Img = styled.img`
  width: 100%;
`;

export default function Temp() {
  const nav = useNavigate();
  return (
    <TempDiv>
      <Button title={'홈으로'} onClick={() => nav('/')} />
      <Img src="./img/noresult.png" loading="lazy" />
    </TempDiv>
  );
}
