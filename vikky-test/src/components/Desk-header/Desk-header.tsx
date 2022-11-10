import Logo from "../../images/sletat-logo.svg";
import {Button, Menu, MenuItem} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {Login} from "@mui/icons-material";
import React from "react";
import './Desk-header.scss';

const DeskHeader = () => {
  
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <header className="header container">
      <a className="logo" href="./">
        <img
          className="logo__img"
          src={Logo}
          alt="Слетать.ру"
        />
      </a>
      <section className="header__options">
        <div className="tel">
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon/>}
          >
            8 (812) 309-26-66
          </Button>
          <Menu
            classes={{
              list: 'tel__menu',
            }}
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}>
              <a className="tel__menu-item" href="tel:8 (812) 309-26-66">
                8 (812) 309-26-66
              </a>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <a className="tel__menu-item" href="tel:8 (812) 309-26-88">
                8 (812) 309-26-88
              </a>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <a className="tel__menu-item" href="tel:8 (812) 309-26-99">
                8 (812) 309-26-99
              </a>
            </MenuItem>
          </Menu>
        </div>
        <Button className="btn-login" startIcon={<Login/>}>
          Войти
        </Button>
      </section>
    </header>
  );
}

export {DeskHeader};
