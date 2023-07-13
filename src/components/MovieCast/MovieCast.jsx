import { useHttp } from 'hooks/useHttp';
import React from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'services/moviesApi';
import noImageAvailable from './../../services/no_image_available.jpg';
import { MovieDescContainer } from '../../pages/MovieDetails/MovieDetails.styled';

const MovieCast = () => {
  const { movieId } = useParams();
  const [casts] = useHttp(fetchMovieCredits, movieId);

  if (casts.length === 0) {
    return <p>We don`t have any casts for this movie.</p>;
  }

  return (
    <MovieDescContainer>
      <ul>
        {casts &&
          casts.map(cast => (
            <li key={cast.id}>
              <img
                src={
                  cast.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                    : `${noImageAvailable}`
                }
                alt={cast.name}
                width="150"
              />
              <p>{cast.name}</p>
              <p>Character: {cast.character}</p>
            </li>
          ))}
      </ul>
    </MovieDescContainer>
  );
};

export default MovieCast;
