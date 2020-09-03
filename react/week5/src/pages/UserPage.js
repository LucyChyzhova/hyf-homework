import React from "react";

function UserPage(props) {
    return(
        <div>
            <a href={`https://github.com/${props.login}`}>{props.login}</a>
        </div>
    )
}

export default UserPage;