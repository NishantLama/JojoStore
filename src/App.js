import './App.css';
import {Routes, Route } from 'react-router-dom';
import Header from './component/Appheader';
import Footer from './component/Footer';
import Home from './home';
import LoginPage from './login';
import AboutUs from './about';
import ContactUs from './contact';

function App() {
  return (
    <div className='Jojo Store'>
      <Header />
      <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<AboutUs/>} />
              <Route path="/contact" element={<ContactUs/>} />
              <Route path="/login" element={<LoginPage/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;