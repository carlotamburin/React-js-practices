import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import { Router } from "@reach/router";
import Details from "./Details";
import { Kosarica } from "./Kosarica";
import { KosaricaPreview } from "./KosaricaPreview";

const App = () => {
  return (
    <Kosarica>
      <div>
        <Router>
          <SearchParams path="/" />
          <Details path="/Details/:kategorija/:podkategorija/:proizvodID" />
          <KosaricaPreview path="/KosaricaPreview" />
        </Router>
      </div>
    </Kosarica>
  );
};
render(<App />, document.getElementById("root"));
