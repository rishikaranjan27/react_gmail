import React from "react"
import {RightSideOption} from "./RightSideOption";
import "./RightSide.css";


export const RightSide = () => {
    return (
        <div className="rightSide">

            <RightSideOption
            logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Calendar_icon_%282020%29.svg/768px-Google_Calendar_icon_%282020%29.svg.png"
            desc = "Calender"
            />

            <RightSideOption
            logo = "https://cdn-icons-png.flaticon.com/512/2965/2965358.png"
            desc = "Keep"
            />

            <RightSideOption
            logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Google_Tasks_2021.svg/1200px-Google_Tasks_2021.svg.png"
            desc = "Tasks"
            />

            <RightSideOption
            logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Google_Contacts_icon_%282022%29.svg/1200px-Google_Contacts_icon_%282022%29.svg.png"
            desc = "Contacts"
            />

        </div>
    )
}