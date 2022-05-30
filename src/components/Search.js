import React, { useState } from "react";

function Search({listings, setListings}) {

  const [search, setSearch] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted", search);
    listings.filter((item)=>{
      item.description = search
      return setListings(item)
    })
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
