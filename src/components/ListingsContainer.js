import React, {useState, useEffect} from "react";
import ListingCard from "./ListingCard"

function ListingsContainer({listings, onDelete}) {

  return (
    <main>
      <ul className="cards">
        {listings ? listings.map((item, i)=> <ListingCard key={i} list={item} onDelete={()=> onDelete(item.id)}/>) : []}
      </ul>
    </main>
  );
}

export default ListingsContainer;
