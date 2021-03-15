import { useMovie } from "../context/Moviecontext";

import { MovieCard } from "../components/MovieCard";
import "../styles/content.scss";

const Content = () => {
  const { movies } = useMovie();
  return (
    <div className="movies-list">
      {movies.map((movie) => (
        <MovieCard
          title={movie.Title}
          poster={movie.Poster}
          runtime={movie.Runtime}
          rating={movie.Ratings[0].Value}
        />
      ))}
    </div>
  );
};
export default Content;
