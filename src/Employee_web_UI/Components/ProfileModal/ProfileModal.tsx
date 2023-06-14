import React from "react";
import { Box, List, ListItem, ListItemText } from "@mui/material";
import { makeStyles } from "@mui/styles";

const ProfileModal = () => {
  const classes = useStyles();

  return (
    <Box>
      <List className={classes.profileModal}>
        <ListItem className={classes.list}>
          <ListItemText
            primary="Change Password"
            data-testid="changePassword"
          />
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Box>
  );
};

const useStyles = makeStyles(() => ({
  profileModal: {
    position: "absolute",
    width: "18rem",
    top: "6rem",
    right: "2px",
    height: "10rem",
    backgroundColor: "white",
    borderRadius: "5px",
    boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1);",
    cursor: "pointer",
    border: "2px solid #ECEEF7",
    zIndex: "1",
  },

  list: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
}));

export { ProfileModal };
