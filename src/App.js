import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import FAQ from './Pages/FAQ'
import Legal from './Pages/Legal'
import Programs from './Pages/Programs'
import Login from './Pages/Login'

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/faq' element={<FAQ/>}/>
          <Route path='/legal' element={<Legal/>}/>
          <Route path='/programs' element={<Programs/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
