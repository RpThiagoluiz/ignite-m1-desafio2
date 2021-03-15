import { useMovie } from "./context/Moviecontext";

import SideBar from "./components/SideBar";
import Content from "./components/Content";

import "./styles/global.scss";

export function App() {
  const { selectedGenre } = useMovie();

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar />
      <div className="container">
        <header>
          <span className="category">
            Categoria:<span> {selectedGenre.title}</span>
          </span>
        </header>
        <main>
          <Content />
        </main>
      </div>
    </div>
  );
}
