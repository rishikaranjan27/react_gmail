import React from "react"
import "./Feed.css";


export const FeedOption = ({Icon, title}) => {
    return (
        <div className="feedOption">
            <Icon />
            <p>{title}</p>
        </div>
    )
}