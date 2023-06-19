import React, { useState } from "react";
import { Box } from "@mui/material";
import { Sidebar, Navbar } from "../Components";
import { useStyles } from "./DashBoard/DashBoard";

type ContainerType = {
  children: React.ReactNode;
};

const Container = (props: ContainerType) => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const dashboardClasses = useStyles();

  return (
    <Box className={dashboardClasses.dashboardBox} data-testid="dbbox">
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <Box className={dashboardClasses.navPage}>
        <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        {props.children}
      </Box>
    </Box>
  );
};

export { Container };
