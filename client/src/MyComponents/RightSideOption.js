import React from "react"
import "./RightSide.css";

export const RightSideOption = ({logo, desc}) => {
    return (
        <div className="rightSideOption">
            <img src = {logo}
            alt = {desc}/>
        </div>
    )
}