import { useHttp } from 'hooks/useHttp';
import React from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/moviesApi';
import { MovieDescContainer, MovieReviewsList } from './MovieDetails.styled';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [movieReviews] = useHttp(fetchMovieReviews, movieId);

  if (movieReviews.length === 0) {
    return <p>We don`t have any reviews for this movie.</p>;
  }

  return (
    <MovieDescContainer>
      <MovieReviewsList>
        {movieReviews &&
          movieReviews.map(review => (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
      </MovieReviewsList>
    </MovieDescContainer>
  );
};

export default MovieReviews;
