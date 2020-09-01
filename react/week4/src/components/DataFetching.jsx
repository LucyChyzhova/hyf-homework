import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [user, setUser] = useState({});
  const [login, setLogin] = useState("");
  const [idFromButtonClick, setIdFromButtonClick] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleClick = () => {
    setIdFromButtonClick(login);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios(
          `https://api.github.com/users/${idFromButtonClick}`
        );
        setUser(result.data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [idFromButtonClick]);

  return (
    <Fragment>
      <div>
        <input
          placeholder={"Search"}
          type="test"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <button type="button" onClick={handleClick}>
          Search
        </button>

        {isError && <div>No results ...</div>}
        {isLoading ? <div>Loading ...</div> : <div>{user.id}</div>}
      </div>
    </Fragment>
  );
}

export default DataFetching;
