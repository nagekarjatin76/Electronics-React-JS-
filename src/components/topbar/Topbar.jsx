import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.dribbble.com%2Fusers%2F829077%2Fscreenshots%2F4703019%2Fcomp_2.gif&f=1&nofb=1&ipt=116232867820443dfec7b99244d23240bfd7e75096281190b4d71b55452f04cc&ipo=images"   />
         
        
          
        </div>
        <span id="logo">Electronics</span>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F9f%2Fc2%2F12%2F9fc2126eec2c0a3876e3f2097af9b983.gif&f=1&nofb=1&ipt=7d6eb73ddf8fce63b61581e90c74f987eed43cdb30c15f4b630d34146028e8c1&ipo=images" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
