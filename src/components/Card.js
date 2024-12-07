function Card({ resData }) {
  return (
    <div className="card" style={{ backgroundColor: "#8f8f8f" }}>
      <img className="res-logo" alt="res-logo" src={resData.image_url} />
      <h3>{resData.name}</h3>
      <h4>{resData.description}</h4>
      <h4>Price: {resData.price} $ </h4>
      <h4>{resData.is_veg ? "🟩" : "🟥"}</h4>
    </div>
  );
}

export default Card;
