import React from "react";
import SearchParams from "./SearchParams";
import Products from "./Products";

const Rezultati = ({ rezultat, kategorija, podkategorija }) => {
  return (
    <div>
      {rezultat.map((item) => {
        return (
          <Products
            proizvodID={item.id}
            raspoloziviProizvodi={item.name}
            kategorija={kategorija}
            podkategorija={podkategorija}
          />
        );
      })}
    </div>
  );
};

export default Rezultati;
