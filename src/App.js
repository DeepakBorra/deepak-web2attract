import './App.css';
import {Navbar}  from './Navbar';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import Workshops  from './pages/Workshops';
import { Collections } from './pages/Collections';
import { Notes } from './pages/Notes';
import Footer from './Footer';

function App() {
  return <div>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/workshops" element={<Workshops/>}/>
      <Route path="collections" element={<Collections/>}/>
      <Route path="/notes" element={<Notes/>}/> 
    </Routes>
    <div>
    <Footer />
    </div>
  </div>
}
export default App;
