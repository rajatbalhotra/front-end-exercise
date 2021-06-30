import React from 'react';

import Movie from './Movie';
import classes from './MoviesList.module.css';

const MoviesList = (props) => {
  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((movie, idx) => (
        <Movie
          key={idx}
          title={movie.title}
          rating={movie.rating}
          category={movie.category}
          description={movie.description}
          length={movie.length}
        />
      ))}
    </ul>
  );
};

export default MoviesList;
