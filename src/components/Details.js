import { useParams } from "react-router";
import useItemMenu from "../utils/useItemMenu";
import Shimmer from "./Shimmer";

const Details = () => {
  const { id } = useParams();
  const menuItem = useItemMenu(id);

  if (!menuItem || menuItem.length === 0) {
    return <Shimmer />;
  }

  const item = menuItem[0];
  const conversionRate = 84; // Define a constant for the conversion rate

  return (
    <div className="menu">
      <div className="details-r">
        <img src={item.image_url} alt={item.name} />
      </div>
      <div>
        <h1>{item.name}</h1>
        <h2>Ingredients</h2>
        <ul className="Ingre">
          {item.ingredients.split(",").map((ing) => (
            <li key={ing.trim()}>{ing.trim()}</li>
          ))}
        </ul>
        <h3>{item.price * conversionRate} Rs</h3>
      </div>
    </div>
  );
};

export default Details;
