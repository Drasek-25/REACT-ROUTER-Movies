import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Movies from './components/movies';
import People from './components/people';
import Poster from './components/poster';
import Ratings from './components/ratings';
import Navbar from './components/navbar';
import Data from './data';    // JavaScript object not component

const App = () => {

  const [movies] = useState(Data);
  const [selectedMovieIndex, setSelectedMovieIndex] = useState(0);

  const handleMovieChange = (movieIndex) => {
    setSelectedMovieIndex(movieIndex)
  }

  return (
    <div className="container">
      <Navbar handleMovieChange={handleMovieChange} />
      <Switch>
        <Route exact path='/' render={() => <Movies movies={movies} handleMovieChange={handleMovieChange} />} />
        <Route exact path='/people' render={() => <People movie={movies[selectedMovieIndex]} />} />
        <Route exact path='/poster' render={() => <Poster movie={movies[selectedMovieIndex]} />} />
        <Route exact path='/ratings' render={() => <Ratings movie={movies[selectedMovieIndex]} />} />
      </Switch>
    </div>
  );
}


export default App;

/**
 * Lab Instruction:
 *
 * Configure the buttons rendered in 'Movies' to redirect the whole page to
 * the respective components.
 * Use 'react-router-dom' instead of basic conditional rendering
 *
 * NOTE:
 * > 'react-router-dom' is already added to your 'package.json' (no need to install it separately),
 *   but you have to setup the imports
 * > Don't forget to import 'BrowserRouter' into 'index.js'
 *
 */
