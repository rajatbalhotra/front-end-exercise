import React, { useState } from "react";

import classes from "./Movie.module.css";

const Movie = (props) => {
  const [movieDetails, setMovieDetails] = useState(false);

  const showDetails = () => setMovieDetails(true);

  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.category}</h3>
      <h4>Rating:{props.rating}</h4>
      <button onClick={showDetails}>Show Details!</button>
      <h3>{movieDetails ? props.description : null}</h3>
      <h4>{movieDetails ? props.length : null}</h4>
    </li>
  );
};

export default Movie;
