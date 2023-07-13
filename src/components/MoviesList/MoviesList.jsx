import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import noImageAvailable from './../../services/no_image_available.jpg';
import {
  MovieItem,
  MovieItemImage,
  MoviesListStyled,
} from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <div>
      <MoviesListStyled>
        {movies.map(movie => (
          <MovieItem key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              <MovieItemImage
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                    : `${noImageAvailable}`
                }
                alt={movie.title}
              />
              {movie.title}
            </Link>
          </MovieItem>
        ))}
      </MoviesListStyled>
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default MoviesList;
