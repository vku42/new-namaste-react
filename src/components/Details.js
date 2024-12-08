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
    <div className="h-[82vh] flex  justify-center items-center bg-stone-900 ">
      <div className="bg-stone-600 p-3 rounded-lg">
        <div className="">
          <img
            className="h-[200px] w-[200px] object-cover rounded-lg"
            src={item.image_url}
            alt={item.name}
          />
        </div>
        <div className="pt-2">
          <h1 className="font-bold text-lg">{item.name}</h1>
          <h2 className="font-semibold">Ingredients</h2>
          <ul className="Ingre">
            {item.ingredients.split(",").map((ing) => (
              <li className=" ml-3" key={ing.trim()}>
                ⚫{ing.trim()}
              </li>
            ))}
          </ul>
          <h3 className="font-medium text-2xl text-right">
            {item.price * conversionRate} Rs
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Details;
