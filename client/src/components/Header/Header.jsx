import * as React from "react";
import {
  Box,
  Menu,
  MenuItem,
  Divider,
  Typography,
  Tooltip,
  useMediaQuery,
  Avatar,
  ListItemIcon,
  IconButton,
} from "@mui/material";

import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Header.css";
import { logoutUser } from "../../Redux/actions/user.action";

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const name = localStorage.getItem("name");
  const dispatch = useDispatch();

  const isActive = useMediaQuery("(max-width: 620px)");
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  function logout() {
    dispatch(logoutUser());
  }

  return (
    <React.Fragment>
      <Box
        sx={
          isActive
            ? {
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "flex-end",
                marginTop: "10px",
                backgroundColor: "#1976d2",
                margin: 0,
                minHeight: "80px",
                color: "#fff",
                textDecoration: "none",
                padding: "0 30px",
              }
            : {
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "flex-end",
                marginTop: "10px",
                backgroundColor: "#1976d2",
                margin: 0,
                minHeight: "80px",
                color: "#fff",
                textDecoration: "none",
                padding: "0 100px",
              }
        }
      >
        <Typography sx={{ minWidth: 100 }}>
          <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
            Home
          </Link>
        </Typography>
        <Typography sx={{ minWidth: 100 }}>
          <Link to="/tasks" style={{ color: "#fff", textDecoration: "none" }}>
            Tasks
          </Link>
        </Typography>

        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>
              <AccountCircleIcon />
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <Avatar />
          <Link to="/account" style={{ textDecoration: "none", color: "#000" }}>
            My account
          </Link>
        </MenuItem>
        <Divider />
        {!name ? (
          <>
            <MenuItem>
              <ListItemIcon></ListItemIcon>
              <LoginIcon sx={{ marginRight: "10px" }} />
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "#000" }}
              >
                Sing in
              </Link>
            </MenuItem>{" "}
            <MenuItem>
              <ListItemIcon></ListItemIcon>
              <AppRegistrationIcon sx={{ marginRight: "10px" }} />
              <Link
                to="/registration"
                style={{ textDecoration: "none", color: "#000" }}
              >
                Sing up
              </Link>
            </MenuItem>
          </>
        ) : (
          <MenuItem onClick={logout}>
            <ListItemIcon></ListItemIcon>
            <LogoutIcon sx={{ marginRight: "10px" }} />
            <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
              Logout
            </Link>
          </MenuItem>
        )}
      </Menu>
    </React.Fragment>
  );
}
