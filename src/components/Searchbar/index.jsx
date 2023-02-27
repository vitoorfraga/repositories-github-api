import React from "react";
import "./styles.css"


function Searchbar({value, onChange}) {


  return (
    <input 
      className="search-bar"
      placeholder="Pesquise por um repositório :)"
      value={value}
      onChange={onChange}
      />
  );
}

export default Searchbar;