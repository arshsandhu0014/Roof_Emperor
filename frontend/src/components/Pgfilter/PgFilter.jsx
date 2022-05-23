import React, { useState } from "react";
import "./pgFilter.css";
import "../filterModal/FilterModal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import Popover from "@mui/material/Popover";
import { Slider } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

const keywords = ["Price", "Standard", "Distance"];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "1px solid #777",
  boxShadow: 24,
  p: 4,
};

const PgFilter = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const [activeElement, setActiveElement] = useState("Price");
  const [radius, setRadius] = useState(0);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      {/* <div className='categoriesBar'>
        {keywords.map((value, i) => (
          <span
            // onClick={handleOpen}
            onClick={handleClick}
            aria-describedby={id}
            key={i}
            id='PopoverLegacy'
            className={activeElement === value ? "active span" : "span"}
          >
            {value}
          </span>
        ))}
      </div>

      <div>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Typography sx={{ p: 2 }}>
            Search PGs within a radius
            <Slider
              size='small'
              defaultValue={0}
              onChange={(e) => setRadius(e.target.value)}
              aria-label='Small'
              valueLabelDisplay='auto'
            />
          </Typography>
        </Popover>
      </div> */}
      <div className='categoriesBar'>
        {keywords.map((value, i) => (
          <span
            // onClick={handleOpen}
            onClick={handleClick}
            aria-describedby={id}
            // id='basic-button'
            aria-controls='basic-menu'
            aria-haspopup='true'
            key={i}
            id='PopoverLegacy'
            className={activeElement === value ? "active span" : "span"}
          >
            {value}
          </span>
        ))}
      </div>

      <div>
        <Menu
          id='basic-menu'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem style={{ fontSize: "1.6rem" }} onClick={handleClose}>
            Standard
          </MenuItem>
          <MenuItem style={{ fontSize: "1.6rem" }} onClick={handleClose}>
            Premium
          </MenuItem>
          <MenuItem style={{ fontSize: "1.6rem" }} onClick={handleClose}>
            Deluxe
          </MenuItem>
        </Menu>
      </div>
    </>
  );
};

export default PgFilter;
