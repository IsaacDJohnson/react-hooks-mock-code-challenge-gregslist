import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = useState([])

  useEffect(()=>{
        fetch('http://localhost:6001/listings')
    .then(res => res.json())
    .then((data) => {
      setListings(data)
    })
  }, [])

  function onDelete(id){
    fetch(`http://localhost:6001/listings/${id}`,
    {method: "DELETE"})
    .then(res => res.json())
    .then(()=>{
      const newList = listings.filter(item => item.id !== id)
      setListings(newList)
    })
  }


  return (
    <div className="app">
      <Header listings={listings} setListings={setListings}/>
      <ListingsContainer listings={listings} onDelete={onDelete}/>
    </div>
  );
}

export default App;
