import React from 'react';
import styled from 'styled-components';
import PostListItems from './PostListItems';

const PostLists = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid grey;
  width : 90%;
`;

export default function PostList(props) {
  const {posts, onClickItem} = props;

  return (
    <PostLists>
      {posts.map((post) => {
        
        return (
          <PostListItems
            key={post.id}
            post={post}
            onClick={() => {
              onClickItem(post);
            }}
          />
        );
      })}
    </PostLists>
  );
}
