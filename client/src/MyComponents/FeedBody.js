import React from "react"

import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';

export const FeedBody = ({sender, subject, desc, time}) => {
    return (
        <div className="feedBody">

            <div className="feedBodyIcons">
                <input type= "checkbox"/>
                <StarBorderIcon/>
                <LabelOutlinedIcon/>
            </div>

            <div className="feedBodySender">
                <h3>{sender}</h3>
            </div>

            <div className="feedBodyDesc">
                <h3>{subject}</h3>
                <p>{desc}</p>
            </div>

            <div className="feedBodyTime">
                <p>{time}</p>
            </div>


        </div>
    )
}