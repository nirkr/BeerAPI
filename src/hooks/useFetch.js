import axios from "axios";
import { useState, useEffect } from "react";

export function useFetch(URL) {
  const [data, SetData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const wrapperFunc = async () => {
      try {
        const res = await axios.get(URL);
        SetData([...data, ...res.data]);
      } catch (err) {
        setErrors(err);
      }
      setIsLoading(false);
    };
    wrapperFunc();
  }, [URL]);

  return { data, isLoading, errors };
}
