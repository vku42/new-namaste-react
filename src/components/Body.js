import Card from "./Card";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

let gobalData = [];
function Body() {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const dataFetch = await fetch(
      "https://script.google.com/macros/s/AKfycbyqD6wdQ_cO8ambxG89qtS3on1Z8OgFtif5Kdu-MQ35gBbAMAfRJOj2S5jTsdq1yvg/exec"
    );
    const json = await dataFetch.json();
    gobalData = [...json];
    setData(gobalData);
  };

  const isOnline = useOnlineStatus();
  if (isOnline === false) {
    return (
      <div>
        <p>
          You are currently offline. Please check your internet connection and
          try again.
        </p>
      </div>
    );
  }

  return data.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          onClick={() => {
            setData(gobalData.filter((res) => res.rating > 4));
          }}
          className="filter-btn"
          type="button"
        >
          Top Rated Items
        </button>
        <button
          onClick={() => {
            setData(gobalData);
          }}
          className="filter-btn"
          type="button"
        >
          All Items
        </button>
        <button
          onClick={() => {
            setData(gobalData.filter((res) => res.is_veg === true));
          }}
          className="filter-btn"
          type="button"
        >
          Only Veg Item
        </button>
        <button
          onClick={() => {
            setData(gobalData.filter((res) => res.is_veg === false));
          }}
          className="filter-btn"
          type="button"
        >
          Only Non Veg Item
        </button>
        <button
          onClick={() => {
            const sortedData = [...data].sort((a, b) => a.price - b.price);
            setData(sortedData);
          }}
          className="filter-btn"
          type="button"
        >
          Sort by Price (Low to High)
        </button>
      </div>
      <div className="search">
        <input
          type="text"
          className="search_box"
          placeholder="Search for Items"
          value={searchText}
          onChange={(e) => {
            const searchValue = e.target.value.toUpperCase();
            setSearchText(e.target.value);

            const filteredItems = gobalData.filter((item) =>
              item.name.toUpperCase().includes(searchValue)
            );

            setData(filteredItems.length === 0 ? gobalData : filteredItems);
          }}
        />

        <button
          className="search-btn"
          onClick={() => {
            const filterItem = gobalData.filter((item) =>
              item.name.toUpperCase().includes(searchText)
            );
            setData(filterItem.length === 0 ? gobalData : filterItem);
          }}
        >
          Search
        </button>
      </div>
      <div className="res-container">
        {data.map((res, index) => (
          <Link to={`/item/${res.id}`}>
            <Card key={res.id} resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Body;
