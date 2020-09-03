import React, { useState, useEffect } from "react";

const baseUrl = "https://api.github.com/search/users?q=";

export const Fetcher = ({ search, render }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => 
    {
      const result = await fetch(
        `${baseUrl}${search}`
      ).then((response) => {
        return response.json();
      });

     if (search === ""){
        setLoading(false);
        setError(result);
        setData(false);
      }
      else if (search !== "") {
        setLoading(false);
        setData(result.items); 
        setError(false);
      }
      else {
        setLoading(true);
        setData(result.items);
      }
    };
    getData();
  }, [search]);

  return (
    <>
      {render({
        loading,
        data,
        error,
      })}
    </>
  );
};
