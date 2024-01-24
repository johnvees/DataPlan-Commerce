import './assets/scss/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PackagePage from './pages/PackagePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />}></Route>
        <Route path="/home" element={<LandingPage />}></Route>
        <Route path="/packages" element={<PackagePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
