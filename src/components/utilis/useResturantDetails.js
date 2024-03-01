import { useState, useEffect } from "react";
import { RESTAPID } from "../utilis/constaints";

const useResturantDetails = (resId) => {
  const [restData, setresData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const apiCall = await fetch(RESTAPID + resId);
    const data_api = await apiCall.json();
    setresData(data_api.data);
  };

  return restData;
};

export default useResturantDetails;
