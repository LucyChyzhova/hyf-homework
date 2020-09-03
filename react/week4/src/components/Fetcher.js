import React, { useState, useEffect } from "react";

const baseUrl = "https://api.github.com/search/users?q=";

export const Fetcher = ({ search, render }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const result = await fetch(`${baseUrl}${encodeURIComponent(search)}`).then((response) => {
        return response.json();
      });

      setLoading(false);

      if (result.error) {
        setError(result);
      } else {
        setData(result.items);
        setError(false);
      }
    };

    if (search !== "") {
      getData();
    } else {
      setError(true);
      setData(false);
    }
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
