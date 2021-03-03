import React, { useState, useEffect } from "react";

export function UseDropdown(id, items) {
  let select;
  const [artikl, setartikl] = useState();

  select = 
    <select id={id} onChange={(e) => setartikl(e.target.value)}>
      {items.map((item) => {
        return <option value={item}>{item}</option>;
      })}
    </select>

  return [select, artikl, setartikl];
}
