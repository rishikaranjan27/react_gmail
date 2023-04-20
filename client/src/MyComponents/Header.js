import React from "react";
import "./Header.css";

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

export const Header = () => {
    return (
        <div className="header">

            <div className="header-left">
                <MenuIcon/>
                <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png"
                alt = "gmail-logo"/>
                <h3>Gmail</h3>
            </div>

            <div className="header-search">
                <SearchIcon/>
                <input type = "text" placeholder="Search mail"/>
                <TuneIcon className="filterIcon"/>
            </div>

            <div className="header-right">
                <HelpOutlineIcon/>
                <SettingsOutlinedIcon/>
                <AppsOutlinedIcon/>
                <AccountCircleOutlinedIcon/>
            </div>

        </div>
    )
}