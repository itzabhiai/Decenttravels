
import './App.css';

import Navv from './Conatiner/Nv/Navv';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Conatiner/Pages/Home';
import Footer from './Conatiner/Comonets/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loder from './Conatiner/Comonets/Loder';
import PopPlace from './Conatiner/Pages/PopPlace';
import Watsapp from './Conatiner/Comonets/Watsapp';
import Faq from './Conatiner/Pages/Faq';
import Rev from './Conatiner/Comonets/Rev';
import Privecy from './Conatiner/Pages/Privecy';
import Guidline from './Conatiner/Pages/Guidline';
import About from './Conatiner/Pages/About';
import Book from './Conatiner/Pages/Book';
import CardVertical from './Conatiner/Comonets/CardVertical';
import ScrollToTop from './Conatiner/Comonets/ScrollToTop';
import ContectUs from './Conatiner/Pages/ContectUs';
import Card2 from './Conatiner/Comonets/Card2';
import Dcity from './Conatiner/Pages/Dcity';
import Abudhabi from './Conatiner/Pages/Abudhabi';
import Burnerbro from './Conatiner/Pages/Burnerbro';
import Dubaiframe from './Conatiner/Pages/Dubaiframe';
import Limosin from './Conatiner/Pages/Limosin';
import Musandam from './Conatiner/Pages/Musandam';
import Imageworld from './Conatiner/Pages/Imageworld';
import Atlantic from './Conatiner/Pages/Atlantic';
import Ferrari from './Conatiner/Pages/Ferrari';
import Carousel2 from './Conatiner/Pages/Carousel2';
import ExByTheme from './Conatiner/Pages/ExByTheme';
import Activiti from "./Activities/Activiti"
import Desert from './Activities/Desert';
import Accu from './Activities/Accu';
import Louvre from './Activities/Louvre';
import Dolphin from './Activities/Dolphin';
import Miracle from './Activities/Miracle';
import City from './City/City';
import Kids from './Kids/Kids';
import Wild from './Activities/Wild';
import Snow from './Activities/Snow';
import Family from './Activities/Family';
import Couple from './Activities/Couple';
import Dow from './Activities/Dow';
import Marina from './Activities/Marina';
import ImageGallery from './Gelery/ImageGallery';


function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
    <Navv/>
    <ScrollToTop/>
    <Watsapp/>
      
      
      
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/loader" element={<Loder />}></Route>
        <Route path="/Top-Place" element={<PopPlace />}></Route>
        <Route path="/faq" element={<Faq />}></Route>
        <Route path="/review" element={<Rev />}></Route>
        <Route path="/privecy" element={<Privecy />}></Route>
        <Route path="/guid" element={<Guidline />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/book" element={<Book />}></Route>
        <Route path="/Card" element={<CardVertical />}></Route>
        <Route path="/Cards/:1/book" element={<CardVertical />}></Route>
        <Route path="/contect-us" element={<ContectUs />}></Route>
        <Route path="/card2" element={<Card2 />}></Route>
        <Route path="/dubai-city" element={<Dcity />}></Route>
        <Route path="/abudhabi-city" element={<Abudhabi />}></Route>
        <Route path="/burner-bro" element={<Burnerbro />}></Route>
        <Route path="/dubai-frame" element={<Dubaiframe />}></Route>
        <Route path="/limousine" element={<Limosin />}></Route>
        <Route path="/mussandam" element={<Musandam />}></Route>
        <Route path="/image-world" element={<Imageworld />}></Route>
        <Route path="/atlantic-park" element={<Atlantic/>}></Route>
        <Route path="/ferrari-ride" element={<Ferrari/>}></Route>
        <Route path="/cr" element={<Carousel2/>}></Route>
        <Route path="/ex" element={<ExByTheme/>}></Route>
        <Route path="/activites" element={<Activiti/>}></Route>
        <Route path="/desert" element={<Desert/>}></Route>
        <Route path="/aquarium" element={<Accu/>}></Route>
        <Route path="/louvre" element={<Louvre/>}></Route>
        <Route path="/dolphin" element={<Dolphin/>}></Route>
        <Route path="/mirical" element={<Miracle/>}></Route>
        <Route path="/city" element={<City/>}></Route>
        <Route path="/kids" element={<Kids/>}></Route>
        <Route path="/wild" element={<Wild/>}></Route>
        <Route path="/snow" element={<Snow/>}></Route>
        <Route path="/family" element={<Family/>}></Route>
        <Route path="/couple" element={<Couple/>}></Route>
        <Route path="/dow" element={<Dow/>}></Route>
        <Route path="/marina" element={<Marina/>}></Route>
        <Route path="/gelery" element={<ImageGallery/>}></Route>













        


        




        








      </Routes>
      
      <Footer/>
    </BrowserRouter>


    </div>
  );
}

export default App;
