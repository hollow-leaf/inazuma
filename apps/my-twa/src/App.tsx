import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './home';
import Market from './market';
import Profile from './profile';
import Navbar from './components/navbar';
import Footer from './components/footer';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/market" element={<Market />} />
          <Route path="/profile" element={<Profile />} />
      </Routes>
    <Footer/>  
    </BrowserRouter>
  );
};

export default App;