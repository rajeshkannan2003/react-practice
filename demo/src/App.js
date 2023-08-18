import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/Css/Style.css";
//import  "bootstrap/dist/css/bootstrap.css";
//import "bootstrap/dist/Css/bootstrap.Css";
 

// import Home from "./Components/Home/Home/Home";
import Header from "./Components/Header";
import HookOne from"./Components/Hooks/Hook1";
import HookThree from "./Components/Hooks/Hook3";
import HookTwo from "./Components/Hooks/Hook2";
import HookFour from "../src/Components/Hooks/Hook4";
import HookFive from "../src/Components/Hooks/Hook5"
import HookSix from "./Components/Hooks/Hook6";
import Classthree from "./Components/Class/Class3"
import MyProperty from "./Components/Class/Parentclass";
import Footer from "./Components/Footer";


function App() {
  return (
   <div className="App" >
      
    <BrowserRouter>
       
    <Header/>
    <Routes>
      
   
       {/* <Route exact path="/" element={<Home />} /> */}
       <Route exact path="/Hook1" element={<HookOne />} /> 
       <Route exact path ="/Hook2" element={<HookTwo /> } />
       <Route exact path="/Hook3" element={<HookThree />} />
       <Route exact path="/Hook4" element={<HookFour />} />
       <Route exact path ="/Hook5" element={<HookFive />} />
       <Route exact path="/Hook6" element={<HookSix />} />
       <Route exact path="/Class3" element={<Classthree />} />
       <Route exact path="/props" element={<MyProperty />} />
       
       
       

    </Routes>
      <Footer/>
    </BrowserRouter>

 
    
   </div>
   
);
};

export default App;
