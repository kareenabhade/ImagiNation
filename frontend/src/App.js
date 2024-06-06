import './App.css';
import Home from './components/Home/Home';
import Login from './components/Auth/Login';
import ImageUpload from './components/ImageUpload/ImageUpload';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SignUp from './components/Auth/SignUp';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path="/upload" element={<ImageUpload />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
