import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetcher() {
  const [data, setdata] = useState([]);

  const getdata = async () => {
    try {
      const Response = await axios.get(
        "https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/menu-items-by-category.json"
      );

      setdata(Response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getdata();
  }, []);
  return data;
}
