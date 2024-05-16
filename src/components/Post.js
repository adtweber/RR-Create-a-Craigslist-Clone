import React from "react";

function Post(props) {
    return (
        <div>
            <h1>{props.data.title}</h1>
            <h4>{props.data.price}</h4>
            <p>{props.data.description}</p>
            <img src={props.data.imageURL} />
        </div>
    )
}

export default Post;