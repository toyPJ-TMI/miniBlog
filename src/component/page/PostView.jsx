import React from 'react';
import styled from 'styled-components';
import data from '../../data.json';
import {useNavigate, useParams} from 'react-router-dom';
import Button from '../ui/Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
`;
const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  padding: 12px;
  border: 1px solid grey;
  border-radius: 8px;
`;
const PC_title = styled.p`
  font-size: 26px;
  font-weight: 600;
  margin: 12px 0;
`;

const PC_context = styled.p`
  font-size: 22px;
  font-weight: 400;
`;

const Comment_text = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin: 12px 0;
`;

const CommentContainer = styled.div`
  width: 100%;
  padding: 12px;
  border: 1px solid grey;
  border-radius: 8px;
  text-align: left;
  margin: 7px 0;
`;

export default function PostView() {
  const nav = useNavigate();
  const {postId} = useParams();

  const post = data.find(item => item.id === Number(postId));

  if (!post) {
    return <div>해당 게시글을 찾을 수 없습니다.</div>;
  }

  return (
    <Wrapper>
      <Button title={'뒤로 가기'} onClick={() => nav('/')} />

      <PostContainer key={post.id}>
        <PC_title>{post.title}</PC_title>
        <PC_context>{post.content}</PC_context>
      </PostContainer>

      <Comment_text>댓글</Comment_text>
      {post.comments.map(v => (
        <CommentContainer key={v.id}>▶{v.content}</CommentContainer>
      ))}
      <Button title={'댓글 작성'} onClick={() => nav('/post/write')} />
    </Wrapper>
  );
}
