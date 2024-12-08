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
      <h4 className="absolute top-2 left-2 ">{resData.is_veg ? "🟢" : "🔴"}</h4>
    </div>
  );
}

export default Card;
