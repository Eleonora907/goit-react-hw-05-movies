import { useHttp } from 'hooks/useHttp';
import React from 'react'
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/moviesApi';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [movieReviews] = useHttp(fetchMovieReviews, movieId);

  if (!movieReviews) {
    return <p>We don`t have any reviews for this movie</p>;
  }

  return (
    <div>
      <ul>
      {movieReviews.map(review => (
        <li key={review.id}>
          <h3>{review.author}</h3>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
    </div>
  )
}

export default MovieReviews