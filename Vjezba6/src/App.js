import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import { Router } from "@reach/router";
import Details from "./Details";
import { Kosarica } from "./Kosarica";
import { KosaricaPreview } from "./KosaricaPreview";
import Register from "./Register";
import Login from "./Login";
import Logout from "./Logout";

const App = () => {
  return (
    <Kosarica>
      <div>
        <Router>
          <SearchParams path="/" />
          <Details path="/Details/:kategorija/:podkategorija/:proizvodID" />
          <KosaricaPreview path="/KosaricaPreview" />
          <Register path="/register" />
          <Login path="/login" />
          <Logout path="/logout" />
        </Router>
      </div>
    </Kosarica>
  );
};
render(<App />, document.getElementById("root"));
