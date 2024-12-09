import Card, { WithVegLabel } from "./Card";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

let gobalData = [];
function Body() {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");

  const CardVeg = WithVegLabel(Card);

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
    <div className="bg-stone-900 min-h-[90vh] pb-10">
      <div className="pt-4">
        <button
          onClick={() => {
            setData(gobalData.filter((res) => res.rating > 4));
          }}
          className="px-3 py-1 mb-2  border border-solid border-blue-900 text-blue-100 rounded-full bg-slate-800 mx-2"
          type="button"
        >
          Top Rated Items
        </button>
        <button
          onClick={() => {
            setData(gobalData);
          }}
          className="px-3 py-1 mb-2  border border-solid border-blue-900 text-blue-100 rounded-full bg-slate-800 mx-2"
          type="button"
        >
          All Items
        </button>
        <button
          onClick={() => {
            setData(gobalData.filter((res) => res.is_veg === true));
          }}
          className="px-3 py-1 mb-2  border border-solid border-blue-900 text-blue-100 rounded-full bg-slate-800 mx-2"
          type="button"
        >
          Only Veg Item
        </button>
        <button
          onClick={() => {
            setData(gobalData.filter((res) => res.is_veg === false));
          }}
          className="px-3 py-1 mb-2  border border-solid border-blue-900 text-blue-100 rounded-full bg-slate-800 mx-2"
          type="button"
        >
          Only Non Veg Item
        </button>
        <button
          onClick={() => {
            const sortedData = [...data].sort((a, b) => a.price - b.price);
            setData(sortedData);
          }}
          className="px-3 py-1 mb-2 border border-solid border-blue-900 text-blue-100 rounded-full bg-slate-800 mx-2"
          type="button"
        >
          Sort by Price (Low to High)
        </button>
      </div>
      <div className="my-4 px-4  flex justify-center">
        <input
          type="text"
          className="border border-solid border-black px-2 py-2 rounded-md bg-slate-800 text-yellow-50"
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
          className="px-8 py-2 bg-blue-950 text-white ml-2 rounded-md"
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
      <div className="flex gap-2 flex-wrap justify-center">
        {data.map((res, index) => (
          <Link to={`/item/${res.id}`}>
            {res.is_veg === true ? (
              <CardVeg key={res.id} resData={res} />
            ) : (
              <Card key={res.id} resData={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Body;
