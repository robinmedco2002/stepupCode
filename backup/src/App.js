
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import TopBar from './components/header/topBar';
import Footer from './components/footer/Footer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import About from './components/pages/About';
import Development from './components/pages/services/Development';
import WordPress from './components/pages/services/WordPress';
import Ecommerce from './components/pages/services/Ecommerce';
import Customcms from './components/pages/services/Customcms';
import Digital from './components/pages/services/Digital';
import Creative from './components/pages/services/Creative';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Home from './components/pages/home/Home';


function App() {
  return (
    
    <>
<BrowserRouter>
      <TopBar />
      <Header />
      
    <Routes> 
       
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/development" element={<Development />} />
      <Route path="/wordpress" element={<WordPress />} />
      <Route path="/ecommerce" element={<Ecommerce />} />
      <Route path="/customcms" element={<Customcms />} />
      <Route path="/digital" element={<Digital />} />
      <Route path="/creative" element={<Creative />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
</Routes>

      <Footer />

</BrowserRouter>
    </>
  );
}

export default App;
