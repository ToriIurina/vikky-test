import React from 'react';
import {AppBar, Button, IconButton, Menu, MenuItem, Toolbar} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import './Mobile-header.scss';
import {Login} from "@mui/icons-material";
import LogoMobile from '../../images/sletat-logo-white.svg';


const MobileHeader = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar className="header-mobile container" position="static">
      <Toolbar className="toolbar">
        <a className="logo" href="./">
          <img
            className="logo__img"
            src={LogoMobile}
            alt="Слетать.ру"
          />
        </a>
        <div className="tel">
          <IconButton
            id="mobile-menu-btn"
            size="small"
            aria-controls={open ? 'mobile-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon/>
          </IconButton>
          <Menu
            classes={{
              list: 'tel__menu',
            }}
            id="mobile-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'mobile-menu-btn',
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
            <MenuItem className="btn-type-item" onClick={handleClose}>
              <Button className="btn-login" startIcon={<Login/>}>
                Войти
              </Button>
            </MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export {MobileHeader};
