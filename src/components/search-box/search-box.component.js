import React from "react";
import "./search-box.styles.css";

export default function SearchBox({ placeholder, handleChange }) {
  return (
    <div>
      <input type="search" placeholder={placeholder} onChange={handleChange} />
    </div>
  );
}
