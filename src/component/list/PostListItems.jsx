import React from 'react';
import styled from 'styled-components';

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
  width : 90%;
  margin : 10px;
`;

const TitleText = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

export default function PostListItems(props) {
  const {post, onClick} = props;

  console.log('PostListItems props.onClick:', onClick);
  console.log('PostListItems props.post:', post);
  return (
    <PostItem onClick={onClick}>
      <TitleText>
        {post.id}.{post.title}
        </TitleText>
    </PostItem>
  );
}
