
import { AppBar,
         Toolbar,
         Typography,
 } from '@mui/material';
import { useState } from 'react';
import {FiSearch, FiShoppingCart, FiUser} from 'react-icons/fi'

export const Navbar = () => {
  return (
  <AppBar position='static' elevation={0}>
    <Toolbar>
      <div class="container mx-auto px-4 flex items-center justify-between">
        <Typography component={Link} to={"/"} variant="h5">
        Feasty
        </Typography>
      </div>


      {/*<div class='flex items-center border border-gray-300 rounded-full px-4 py-1 bg-white w-72'>
        <FiSearch class="text-gray-500 mr-2" />
        <input type='text' placeholder='Search...' class='outline-none w-full text-sm bg-transparent' />
      </div>

      {/*Links*/}
      {/*<div class='flex items-center gap-4'>
        <Link to={"/"} class='bg-pink-400  text-white px-4 py-1 rounded-full font-semibold'> Home </Link>
        <Link to={"/products"} class='bg-pink-400  text-white px-4 py-1 rounded-full font-semibold'> Products </Link>
        <Link to={"/aboutus"} class='bg-pink-400  text-white px-4 py-1 rounded-full font-semibold'> About Us </Link>
        <Link to={"/blog"} class='bg-pink-400  text-white px-4 py-1 rounded-full font-semibold' > Blog </Link>
      </div>

      {/*Icons*/}
      {/*<div class='flex items-center gap-4'>
        <FiShoppingCart class='text-gray-600 text-x1 cursor-pointer'/>
        <FiUser class='text-gray-600 text-x1 cursor-pointer'/>
      </div>
      */}


    </Toolbar>
  </AppBar>
  );
};

