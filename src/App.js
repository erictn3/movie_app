import './index.css';
import React, {useEffect, useState} from "react";

import Movie from './components/Movie';

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?api_key=a5ab91b6c0e1e8bf686fe28b77bb4282&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"

const API_Key = 'a5ab91b6c0e1e8bf686fe28b77bb4282'


function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(FEATURED_API).then(res => res.json())
    .then(data => {
      console.log(data);
      setMovies(data.results);      
    })
  }, [])

    return (
      <div>
        <header>
          <input className="search" type="search" placeholder="Search..."></input>
        </header>      
        
        <div className="movie-container">

        {movies.length > 0 && movies.map((movie)=> 
          <Movie key={movie.id} {...movie} />
        )}
        </div>
      </div>
    );
}

export default App;
