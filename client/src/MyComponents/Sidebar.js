import React from "react";
import {SidebarOption} from  "./SidebarOption";
import "./Sidebar.css";

import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import InboxIcon from '@mui/icons-material/Inbox';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

export const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarButton">
                <CreateOutlinedIcon className="composeIcon"/>
                <button type="submit" className="composeButton">Compose</button>
            </div>

            <SidebarOption
            Icon = {InboxIcon}
            title = "Inbox"/>

            <SidebarOption
            Icon = {StarBorderIcon}
            title = "Starred"/>

            <SidebarOption
            Icon = {AccessTimeIcon}
            title = "Snoozed"/>

            <SidebarOption
            Icon = {LabelOutlinedIcon}
            title = "Important"/>

            <SidebarOption
            Icon = {SendOutlinedIcon}
            title = "Sent"/>

        </div>
    )
}