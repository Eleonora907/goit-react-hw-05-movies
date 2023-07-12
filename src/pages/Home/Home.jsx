import MoviesList from 'components/MoviesList/MoviesList';
import { useHttp } from 'hooks/useHttp';
import React from 'react';
import { fetchTrendingMovies } from 'services/moviesApi';
import { MainTitle } from './Home.styled';

const Home = () => {
  const [movies] = useHttp(fetchTrendingMovies);
  return (
    <>
      <MainTitle>Trending today</MainTitle>
      <MoviesList movies={movies} />
    </>
  );
};

export default Home;
