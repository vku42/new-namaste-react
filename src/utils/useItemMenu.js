import { useEffect, useState } from "react";

const useItemMenu = (menuId) => {
  const [itemInfo, setitemInfo] = useState([]);

  useEffect(() => {
    fetchData();
  }, [menuId]); // Re-fetch data if menuId changes

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyqD6wdQ_cO8ambxG89qtS3on1Z8OgFtif5Kdu-MQ35gBbAMAfRJOj2S5jTsdq1yvg/exec"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      const itemGlobal = json.filter((item) => item.id === menuId);
      setitemInfo(itemGlobal);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  return itemInfo;
};

export default useItemMenu;
