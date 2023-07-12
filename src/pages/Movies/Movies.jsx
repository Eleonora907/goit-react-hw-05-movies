import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from 'services/moviesApi';
import MoviesList from 'components/MoviesList/MoviesList';
import { useHttp } from 'hooks/useHttp';
import MoviesSearchFrom from 'components/MoviesSearchForm/MoviesSearchForm';

const Movies = () => {
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [movies] = useHttp(fetchSearchMovies, query);

  const handleSubmit = () => {
    setSearchParams(value ? { query: value } : {});
    setValue('');
  };

  return (
    <div>
      <MoviesSearchFrom
        handleSubmit={handleSubmit}
        value={value}
        setValue={setValue}
      />
      <MoviesList movies={movies} />
    </div>
  );
};

export default Movies;
