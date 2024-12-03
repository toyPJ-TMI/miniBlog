import React from 'react';
import styled from 'styled-components';

const TextInputs = styled.textarea`
  border-radius: 8px;
  border: 1px solid grey;
  padding-left: 8px;
  width: 50%;
  height: ${props => (props.height ? `${props.height}px` : 'auto')};
  font-size: 16px;
`;

export default function TextInput(props) {
  const {height, value, onChange} = props;
  return (
    <TextInputs value={value} onChange={onChange} height={height}></TextInputs>
  );
}
