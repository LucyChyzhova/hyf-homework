import React, {useState} from "react";
import { Fetcher } from "../components/Fetcher";

export const Search = () => {
    const [search, setSearch] = useState ("")

    return (
        <>
        <h2>This is a search page</h2>
        <input type= "text"
        placeholder ="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
        
        <Fetcher
        search={search}
        render ={({data, error, loading}) => (
            <div>
                {loading && <div>Loading... </div>}
                {error && <div>No results</div>}

                {data && data.map ((item, key) =>(
                    <div key={key}>
                        <p>{item.login}</p>
                        </div>
                ))}
            </div>
        
        )}
        />
    </>
    );
};