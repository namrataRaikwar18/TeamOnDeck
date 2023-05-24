import React, {useState} from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./Navbar.css";
import { Box, TextField, Stack, Avatar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ProfileModal } from "../ProfileModal/ProfileModal";

const useStyles = makeStyles(() => ({
  textField: {
    border: "none",
    height: "50px",
    width: "28rem",
  },
}));

type NavbarPropsType = {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ({ showSidebar, setShowSidebar }: NavbarPropsType) => {
  const [profileModal, setProfileModal] = useState<Boolean>(false)
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        className="navApp light_grey_color"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "2rem",
          flexDirection: "row",
        }}
      >
        <Toolbar className="toolbar">
          <IconButton
            size="large"
            edge="start"
            data-testid="menuButton"
            color="inherit"
            aria-label="open drawer"
            sx={{ display: { md: "none" } }}
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <MenuIcon className="icon" style={{ color: "#643FDB" }} />
          </IconButton>
          <Stack
            className="searchBar"
            direction="row"
            alignItems="center"
            spacing={1}
          >
            <SearchOutlinedIcon className="icon" />
            <TextField
              sx={{ border: "none", outline: "none" }}
              placeholder="Search for employee"
              InputProps={{
                classes: {
                  notchedOutline: classes.textField,
                },
              }}
            ></TextField>
          </Stack>
        </Toolbar>
        <Box className="navProfile cursorPointer" data-testid="navProfile" onClick={() => setProfileModal(!profileModal)}>
          <Avatar
            alt="profile"
            src="/Assets/userProfile.jpg"
            sx={{
              width: { xs: 27, md: 35 },
              height: { xs: 27, md: 35 },
              borderRadius: "0",
            }}
          />
          <Typography
            variant="subtitle1"
            className="userName"
            sx={{ display: { xs: "none", sm: "block" } }}
            data-testid="userName"
          >
            Vaibhav Shukla
          </Typography>
        </Box>
      </AppBar>
          {profileModal ? <ProfileModal /> : null}
    </Box>
  );
};

export { Navbar };