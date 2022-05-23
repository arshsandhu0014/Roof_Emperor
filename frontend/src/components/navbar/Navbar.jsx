import "./navbar.css";
import House from "../../assets/house.svg";
import Search from "../../assets/search.svg";
import { Link } from "react-router-dom";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Youtube from "../../assets/youtube.svg";
import Facebook from "../../assets/facebook.svg";
import Whatsapp from "../../assets/whatsapp.svg";
import Instagram from "../../assets/instagram.svg";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Navbar = ({ currentUser, login }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className='navbar-main'>
      <Link to='/'>
        <div className='logo'>
          <img src={House} alt='house' />
          <h1 className='title'>ROOF EMPEROR</h1>
        </div>
      </Link>
      <ul>
        <Link to='/about'>{!login && <li>About Us</li>}</Link>

        {!login && (
          <li>
            <p
              id='basic-button'
              aria-controls='basic-menu'
              aria-haspopup='true'
              aria-expanded={open ? "true" : undefined}
              onMouseOver={handleClick}
            >
              Wishlist
            </p>
          </li>
        )}

        <Menu
          id='basic-menu'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>
            <div>
              <img src={Youtube} alt='' />
              <p>Youtube</p>
            </div>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <div>
              <img src={Whatsapp} alt='' />
              <p>WhatsApp</p>
            </div>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <div>
              <img src={Facebook} alt='' />
              <p>Facebook</p>
            </div>
          </MenuItem>
        </Menu>

        {!login && (
          <li className='search-container'>
            <div className='search-box'>
              <input
                type='text'
                className='search-input'
                placeholder='Search..'
              />
              <button className='search-button'>
                <img src={Search} alt='Search Button' />
              </button>
            </div>
          </li>
        )}
        {currentUser ? (
          <li>Signout</li>
        ) : (
          <li>{!login && <Link to='/login'>Login</Link>}</li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
