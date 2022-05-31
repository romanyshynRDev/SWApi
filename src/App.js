import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Personage from './Components/Personage/Personage';
import HomePage from './Components/HomePage/HomePage';
import MenuNavigation from './Components/Navigation/Navbar';
import style from './App.css'
import MoviePage from './Components/Movies/MoviePage';


function App() {

   return (
      <div className='App-header'>
         <MenuNavigation/>
         <div>
            <Routes>
               <Route path='/homepage' element={<HomePage/>}></Route>
               <Route path='/movies/:movieId' element={<MoviePage/>}></Route>
               <Route path='/personage/:name' element={<Personage />}></Route>
            </Routes>
         </div>
      </div>
   );
}

export default App;
