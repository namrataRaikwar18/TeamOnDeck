import React, { useState } from "react";
import { Box } from "@mui/material";
import { Sidebar, Navbar, EmployeeLeaveModal } from "../Components";
import { useLeaveModal } from "../Context/leaveModalContext";

type ContainerType = {
  children: React.ReactNode;
};

const Container = (props: ContainerType) => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const { leaveModal } = useLeaveModal();

  return (
    <Box className="dashboardBox" data-testid="dbbox">
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <Box className="navPage">
        <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        {props.children}
      </Box>
      {leaveModal ? <EmployeeLeaveModal /> : null}
    </Box>
  );
};

export { Container };
