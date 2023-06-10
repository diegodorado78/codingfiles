import {HashRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import { Menu } from "./components/Menu";
import { BlogPage } from './components/BlogPage';
import { HomePage } from './components/HomePage';
import { ProfilePage } from './components/ProfilePage';

function App() {

  return (
    <>
      <HashRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<p> Page not found :( </p>} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App
