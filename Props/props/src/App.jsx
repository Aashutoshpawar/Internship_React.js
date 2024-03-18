import React from "react";
import { ReactDOM } from "react-dom/client";
import "./App.css"
import Product from "./Product";
import Heading from "./Heading";


function App(props){
return(
  <div>
   <Heading/>
    <Product name="iphone"  description= "i phone 11 with best of the specs  "/>
    <Product name="macbook" description= "the best macbook with m1 chip"/> 
    <Product name="laptop"  description= "the lenovo ideapad gaming 3i laptop with rtx 3050"/>
    
  </div>

);
}

export default App;