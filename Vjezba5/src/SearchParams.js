import React, { useState, useEffect } from "react";
import { UseDropdown } from "./UseDropdown";
import Rezultati from "./Rezultati";
import { Link } from "@reach/router";

const SearchParams = () => {
  const [MojDucan, setMojDucan] = useState([]);
  const [asortiman, setasortiman] = useState([]);
  const [rezultati, setrezultati] = useState([]);

  const [select, artikl, setartikl] = UseDropdown("mojDucan", MojDucan);
  const [select2, artikl2, setartikl2] = UseDropdown(
    "Drugi_dropdown",
    asortiman
  );

  useEffect(() => {
    fetch(`https://demo2244408.mockable.io/MojDucan`)
      .then((response) => response.json())
      .then(({ ponuda }) => setMojDucan(ponuda));
  }, []);

  useEffect(() => {
    fetch(`https://demo2244408.mockable.io/MojDucan/${artikl}`)
      .then((response) => response.json())
      .then(({ items }) => {
        let listitems = items.map((item) => item.name);
        setasortiman(listitems);
      });
  }, [artikl]);

  function getPodArtikli() {
    fetch(`https://demo2244408.mockable.io/MojDucan/${artikl}`)
      .then((response) => response.json())
      .then(({ items }) => {
        //
        let podItemi = items.filter((item) => item.name == artikl2);

        let konacniPodItemi = podItemi[0].products.map((item) => item.name);
        setrezultati(podItemi[0].products);
        //console.log(podItemi[0].products);
      });
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          getPodArtikli();
        }}
      >
        <div>
          {select}
          {select2}
          <Link to={"/KosaricaPreview"}>
            <button>Odi na kosaricu</button>
          </Link>

          <button className="w3-button w3-teal w3-round-xlarge">Klikni</button>
        </div>
      </form>
      <Rezultati
        rezultat={rezultati}
        kategorija={artikl}
        podkategorija={artikl2}
      />
    </div>
  );
};

export default SearchParams;
