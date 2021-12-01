import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import {Box, Drawer, Toolbar, IconButton, InputBase, MenuItem, Menu, useMediaQuery, useTheme,  makeStyles } from '@material-ui/core';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import StoreIcon from '@mui/icons-material/Store';
import CarWidget from '../carWidget/CarWidget';
import { Link } from "react-router-dom";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 1),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const StoreIconButton = styled('div')(({ theme }) => ({
  color: alpha(theme.palette.common.white)
}));

const useStyles = makeStyles({
  link: {
    color: 'white',
    textDecoration: "none",
}
})

export default function PrimarySearchAppBar({color}) {
  const classes = useStyles()

  const [anchorel1, setAnchorel1] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuListOpen = Boolean(anchorel1);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMenuListOpen = (event) => {
    setAnchorel1(event.currentTarget);
  }
  const handleMenuListClose = () => {
    setAnchorel1(null);
    //handleMobileMenuClose();
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const themeNavBar = useTheme()

  const isMatch = useMediaQuery(themeNavBar.breakpoints.down('sm'))

  const menuListId = 'primary-search-menu-list';
  const renderMenuList = (
    <Menu
      anchorel1={anchorel1}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      id={menuListId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      open={isMenuListOpen}
      onClose={handleMenuListClose}
    >
      <MenuItem onClick={handleMenuListClose}>Jordan</MenuItem>
      <MenuItem onClick={handleMenuListClose}>Lifestyle</MenuItem>
      <MenuItem onClick={handleMenuListClose}>Running</MenuItem>
    </Menu>
  );

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Search>
          <SearchIconWrapper >
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
          />
        </Search>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="Account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
    
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color='secondary'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            aria-controls={menuListId}
            aria-haspopup="true"
            onClick={handleMenuListOpen}
            sx={{ mr: 1 }}  
          >
            <MenuIcon/>
          </IconButton>
          <StoreIconButton style={{ marginLeft: 15 }}>
            <Link to={'/'} className={classes.link}>
              <StoreIcon/>
            </Link>
          </StoreIconButton>

          {isMatch ? <Drawer/>: (
            <Search>
            <SearchIconWrapper >
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase 
              placeholder="Search…"
            />
          </Search>
          )}
        
         {/*  <Link to={'/category/Jordan'} className={classes.link}>
            <h5>Jordan - </h5>
          </Link>
          <Link to={'/category/Lifestyle'} className={classes.link}>
          <h5> Lifestyle - </h5>
          </Link>
          <Link to={'/category/Running'} className={classes.link}>
          <h5> Running</h5>
          </Link> */}
          <Box sx={{ flexGrow: 1 }}/>          
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <CarWidget/>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <CarWidget/>
            <IconButton
             
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}

            >
              <MoreIcon position='fixed'/>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenuList}
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
