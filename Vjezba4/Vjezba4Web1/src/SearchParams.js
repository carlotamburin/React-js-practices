import React, { useState, useEffect } from "react";

const SearchParams = () => {
  const [MojDucan, setMojDucan] = useState([]);
  const [artikl, setartikl] = useState();

  const [asortiman, setasortiman] = useState([]);

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
      <select id="mojDucan" onChange={(e) => setartikl(e.target.value)}>
        {MojDucan.map((item) => {
          return <option value={item}>{item}</option>;
        })}
      </select>

      <select id="Drugi dropdown">
        {asortiman.map((item) => {
          return <option value={item}> {item}</option>;
        })}
      </select>
    </div>
  );
};

export default SearchParams;
