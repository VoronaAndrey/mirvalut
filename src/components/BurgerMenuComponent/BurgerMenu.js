import React, { useState } from "react";
import styled from "@mui/material/styles/styled";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Popover from "@mui/material/Popover";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const MainWrapper = styled("div")(({ theme }) => ({
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

const MenuWrapper = styled("div")(({ theme }) => ({
  display: "flex",
}));

const BurgerMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <MainWrapper>
        <MenuWrapper>
          <IconButton
            aria-describedby={id}
            onClick={handleClick}
            sx={{ ml: "auto" }}
          >
            {open ? (
              <CloseIcon sx={{ width: 51, height: 51, color: "#414141" }} />
            ) : (
              <MenuIcon
                sx={{
                  width: 51,
                  height: 51,
                  color: "#414141",
                }}
              />
            )}
          </IconButton>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <List sx={{ py: 2 }}>
              <ListItem button onClick={handleClose}>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button onClick={handleClose}>
                <ListItemText primary="About" />
              </ListItem>
              <ListItem button onClick={handleClose}>
                <ListItemText primary="Contact" />
              </ListItem>
            </List>
          </Popover>
        </MenuWrapper>
      </MainWrapper>
    </>
  );
};

export default BurgerMenu;
