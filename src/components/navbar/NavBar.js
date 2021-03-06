import { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import {Box, Drawer, Toolbar, IconButton, InputBase, MenuItem, Menu, useMediaQuery, useTheme,  makeStyles } from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import StoreIcon from '@mui/icons-material/Store';
import CarWidget from '../carWidget/CarWidget';
import Sidebar from './Drawer'
import { Link } from "react-router-dom";
import {collection, getFirestore} from "firebase/firestore"
import CloseIcon from "@material-ui/icons/Close";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.1),
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
  color: 'secondary',
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

const StoreIconButton = styled('div')(() => ({
  color: 'secondary'
}));

const useStyles = makeStyles({
  searchIcon: {
    color: '#161412'
  }
})

export default function PrimarySearchAppBar() {
  const classes = useStyles()

  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

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
            placeholder="Search???"
          />
        </Search>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
         
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
      <AppBar style={{background: '#ffffff'}}>
        <Toolbar>
          <IconButton
            edge="start"
            color="secondary" 
          >
            <Sidebar/>
          </IconButton>
          <StoreIconButton color='secondary' style={{ marginLeft: 15 }}>
            <Link to={'/'} className={classes.link}>
              <StoreIcon style={{color: '#161412'}}/>
            </Link>
          </StoreIconButton>

          {isMatch ? <Drawer/>: (
            <Search>
                <SearchIconWrapper>
                  <SearchIcon className={classes.searchIcon} />
                </SearchIconWrapper>
                <StyledInputBase placeholder="Search???"/>
            </Search>
          )}
        
          <Box sx={{ flexGrow: 1 }}/>          
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Link to={`/cart`} className={classes.link}>
            <CarWidget/>
          </Link>
            <IconButton
              
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="secondary"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <Link to={`/cart`} className={classes.link}>
            <CarWidget/>
          </Link>
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
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
