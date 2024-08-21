import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import FrontPage from './pages/FrontPage';
import Leaderboard from './pages/Leaderboard';
import PatchNotes from './pages/PathNotes';
import Blog from './pages/Blog';
import Stores from './pages/Stores';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FrontPage />} />
        <Route path='/leaderboard' element={<Leaderboard />} />
        <Route path='/patchNotes' element={<PatchNotes />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/stores' element={<Stores />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
