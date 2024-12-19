import { useEffect, useState } from "react";
import axios from "axios";

export const useGetHomePage = (name) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchHomePage = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/homepage/homepage",
          { name }
        );
        setData(response.data);
      } catch (err) {
        console.error("Có lỗi xảy ra:", err.message || err);
      }
    };

    fetchHomePage();
  }, [name]);

  return { data };
};
