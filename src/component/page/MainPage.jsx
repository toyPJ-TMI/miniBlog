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
  margin: 20px auto;
  width: 100%;
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
          onClickItem={(item) => {
            nav(`/post/${item.id}`);
        }}
        />
      </MainContainer>
    </FullContainer>
  );
}
