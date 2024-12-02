import React from 'react';
import styled from 'styled-components';

const Btn = styled.div`
  background-color: grey;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
  width: 25%;
  cursor: pointer;
`;

export default function Button(props) {
  const {title, onClick} = props;
  return <Btn onClick={onClick}>{title || 'button'}</Btn>;
}
