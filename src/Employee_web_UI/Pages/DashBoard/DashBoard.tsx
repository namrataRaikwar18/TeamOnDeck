import React from "react";
import {
  Box,
  Stack,
  Typography,
  Button,
  Avatar,
  AvatarGroup,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CalendarMonthOutlined } from "@mui/icons-material";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import { theme } from "../../../theme";
import { EmployeeLeaveModal } from "../../Components";
import { useLeaveModal } from "../../Context/leaveModalContext";
import { Container } from "../Container";

const DashBoard = () => {
  const classes = useStyles();
  const { leaveModal, setleaveModal } = useLeaveModal();

  const currentDate = new Date();
  type optionsType = {
    day: "numeric";
    month: "long";
    year: "numeric" | "2-digit";
  };
  const options: optionsType = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);
  
  //*****commented code will be use later */
  return (
    // <Box className={classes.dashboardBox} data-testid="dbbox">
    //   <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
    //   <Box className={classes.navPage}>
    //     <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
    <Container>
      <Box className={classes.pagebody}>
        <Stack className={classes.dbTop}>
          <Box>
            <Typography
              variant="h5"
              fontWeight={900}
              className={classes.welcomeMsg}
            >
              Welcome Vaibhav!
            </Typography>
            <Typography variant="subtitle1">
              Hello, Welcome to Team On Deck
            </Typography>
          </Box>
          <Box className={classes.dateTimeCheckBox}>
            <Box className={classes.dbFeat}>
              <CalendarMonthOutlined className="light_grey_color" />
              {formattedDate}
            </Box>
            <Box className={classes.dbFeat}>
              <AccessTimeOutlinedIcon className="light_grey_color" />
              00:00 Hours
            </Box>
            <Button
              variant="contained"
              className={`${classes.checkInbtn} btn`}
              data-testid="CheckInBtn"
            >
              Check In
            </Button>
          </Box>
        </Stack>
        <Box className={classes.leaveEventNotify}>
          <Box className={classes.leaveEvents}>
            <Box className={classes.eventHour}>
              <Box className={`${classes.workingHour} ${classes.hourLeave}`}>
                <Box>
                  <Typography variant="subtitle2">
                    Total Working Hours
                  </Typography>
                  <Typography variant="h5">15 Hours</Typography>
                </Box>
                <Typography className={classes.weeklyHour}>
                  WEEKLY HOURS
                </Typography>
              </Box>
              <Box className={`${classes.emleaves}  ${classes.hourLeave}`}>
                <Box className={classes.emleavesHead}>
                  <Typography>On Leave</Typography>
                  <Typography
                    variant="subtitle2"
                    className="light_grey_color cursorPointer"
                    data-testid="employeeLeave"
                    onClick={() => setleaveModal(true)}
                  >
                    5 Employees on leave
                  </Typography>
                </Box>
                <AvatarGroup
                  variant="square"
                  spacing={1}
                  sx={{ borderRadius: "0" }}
                  className={classes.avatarGrp}
                >
                  <Avatar className={classes.avatar}></Avatar>
                  <Avatar className={classes.avatar}></Avatar>
                  <Box className={`${classes.moreLeave} ${classes.avatar}`}>
                    +2
                  </Box>
                </AvatarGroup>
              </Box>
            </Box>
            <Box className={classes.upcomingEvents}>
              <Box className={classes.eachupcomingEvent}>
                <Typography
                  variant="h6"
                  className={`${classes.upcomingDates} fontWeight`}
                >
                  Upcoming holiday
                </Typography>
                <Box className={classes.eachUpcomingdate}>
                  <Box className={classes.dayDate}>
                    <Avatar
                      className={`${classes.avatar} ${classes.monthAvatar}`}
                    >
                      Aug
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle2" className={`fontWeight`}>
                        Independence Day
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        className={`light_grey_color`}
                      >
                        Tuesday, Aug 15, 2023
                      </Typography>
                    </Box>
                  </Box>
                  <Typography
                    variant="subtitle2"
                    className={`light_grey_color`}
                  >
                    120 days left
                  </Typography>
                </Box>
              </Box>
              <Box className={classes.eachupcomingEvent}>
                <Typography
                  variant="h6"
                  className={`${classes.upcomingDates} fontWeight`}
                >
                  Upcoming Birthdays
                </Typography>
                <Box className={classes.eachUpcomingdate}>
                  <Box className={classes.dayDate}>
                    <Avatar className={`${classes.avatar}`}></Avatar>
                    <Box>
                      <Typography variant="subtitle2" className={`fontWeight`}>
                        Neelam Dhami
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        className={`light_grey_color`}
                      >
                        April 15
                      </Typography>
                    </Box>
                  </Box>
                  <Typography
                    variant="subtitle2"
                    className={`light_grey_color`}
                  >
                    7 days left
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className={` ${classes.notificationBox}`}>
            <Typography
              variant="h6"
              className={`${classes.upcomingDates} fontWeight`}
            >
              Notifications
            </Typography>
            <Box>
              <Box className={classes.dayDate}>
                <Avatar className={`${classes.avatar}`}></Avatar>
                <Box>
                  <Typography variant="subtitle2" className={`fontWeight`}>
                    Lorem Ipsum
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    className={`light_grey_color`}
                  >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Cumque, modi necessitatibus
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {leaveModal ? <EmployeeLeaveModal /> : null}
    </Container>
    //</Box>
    // </Box>
  );
};

