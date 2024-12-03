import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import Button from '../ui/Button';
import TextInput from '../ui/TextInput';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
`;

const Text = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin: 12px 0;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 50%;
  margin: 0 auto;
`;

export default function PostWrite() {
  const nav = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const ChangeTitle = e => {
    setTitle(e.target.value);
  };

  const ChangeContent = e => {
    setContent(e.target.value);
  };

  return (
    <Container>
      <Wrapper>
        <Container>
          <Button title={'뒤로'} onClick={() => nav('/')} />
        </Container>
        <Container>
          <Text>제목</Text>
        </Container>

        <TextInput value={title} onChange={ChangeTitle} height={30} />
        <Container>
          <Text>내용</Text>
        </Container>
        <TextInput value={content} onChange={ChangeContent} height={60} />
        <Container>
          <Button title={'작성'} onClick={() => nav('/temp')} />
        </Container>
      </Wrapper>
    </Container>
  );
}
