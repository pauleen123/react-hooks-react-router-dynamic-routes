import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import MoviesList from "./MoviesList";
import MovieShow from "./MovieShow";

function MoviesPage({ movies }) {
  const match = useRouteMatch();
  console.log(match);

  return (
    <div>
      <Route exact path={match.url}>
        <h3>Choose a movie from the list below</h3>
      </Route>

      <MoviesList movies={movies} />

      <Route path={`${match.url}/:movieId`}>
        <MovieShow movies={movies} />
      </Route>
    </div>
  );
}
export default MoviesPage;
