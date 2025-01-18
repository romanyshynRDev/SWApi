import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/Home/MainPage';
import MenuNavigation from './Components/Navigation/Navbar';
import './App.css'
import MoviePage from './pages/Movies/MoviePage';
import PersonageContainer from './pages/Personage/Personage';


function App(props) {

   return (
      <div className='App-header'>
         <MenuNavigation/>
         <div>
            <Routes>
               <Route path='/homepage/movies' element={<HomePage/>}></Route>
               <Route path="/" element={<Navigate replace to="/homepage/movies" />} />
               <Route path='/movies/:movieId' element={<MoviePage/>}></Route>
               <Route path='personage/:perId' element={<PersonageContainer />}></Route>
            </Routes>
         </div>
      </div>
   );
}

export default App;
