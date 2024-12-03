import React from 'react';
import styled from 'styled-components';
import data from '../../data.json';
import {useNavigate, useParams} from 'react-router-dom';
import Button from '../ui/Button';

const Wrapper = styled.div`
  display : flex;
  flex-direction : column;
  align-items : flex-start;
  justify-content : center;
  width : 80%;
  margin : 0 auto;
`
const PostContainer = styled.div`
  display : flex;
  flex-direction : column;
  align-items : flex-start;
  justify-content : center;
  width : 100%;
  padding : 12px;
  border : 1px solid grey;
  border-radius : 8px;
`
const PC_title = styled.p`
  font-size : 26px;
  font-weight : 600;
  margin : 12px 0;
`

const PC_context = styled.p`
  font-size : 22px;
  font-weight : 400;
`

const Comment_text = styled.p`
  font-size : 18px;
  font-weight : 600;
  margin : 12px 0;
`

const CommentContainer = styled.div`
  width : 100%;
  padding : 12px;
  border : 1px solid grey;
  border-radius : 8px;
  text-align : left;
`


export default function PostView() {
  const navigate = useNavigate();
  const {postId} = useParams();

  const post = data.find(item => {
    return item.id == postId;
  });
  

  return (
    <Wrapper>
      <Button title={'뒤로 가기'} onClick={() => navigate('/')}/>
         
           
                <PostContainer key={post.id}>
                  <PC_title>{post.title}</PC_title>
                  <PC_context>{post.content}</PC_context>
                   </PostContainer>
          
       <Comment_text>댓글</Comment_text>
       {post.comments.map((comment) => (
        <CommentContainer key={comment.id}>
          {comment.content}
        </CommentContainer>
      ))}
     <Button title={'댓글 작성하기'} onClick={() => navigate('/')}/>  
    </Wrapper>
  );
}
