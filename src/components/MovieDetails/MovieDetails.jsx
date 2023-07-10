import { fetchMovieDetails } from 'components/services/moviesApi';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    fetchMovieDetails(movieId).then(data => setMovieDetails(data));
  }, [movieId]);

  if (!movieDetails) return;

  const { poster_path, title, release_date, vote_average, overview, genres } =
    movieDetails;

  return (
    <>
      <div>
        <div>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : `${posterDefault}`
            }
            alt={title}
            width="200"
          />
          <h2>{title}</h2>
          <p>User score: {vote_average?.toFixed(3)}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <ul>
          {genres && genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
          </ul>
        </div>

        <hr />
<h4>Additional information</h4>
<ul>
    <li>
    <Link to="cast">Cast</Link>
    </li>
    <li>
    <Link to="reviews">Reviews</Link>
    </li>
</ul>

      </div>
    </>
  );
};

export default MovieDetails;