export const useStyles = makeStyles(() => ({
  dashboardBox: {
    display: "flex",
  },
  navPage: {
    width: "100%",
    backgroundColor: "#F5F6FA",
  },
  pagebody: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    padding: "2.5rem",
  },

  dbFeat: {
    display: "flex",
    justifyContent: "center",
    gap: "5px",
    alignItems: "center",
    backgroundColor: "white",
    height: "4.2rem",
    padding: "1rem",
    borderRadius: "5px",
  },
  checkInbtn: {
    width: "14rem",
    height: "4.2rem",
  },
  dateTimeCheckBox: {
    display: "flex",
    alignItems: "center",
    gap: "1.2rem",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
    },
    [theme.breakpoints.down("lg")]: {
      gap: "1rem",
    },
  },
  dbTop: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  hourLeave: {
    backgroundColor: "white",
    padding: "5px",
    borderRadius: "5px",
  },
  workingHour: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    justifyContent: "space-between",
    width: "fit-content",
  },

  emleaves: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  emleavesHead: {
    display: "flex",
    gap: "2rem",
    justifyContent: "space-between",
  },
  weeklyHour: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "4.1rem",
    height: "4.1rem",
    fontSize: "5px",
    padding: "1.5rem",
    borderRadius: "50%",
    textAlign: "center",
    background:
      "radial-gradient(closest-side, white 79%, transparent 80% 100%),conic-gradient( #16C098 15%,  #C4C4C4 0)",
  },
  eventHour: {
    display: "flex",
    justifyContent: "space-between",
    gap: "2.2rem",
  },
  moreLeave: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#A29EB6",
  },
  avatarGrp: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: "9px",
  },
  avatar: {
    borderRadius: "5px",
    width: "3.6rem",
    height: "3.6rem",
  },

  monthAvatar: {
    fontSize: "12px",
  },
  eachUpcomingdate: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dayDate: {
    display: "flex",
    gap: "10px",
  },

  upcomingEvents: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    justifyContent: "space-between",
  },
  eachupcomingEvent: {
    display: "flex",
    gap: "0.8rem",
    flexDirection: "column",
    padding: "1rem",
    borderRadius: "5px",
    backgroundColor: "white",
  },

  leaveEvents: {
    display: "flex",
    gap: "2.2rem",
    flexDirection: "column",
  },

  leaveEventNotify: {
    display: "flex",
    justifyContent: "space-between",
    gap: "2.2rem",
  },

  notificationBox: {
    display: "flex",
    gap: "0.8rem",
    flexDirection: "column",
    backgroundColor: "white",
    padding: "1.5rem",
    borderRadius: "5px",
  },
  [theme.breakpoints.down("md")]: {
    pagebody: {
      padding: "1.2rem",
    },
    dbFeat: {
      padding: "3px 1px 3px 1px",
    },
    dateTimeCheckBox: {
      gap: "5px",
    },
    hourLeave: {
      width: "100%",
    },
  },
  [theme.breakpoints.up("md")]: {
    hourLeave: {
      width: "32rem",
      padding: "1.5rem",
    },
    weeklyHour: {
      width: "5rem",
      height: "5rem",
      fontSize: "9px",
      padding: "3rem",
      borderRadius: "50%",
      borderWidth: "5px",
    },
    avatar: {
      width: "3.8rem",
      height: "3.8rem",
    },
    upcomingEvents: {
      flexDirection: "row",
    },
    eachupcomingEvent: {
      width: "32rem",
      padding: "1.5rem",
    },
  },
  [theme.breakpoints.down("sm")]: {
    dbFeat: {
      width: "14rem",
      height: "4.2rem",
    },
    checkInbtn: {
      width: "14rem",
      height: "4.2rem",
    },
    upcomingDates: {
      fontSize: "13px",
    },
    leaveEventNotify: {
      flexDirection: "column",
    },
  },
}));

export { DashBoard };
