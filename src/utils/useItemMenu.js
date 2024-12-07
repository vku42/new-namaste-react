import { useEffect, useState } from "react";
const useItemMenu = (menuId) => {
  const [itemInfo, setitemInfo] = useState(null);
  // Fetch Data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://script.google.com/macros/s/AKfycbyqD6wdQ_cO8ambxG89qtS3on1Z8OgFtif5Kdu-MQ35gBbAMAfRJOj2S5jTsdq1yvg/exec"
    );
    const json = await data.json();
    itemGlob = [...json];
    itemGlob = itemGlob.filter((item) => item.id === menuId);
    setitemInfo(itemGlob);
  };

  return itemInfo;
};

export default useItemMenu;
