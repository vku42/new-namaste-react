function Card({ resData }) {
  return (
    <div className="p-2 w-[200px] h-[300px] rounded-lg bg-stone-500 hover:bg-stone-600 ease-in duration-300 relative">
      <img
        className="w-[100%] h-[150px] object-cover rounded-lg"
        alt="res-logo"
        src={resData.image_url}
      />
      <h3 className="font-bold mt-2">{resData.name}</h3>
      <h4>{resData.description}</h4>
      <h4 className="font-semibold">Price: {resData.price} $ </h4>
      {/* <h4 className="absolute top-2 left-2 ">{resData.is_veg ? "🟢" : "🔴"}</h4> */}
    </div>
  );
}

// Higner Order Restaurant Card
// Input - Restaurant Card ==> RestaurantCardPromoted

export const WithVegLabel = (Card) => {
  return (props) => {
    return (
      <div className="relative ">
        <h2 className="absolute top-2 z-10 left-1 border-4 border-green-500 w-8 h-8 text-center">
          🟢
        </h2>
        <Card {...props} />
      </div>
    );
  };
};

export default Card;
