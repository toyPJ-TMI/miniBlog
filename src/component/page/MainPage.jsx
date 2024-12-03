import React from 'react';
import styled from 'styled-components';
import Button from '../ui/Button';
import {useNavigate} from 'react-router-dom';
import PostList from '../list/PostList';
import data from '../../data.json';

const FullContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 60%;
  align-items: flex-start;
  justify-content: center;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 60px auto;
  width: 60%;
`;

export default function MainPage() {
  const nav = useNavigate();

  return (
    <FullContainer>
      <Button
        title={'글 작성하기'}
        onClick={() => {
          nav('/post-write');
        }}
      />
      <MainContainer>
        <PostList
          posts={data}
          onClickItem={v => {
            nav(`/post/${v.id}`);
            console.log(v);
          }}
        />
      </MainContainer>
    </FullContainer>
  );
}
