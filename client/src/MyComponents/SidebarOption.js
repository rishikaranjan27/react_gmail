import React from "react"
import "./Sidebar.css";


export const SidebarOption = ({Icon, title}) => {
    return (
        <div className="sidebarOption">
            <Icon />
            <p>{title}</p>
        </div>
    )
}