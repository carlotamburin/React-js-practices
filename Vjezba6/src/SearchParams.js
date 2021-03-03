import React, { useState, useEffect } from "react";
import { UseDropdown } from "./UseDropdown";
import Rezultati from "./Rezultati";
import { Link } from "@reach/router";
import Logout from "./Logout";

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
    const options = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };

    fetch("http://localhost:3000/api/kategorije", options)
      .then((response) => response.json())
      .then((name) => setMojDucan(name));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3000/api/podKategorije?artikl=${artikl}`)
      .then((response) => response.json())
      .then((items) => {
        let listitems = items[0].items.map((item) => item.name);
        setasortiman(listitems);
      });
  }, [artikl]);

  function getPodArtikli() {
    fetch(`http://localhost:3000/api/rezultat?artikl=${artikl}`)
      .then((response) => response.json())
      .then((items) => {
        //
        let podItemi = items[0].items.filter((item) => item.name == artikl2);

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

          <Link to={"/register"}>
            <button className="w3-button w3-black w3-round-xlarge">
              Registriraj se
            </button>
          </Link>

          <Link to={"/login"}>
            <button className="w3-button w3-black w3-round-xlarge">
              Logiraj se
            </button>
          </Link>

          <button
            onClick={Logout}
            className="w3-button w3-black w3-round-xlarge"
          >
            Odjavi se
          </button>
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
