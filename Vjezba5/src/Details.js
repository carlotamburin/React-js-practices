import React from "react";
import Products from "./Products";
import { navigate } from "@reach/router";
import cart from "../components/svg/shopping-cart-solid.svg";
import Kosarica from "./Kosarica";
import { Link } from "@reach/router";
import AddButton from "./AddButton";
import Modal from "./Modal";
import { useState } from "react";

class Details extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };

    this.props = { id: props.proizvodID };
    //this.props = {podkategorijaprop: "props.podkategorija", kategorijaprop: props.kategorija, id: props.proizvodID};

    /*  props.podkategorija;
    props.proizvodID;
    props.kategorija */
  }

  componentDidMount() {
    fetch(`https://demo2244408.mockable.io/MojDucan/${this.props.kategorija}`)
      .then((response) => response.json())
      .then(({ items }) => {
        //
        let podItemi = items.filter(
          (item) => item.name == this.props.podkategorija
        );

        let podItemiZaIme = podItemi[0].products.filter(
          (item) => item.id == this.props.proizvodID
        );

        this.setState({
          opis: podItemi[0].info,
          ime: podItemiZaIme[0].name,
          loading: false,
        });
      })
      .catch((err) => console.log(err));
  }

  changeModalState = () => this.setState({ showModal: !this.state.showModal });

  render() {
    const { opis, ime, loading } = this.state;

    return (
      <div>
        <h1>{ime}</h1>
        <h2>{opis}</h2>

        <AddButton opis={opis} ime={ime} broj={1} />

        <Link to={`/`}>
          <button> Vrati se na pocetnu</button>
        </Link>

        <span>
          {" "}
          <img id="kosarica" src={cart} alt="kosarica"></img>
        </span>
      </div>
    );
  }
}

export default Details;
