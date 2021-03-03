import React from "react";
import { CartContext } from "./Kosarica";
import { useContext } from "react";
import Modal from "./Modal";
import { useState } from "react";
import { Link } from "@reach/router";

const AddButton = (props) => {
  const [artikli, setartikli] = useContext(CartContext);
  const [isOpen, setisOpen] = useState(false);

  const DodajUKosaricu = () => {
    const artikl = { ime: props.ime, opis: props.opis, broj: props.broj };
    var found = false;

    // Gledaj jel taj artikl postoji
    // ako postoji
    for (let i = 0; i < artikli.length; i++) {
      if (artikli[i].ime == props.ime) {
        artikli[i].broj += 1;
        found = true;
      }
    }
    // ako ne
    if (found == false) {
      setartikli((curr) => [...curr, artikl]);
    }
  };

  return (
    <>
      <button
        onClick={(event) => {
          DodajUKosaricu();
          setisOpen(true);
        }}
      >
        Dodaj U kosaricu
      </button>

      <Modal open={isOpen} onClose={() => setisOpen(false)}>
        Zelite li vidjeti stanje kosarice
      </Modal>
    </>
  );
};

export default AddButton;
