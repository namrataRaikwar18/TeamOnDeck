import React, { useState } from "react";
import { Box, Stack } from "@mui/material";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { Navbar } from "../../Components/Navbar/Navbar";

const DashBoard = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  return (
    <div className="dashboardDiv">
      <Stack direction="row">
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      </Stack>
      <Box></Box>
    </div>
  );
};

export { DashBoard };
