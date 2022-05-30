import React from 'react';
import { Routes, Route } from 'react-router-dom'
import ActorDetails from './Components/Actors/ActorDetails';
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
               {/* <Route path='/actors' element={<ActorDetails />}></Route> */}
            </Routes>
         </div>
      </div>
   );
}

export default App;
