import React from 'react';
import styled from 'styled-components';

const Btn = styled.div`
  background-color: #d3d3d3;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
  width: 15%;
  margin: 20px 0;
  cursor: pointer;
`;

export default function Button(props) {
  const {title, onClick} = props;
  return <Btn onClick={onClick}>{title || 'button'}</Btn>;
}
