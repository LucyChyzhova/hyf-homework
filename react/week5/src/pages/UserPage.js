import React from "react";

function UserPage(props) {
  
    return(
        <div>
            <a href={`/UserPage${props.login}`}>{props.login}</a>
        </div>
    )
}

export default UserPage;