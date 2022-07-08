import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "space-around",
          marginTop: "10px",
          backgroundColor: "#1976d2",
          margin: 0,
          minHeight: "80px",
        }}
      >
        <Typography sx={{ minWidth: 100 }}>
          <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
            Home
          </Link>
        </Typography>
        <Typography sx={{ minWidth: 100 }}>
          <Link to="/tasks" style={{ textDecoration: "none", color: "#fff" }}>
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
        <MenuItem>
          <ListItemIcon></ListItemIcon>
          <LoginIcon sx={{ marginRight: "10px" }} />
          <Link to="/login" style={{ textDecoration: "none", color: "#000" }}>
            {" "}
            Sing in
          </Link>
        </MenuItem>
        <MenuItem>
          <ListItemIcon></ListItemIcon>
          <AppRegistrationIcon sx={{ marginRight: "10px" }} />
          <Link
            to="/registration"
            style={{ textDecoration: "none", color: "#000" }}
          >
            {" "}
            Sing up
          </Link>
        </MenuItem>
        <MenuItem>
          <ListItemIcon></ListItemIcon>
          <LogoutIcon sx={{ marginRight: "10px" }} />
          <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
            Logout
          </Link>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
