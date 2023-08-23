 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Components/Header.jsx";
import Contact from "./Components/Contact.jsx";
import About from "./Components/About.jsx";
import Brand from "./Components/Brand.jsx";
import Services from "./Components/Services.jsx";
import Home from "./Components/Home.jsx";
import Footer from "./Components/Footer.jsx";
import "./style/App.scss";
import "./style/header.scss";
import "./style/colors.scss";
import "./style/home.scss";
import "./style/footer.scss";
import "./style/contact.scss";
import "./style/mediaquery.scss";


 

function App() {
  return (
    <Router>
       <Header/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Services' element={<Services/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Brand' element={<Brand/>}/>
          <Route path='/Contact' element={<Contact/>}/>

        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
