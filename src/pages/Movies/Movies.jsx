import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from 'services/moviesApi';
import MoviesList from 'components/MoviesList/MoviesList';
import { useHttp } from 'hooks/useHttp';
import MoviesSearchFrom from 'components/MoviesSearchForm/MoviesSearchForm';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [movies] = useHttp(fetchSearchMovies, query);

  const handleSubmit = query => {
    setSearchParams({ query });
  };

  return (
    <>
      <MoviesSearchFrom handleSubmit={handleSubmit} />
      <MoviesList movies={movies} />
    </>
  );
};

export default Movies;
