import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useItemMenu from "../utils/useItemMenu";

const Details = () => {
  // const [item, setItem] = useState(null);
  const { id } = useParams();

  const menuItem = useItemMenu(id);

  return menuItem === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div className="details-r">
        <img src={menuItem[0].image_url} />
      </div>
      <div>
        <h1>{menuItem[0].name}</h1>
        <h2>Ingredients</h2>
        <ul className="Ingre">
          {menuItem[0].ingredients.split(",").map((ing) => {
            return <li key={ing}>{ing}</li>;
          })}
        </ul>
        <h3>{menuItem[0].price * 84} Rs</h3>
      </div>
    </div>
  );
};

export default Details;
