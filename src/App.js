import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import CustomersList from "./components/CustomersList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [customerDetails, setCustomerDetails] = useState(false);
  const [movieDetails, setMovieDetails] = useState(false);

  function fetchMoviesHandler() {
    fetch("http://localhost:4200/movies")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const transformedMovies = data.movies.map((movieData) => {
          return {
            id: movieData._id,
            title: movieData.Title,
            category: movieData.Category,
            rating: movieData.Rating,
            description: movieData.Description,
            length: movieData.Length,
          };
        });
        setMovies(transformedMovies);
        setCustomerDetails(false);
        setMovieDetails(true);
      });
  }

  function fetchCustomersHandler() {
    fetch("http://localhost:4200/customers")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const transformedCustomers = data.customers.map((customerData) => {
          return {
            id: customerData._id,
            firstName: customerData.FirstName,
            address: customerData.Address,
            country: customerData.Country,
            rentals: customerData.Rentals,
          };
        });
        setCustomers(transformedCustomers);
        setCustomerDetails(true);
        setMovieDetails(false);
      });
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
        <button onClick={fetchCustomersHandler}>Fetch Customers</button>
      </section>
      <section>
        {movieDetails ? (
          <MoviesList customers={customers} movies={movies} />
        ) : null}

        {customerDetails ? <CustomersList customers={customers} /> : null}
      </section>
    </React.Fragment>
  );
}

export default App;
