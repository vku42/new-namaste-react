function Shimmer() {
  let card_list = [];
  for (var i = 0; i < 14; i++) {
    card_list.push(<div className="shimmer-cards"></div>);
  }
  return <div className="shimmer">{card_list.map((e) => e)}</div>;
}

export default Shimmer;
