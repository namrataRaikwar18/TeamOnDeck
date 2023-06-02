import React from "react";
import "./Sidebar.css";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LaunchOutlinedIcon from "@mui/icons-material/LaunchOutlined";
import { Box } from "@mui/material";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";

type SidebarPropsType = {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar = ({ showSidebar, setShowSidebar }: SidebarPropsType) => {
  return (
    <Box>
      <div className={`sidebar ${showSidebar ? "showSidebar" : "hideSidebar"}`}>
        {/* <img
          className="logo cursorPointer"
          src="https://tracker.builder.ai/assets/images/trackerLogo.png"
          alt="logo"
          onClick={() => navigate("/home")}
        /> */}
        <h3 className="logo cursorPointer">Team on Deck</h3>
        <p className="divider"></p>
        <div className="sidebarMiddlePart">
          <div className="projectDiv">
            <div className=" signalProject">
              <div>
                <p>MENU</p>
              </div>
            </div>
            <ul className="sidebarList light_grey_color">
              <li className="eachSidebarList">
                <DashboardOutlinedIcon />
                Dashboard
              </li>
              <li className="eachSidebarList">
                <CalendarMonthOutlinedIcon />
                Attendance
              </li>
              <li className="eachSidebarList">
                <LaunchOutlinedIcon />
                Leaves
              </li>
              <li className="eachSidebarList">
                <AccountBoxOutlinedIcon />
                Profile
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Box>
  );
};

export { Sidebar };
