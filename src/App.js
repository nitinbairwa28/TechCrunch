// import logo from './logo.svg';
import './App.css';
import FirstComp from './components/first-comp';
import About from './components/about';
// import SecondComp from './components/second-comp';
import Counter from './components/counter';
import Contact from './components/contact';
// import StyleComp from './components/styleComp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import ParentComp from './components/parentComp';
import Portfolio from './components/portfolio';

import BlogList from './components/blogList';
import Login from './components/Login';
import AgeCalculator from './components/ageCalculator';
import Books from './components/books';
import SecondComp from './components/second-comp';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar />
     
     <Routes>
     
      <Route path="/" element={<FirstComp/>}/>
      <Route path="/counter" element={<Counter/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/portfolio" element={<Portfolio/>}/>
      <Route path="/props" element={<ParentComp/>}/>
      <Route path="/bloglist" element={<BlogList/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="*" element={<FirstComp/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/agecalculator" element={<AgeCalculator/>}/>
      <Route path="/books" element={<Books/>}/>
      <Route path="/secondcomponent" element={<SecondComp/>}/>






      </Routes>
      <footer>
         <p>&copy; {new Date().getFullYear()} TechCrunch . All Rights Reserved.</p>
      </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
