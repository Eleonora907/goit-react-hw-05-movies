import { useHttp } from 'hooks/useHttp';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'services/moviesApi';

const MovieCast = () => {

  // const { movieId } = useParams();
  // const [movieCast, setMovieCast] = useState([]);

  // useEffect(() => {
  //   try {
  //     fetchMovieCredits(movieId).then(res => setMovieCast(res));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [movieId]);

  const { movieId } = useParams();
  const [cast] = useHttp(fetchMovieCredits, movieId);

  if (!cast) return null;

  const { id, profile_path, name, character } = cast;

  return (
    <div>
      <ul>
        {cast && cast.map(() => (
          <li key={id}>
            {/* <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : `${noProfilePhoto}`
              }
              alt={name}
              width="80"
            /> */}
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
