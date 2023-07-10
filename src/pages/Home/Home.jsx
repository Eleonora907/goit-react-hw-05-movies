import { TrendingMoviesList } from 'components/TrendingMoviesList/TrendingMoviesList';
import { useHttp } from 'components/hooks/useHttp';
import React from 'react';

const Home = () => {
  
  return (
    <>
      <h1>Trending today</h1>
      {<TrendingMoviesList />}
    </>
  );
};

export default Home;
