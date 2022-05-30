import React, {useState} from "react";

function ListingCard({list, onDelete}) {

  const {description, image, location} = list;

  const [fav, setFav] = useState(false)

  function handleClick(){
    fav ? setFav(false) : setFav(true)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {fav ? (
          <button className="emoji-button favorite active" onClick={handleClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleClick}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={onDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
