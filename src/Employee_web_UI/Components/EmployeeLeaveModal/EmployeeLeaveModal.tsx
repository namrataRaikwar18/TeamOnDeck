import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useStyles } from "../../Pages/DashBoard/DashBoard";
import { useLeaveModal } from "../../Context/leaveModalContext";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const EmployeeLeaveModal = () => {
  const classes = useStylesLeave();
  const dashboardClasses = useStyles();
  const { setleaveModal } = useLeaveModal();
  return (
    <Box
      className={classes.backDrop}
      onClick={() => setleaveModal(false)}
      data-testid="leaveModalBackdrop"
    >
      <Box
        className={classes.leaveModal}
        onClick={(e) => e.stopPropagation()}
        data-testid="leaveModal"
      >
        <Box className={classes.headCrossIcon}>
          <Typography
            variant="h6"
            className="fontWeight"
            data-testid="leaveModalEmployee"
          >
            Employees on leave
          </Typography>
          <CloseOutlinedIcon
            data-testid="closeBtn"
            className="icon cursorPointer"
            onClick={() => setleaveModal(false)}
          />
        </Box>
        <Box className={classes.eachEmployee}>
          <Avatar className={dashboardClasses.avatar}></Avatar>
          <Box className={classes.nameAvatar}>
            <Typography
              variant="subtitle2"
              data-testid="employeeName"
              className={`fontWeight`}
            >
              Neelam Dhami
            </Typography>
            <Typography variant="subtitle2" className={`light_grey_color`}>
              April 15, 2023
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const useStylesLeave = makeStyles(() => ({
  backDrop: {
    width: "100%",
    height: "100%",
    position: "fixed",
    overflowY: "hidden",
    zIndex: "5",
    backgroundColor: "rgba(28, 18, 67, 0.61)",
  },
  leaveModal: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    top: "50%",
    position: "absolute",
    left: "50%",
    backgroundColor: "white",
    transform: "translate(-50%, -50%)",
    padding: "1rem",
    width: "35rem",
    borderRadius: "5px",
  },

  eachEmployee: {
    display: "flex",
    gap: "10px",
    justifyContex: "space-between",
    width: "100%",
    alignItems: "center",
  },
  nameAvatar: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  },
  headCrossIcon: {
    display: "flex",
    gap: "4rem",
    justifyContent: "space-between",
    paddingBottom: "1rem",
    // border:"1px solid green",
  },
}));

export { EmployeeLeaveModal };
