import React from 'react';
import styled from 'styled-components';
import PostView from '../page/PostView';

const PostItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid grey;
  font-size: 16px;
  padding: 8px;
  background: white;
  :hover {
    background: lightgrey;
  }
  width: 90%;
  margin: 10px;
`;

const TitleText = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

export default function PostListItems(props) {
  const {post, onClick} = props;

  if (!post) {
    console.log('PostView data:', post);
    return (
      <PostView>
        <TitleText>게시글 데이터를 불러올 수 없습니다.</TitleText>
      </PostView>
    );
  }

  return (
    <PostItem onClick={onClick}>
      <TitleText>
        {post.id}.{post.title}
      </TitleText>
    </PostItem>
  );
}
