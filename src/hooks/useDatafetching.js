import { useEffect, useState } from "react";

/**
 * takes the urls and fetches the data from the api. The state of loading and error message
 * depends on whether the request was successful or not
 * @param {string} url url path of the datasource
 * @returns list with loading status, error message and data
 */
function useDataFetching(url) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  // get data from api
  useEffect(() => {
    async function fetchData() {
      try {
        const rawData = await fetch(url);
        const newData = await rawData.json();
        if (newData) {
          setData(newData);
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    }
    fetchData();
  }, [url]);
  return [loading, error, data];
}

export default useDataFetching;