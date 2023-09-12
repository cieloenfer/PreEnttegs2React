import Title from './components/Title';
import './App.css'
import carrito from "./assets/carrito.svg";
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import { ChakraProvider } from '@chakra-ui/react';
import ItemListContainer from './Components/itemListContainer';


function App() {

 return(
    <BrowserRooter>
    <NavBar />
    <h1>Home</h1>
    <route path="/" element={<HOME/>}/>
      <Routes>
        <Route exact path = "/" element = {<ItemListContainer />} />
        <Route exact path = '/category/:categoryName' element = 
        {<ItemListContainer />} />
      </Routes>
   </BrowserRooter>
 );
  
}
     





