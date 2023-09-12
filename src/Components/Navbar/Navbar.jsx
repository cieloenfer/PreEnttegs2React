import { Menu ,MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import CartWidget from '../CartContent/CartWidget'; 
import Navbar from "../Navbar/Navbar.jsx"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartWidget from "./CartWidget";
import { NavLink, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'


 export default function NavBar(){
  return (
    <nav>
    <div>
    <h3>Iuris Help</h3>
    <CartWidget/>
    <BrowserRouter>
    <Routes>
    <Route path='' element={<HOME/>}/>
    <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Actions
  </MenuButton>
  <MenuList>
    <MenuItem>Servicios Legales</MenuItem>
    <MenuItem>Mediacion</MenuItem>
    <MenuItem>Asesorias Copropiedad y convivencia</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>
</Routes>
</BrowserRouter>
</div>
</nav>

  );
  }





