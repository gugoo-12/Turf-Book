import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Whyus from './Whyus';
import Contact from './Contact';
import Navbar from './Navbar'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Whyus' element={<Whyus />} />
          <Route path='/Contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
