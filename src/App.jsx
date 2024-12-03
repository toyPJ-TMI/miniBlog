import {useState} from 'react';
import PostView from './component/list/PostListItems';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainPage from './component/page/MainPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/post/:postId" element={<PostView />} />
      </Routes>
    </Router>
  );
}

export default App;
