import axios from "axios";
import { useState, useEffect } from "react";

export function useFetch(URL) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const wrapperFunc = async () => {
      try {
        const res = await axios.get(URL);
        setData([...data, ...res.data]);
      } catch (err) {
        setErrors(err);
      }
      setIsLoading(false);
    };
    wrapperFunc();
  }, [URL]);

  return { data, isLoading, errors };
}
