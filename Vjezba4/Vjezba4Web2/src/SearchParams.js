import React, { useState, useEffect } from "react";
import { UseDropdown } from "./UseDropdown";

const SearchParams = () => {
  const [MojDucan, setMojDucan] = useState([]);
  const [asortiman, setasortiman] = useState([]);

  const [select, artikl, setartikl] = UseDropdown("mojDucan", MojDucan);
  const [select2] = UseDropdown("Drugi_dropdown", asortiman);

  useEffect(() => {
    fetch(`https://demo2244408.mockable.io/MojDucan`)
      .then((response) => response.json())
      .then(({ ponuda }) => setMojDucan(ponuda));
  }, []);

  useEffect(() => {
    fetch(`https://demo2244408.mockable.io/MojDucan/${artikl}`)
      .then((response) => response.json())
      .then((proizvod) => setasortiman(proizvod[artikl]));
  }, [artikl]);

  return (
    <div>
      {select}
      {select2}
    </div>
  );
};

export default SearchParams;
