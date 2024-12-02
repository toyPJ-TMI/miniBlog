import React from 'react';
import styled from 'styled-components';

const TextInputs = styled.div`
  border-radius: 8px;
  border: 1px solid grey;
  padding-left: 8px;
  width: 50%;
  ${props =>
    props.height &&
    `
        height: ${props.height}px;
    `};
  font-size: 16px;
`;

export default function TextInput(props) {
  const {height, value, onChange} = props;
  return (
    <TextInputs value={value} onChange={onChange} height={height}></TextInputs>
  );
}
