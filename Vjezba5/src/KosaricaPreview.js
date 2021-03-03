import React, { useContext } from "react";
import Kosarica from "./Kosarica";
import { CartContext } from "./Kosarica";

export const KosaricaPreview = () => {
  const [artikli, setartikli] = useContext(CartContext);
  let proizvod = "";
  let proizvodCount = 0;

  return (
    <div>
      <span>Velicina kosarice: {artikli.length} </span>
      <p>Ime zadnjeg dodanog proizvoda: {artikli[artikli.length - 1].ime} </p>
      <h3>Artikli u kosarici</h3>
      <ul>
        {artikli.map((item) => {
          return (
            <li>
              <b>Artikl: </b>
              {item.ime}, <b>broj artikala u kosarici:</b> {item.broj}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
