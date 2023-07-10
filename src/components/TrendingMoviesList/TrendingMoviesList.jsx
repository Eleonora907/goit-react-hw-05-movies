// import { useHttp } from 'components/hooks/useHttp';
// import MovieDetails from 'components/MovieDetails/MovieDetails';
import { useHttp } from 'components/hooks/useHttp';
import { fetchTrendingMovies } from 'components/services/moviesApi';
import { Link } from 'react-router-dom';

export const TrendingMoviesList = () => {
    const [trendingMovies, setTrendingMovies] = useHttp(fetchTrendingMovies);

    return (
        <ul>
          {trendingMovies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      );
    };

