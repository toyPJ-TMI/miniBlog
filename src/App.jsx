import {Suspense, lazy} from 'react';
const PostView = lazy(() => import('./component/list/PostListItems'));
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
const MainPage = lazy(() => import('./component/page/MainPage'));
import styled from 'styled-components';
const PostWrite = lazy(() => import('./component/page/PostWrite'));
const Temp = lazy(() => import('./component/ui/Temp'));

const TextTitle = styled.p`
  font-size: 24px;
  text-align: center;
  font-weight: bold;
`;

function App() {
  return (
    <Router>
      <Suspense fallback={<Temp />}>
        <TextTitle>미니 블로그 프로젝트</TextTitle>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="post/:postId" element={<PostView />} />
          <Route path="post/write" element={<PostWrite />} />
          <Route path="temp" element={<Temp />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
