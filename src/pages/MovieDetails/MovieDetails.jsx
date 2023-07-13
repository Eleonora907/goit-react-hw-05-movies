import { useHttp } from 'hooks/useHttp';
import { movieReleaseYear } from 'services/formatDate';
import { fetchMovieDetails } from 'services/moviesApi';
import React from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import noImageAvailable from './../../services/no_image_available.jpg';
import {
  MovieDescContainer,
  MovieDetailsContainer,
  MovieDetailsImage,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails] = useHttp(fetchMovieDetails, movieId);
  const location = useLocation();

  if (movieDetails?.length === 0) return null;

  const { poster_path, title, release_date, vote_average, overview, genres } =
    movieDetails;

  const userScore = Math.round(Number(vote_average) * 10);

  return (
    <>
      <>
        <Link to={location.state?.from || '/'}>&#8592; Go back</Link>
        <MovieDetailsContainer>
          <MovieDetailsImage
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : `${noImageAvailable}`
            }
            alt={title}
            width="200"
          />
          <MovieDescContainer>
            <h2>
              {title} ({movieReleaseYear(release_date)})
            </h2>
            <p>User score: {userScore}%</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <ul>
              {genres &&
                genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
            </ul>
          </MovieDescContainer>
        </MovieDetailsContainer>

        <hr />
        <MovieDescContainer>
          <h4>Additional information</h4>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
        </MovieDescContainer>
        <Outlet />
      </>
    </>
  );
};

export default MovieDetails;
