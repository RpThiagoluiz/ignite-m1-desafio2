import { render } from "react-dom";
import { MovieProvider } from "./context/Moviecontext";
import { App } from "./App";

render(
  <MovieProvider>
    <App />
  </MovieProvider>,
  document.getElementById("root")
);
