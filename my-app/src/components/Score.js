import React from "react";

function Score (props)  {
    return (
    <div className="info-left">
        <h2>Your score: {props.currentScore}</h2>
        <h3>Top Score: {props.topScore}</h3>
        <h3>{props.message}</h3>

    </div>
    );
}


export default Score;