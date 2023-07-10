import axios from 'axios';

const API_KEY = 'fb2464989c4bf946a62db0b7867c9354';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchTrendingMovies = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/trending/movie/day`, {
      params: {
        api_key: API_KEY,
      },
    });
    // const trendingMovies = data.results;
    // return trendingMovies;
    return data.results;
    // return data;
  } catch (error) {
    return error.message;
  }
};


export const fetchMovieDetails = async id => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/movie/${id}`, {
        params: {
          api_key: API_KEY,
        },
      }
    );
    return data;
  } catch (error) {
    return error.message;
  }
};