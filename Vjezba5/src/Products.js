import React from "react";
import Rezultati from "./Rezultati";
import { Link } from "@reach/router";
import Details from "./Details";

const Products = ({
  proizvodID,
  raspoloziviProizvodi,
  kategorija,
  podkategorija,
}) => {
  return (
    <div id="raspolozivi-artikli">
      <h1>{raspoloziviProizvodi}</h1>
      <Link to={`/Details/${kategorija}/${podkategorija}/${proizvodID}`}>
        <button className="w3-button w3-teal w3-round-small">Detalji</button>
      </Link>
    </div>
  );
};

export default Products;
