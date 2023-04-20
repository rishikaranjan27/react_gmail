import React, {useState} from "react"
import "./Feed.css";
import {FeedOption} from "./FeedOption";
import {FeedBody} from "./FeedBody";

import InboxIcon from '@mui/icons-material/Inbox';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';



export const Feed = () => {

    const [feeds, setFeeds] = useState([

        {
            sender: "Sender name" ,
            subject: "Subject details" ,
            desc: "How to complete the course" ,
            time: "12:43 PM"
        },

        {
            sender: "Sender name" ,
            subject: "Subject details" ,
            desc: "How to complete the course" ,
            time: "12:43 PM"
        },

        {
            sender: "Sender name" ,
            subject: "Subject details" ,
            desc: "How to complete the course" ,
            time: "12:43 PM"
        },

        {
            sender: "Sender name" ,
            subject: "Subject details" ,
            desc: "How to complete the course" ,
            time: "12:43 PM"
        },

        {
            sender: "Sender name" ,
            subject: "Subject details" ,
            desc: "How to complete the course" ,
            time: "12:43 PM"
        },
        {
            sender: "Sender name" ,
            subject: "Subject details" ,
            desc: "How to complete the course" ,
            time: "12:43 PM"
        },

        {
            sender: "Sender name" ,
            subject: "Subject details" ,
            desc: "How to complete the course" ,
            time: "12:43 PM"
        },

        {
            sender: "Sender name" ,
            subject: "Subject details" ,
            desc: "How to complete the course" ,
            time: "12:43 PM"
        },

        {
            sender: "Sender name" ,
            subject: "Subject details" ,
            desc: "How to complete the course" ,
            time: "12:43 PM"
        },

        {
            sender: "Sender name" ,
            subject: "Subject details" ,
            desc: "How to complete the course" ,
            time: "12:43 PM"
        },
        {
            sender: "Sender name" ,
            subject: "Subject details" ,
            desc: "How to complete the course" ,
            time: "12:43 PM"
        },

        {
            sender: "Sender name" ,
            subject: "Subject details" ,
            desc: "How to complete the course" ,
            time: "12:43 PM"
        },

        {
            sender: "Sender name" ,
            subject: "Subject details" ,
            desc: "How to complete the course" ,
            time: "12:43 PM"
        },

        {
            sender: "Sender name" ,
            subject: "Subject details" ,
            desc: "How to complete the course" ,
            time: "12:43 PM"
        },

        {
            sender: "Sender name" ,
            subject: "Subject details" ,
            desc: "How to complete the course" ,
            time: "12:43 PM"
        },



    ]);



    return (
        <div className="feed">

            <div className="feedHeader">
                <FeedOption
                Icon = {InboxIcon}
                title = "Primary"/>

                <FeedOption
                Icon = {LocalOfferOutlinedIcon}
                title = "Promotions"/>

                <FeedOption
                Icon = {PeopleAltOutlinedIcon}
                title = "Social"/>
            </div>

            <div className="feedBodyOptions">
                {
                    feeds.map(feed => (
                        <FeedBody
                        sender =  {feed.sender}
                        subject = {feed.subject}
                        desc =  {feed.desc}
                        time =  {feed.time}
                        />

                    ))
                }

            </div>

        </div>

    )
}