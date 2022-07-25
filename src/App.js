import './App.css';
import ModelDetail from './components/ModelDetail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Discover from './components/Discover'
import Footer from './components/Footer'
import Model911 from './components/Model911';
import ModelTaycan from './components/ModelTaycan';
import ModelPanamera from './components/ModelPanamera';
import ModelMacan from './components/ModelMacan';
import ModelCayenne from './components/ModelCayenne';


function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="718" element={<ModelDetail />} />
          <Route path="911" element={<Model911/>} />
          <Route path="Taycan" element={<ModelTaycan/>} />
          <Route path="Panamera" element={<ModelPanamera/>} />
          <Route path="Macan" element={<ModelMacan/> } />
          <Route path="Cayenne" element={<ModelCayenne/>} />
        </Routes>
        <Discover/>
        <Footer/>
      </Router>
       
        
    </>
  );
}

export default App;
