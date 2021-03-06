import { useMovie } from "../context/Moviecontext";
import { Button } from "./Button";

import "../styles/sidebar.scss";

const SideBar = () => {
  const { genres, handleClickButton, selectedGenreId } = useMovie();
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
};

export default SideBar;
