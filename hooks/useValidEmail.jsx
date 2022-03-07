import { useState, useEffect } from "react";
import axios from "axios";
import axiosDatabase from "utils/axios/axiosDatabase";

const useValidEmail = (query, open) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (query?.length > 0) {
      let cancel;
      setIsLoading(true);

      axiosDatabase({
        method: "GET",
        url: `${process.env.CHECK_EMAIL}${query}`,
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
        .then((res) => {
          setIsValid(!res?.data?.message);
          console.log(res?.data?.message);
          setIsLoading(false);
        })
        .catch((error) => {
          if (axios.isCancel(error)) return;
          setIsValid(false);
          console.log(error);
          setIsLoading(false);
        });
      return () => cancel();
    }
  }, [query]);

  return { isValid, isLoading };
};

export default useValidEmail;
