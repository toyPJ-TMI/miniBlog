import {useState} from 'react';
import PostView from './component/list/PostListItems';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainPage from './component/page/MainPage';
import styled from 'styled-components';

const TextTitle = styled.p`
    font-size:24px;
    text-align : center;
    font-weight : bold;
    `

function App() {
  return (
    <Router>
      <TextTitle>미니 블로그 프로젝트</TextTitle>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/post/:postId" element={<PostView />} />
      </Routes>
    </Router>
  );
}

export default App;
