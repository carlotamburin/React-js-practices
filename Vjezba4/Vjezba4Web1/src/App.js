import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));
