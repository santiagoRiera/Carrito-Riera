import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    link: {
        color: '#161412',
        textDecoration: "none",
        fontFamily: "Arial",
        
    },
    listItem: {
        marginTop: '5px',
        marginBottom: '5px',
        '&:hover': {
            background: '#ddd9d6'
         },
    },
    listItemHome: {
        fontSize: '25px'
    }
  })

export default function Sidebar() {
    const classes = useStyles()
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link to={`/`} className={classes.link}>
            <ListItem className={classes.listItemHome} divider>Home</ListItem>
            
        </Link>
        <Link to={`/category/Jordan`} className={classes.link}>
            <ListItem className={classes.listItem} divider>Jordan</ListItem>
            
        </Link>
        <Link to={`/category/Basketball`} className={classes.link}>
            <ListItem className={classes.listItem} divider>Basketball</ListItem>
        </Link>
        <Link to={`/category/Lifestyle`} className={classes.link}>
            <ListItem className={classes.listItem} divider>Lifestyle</ListItem>
        </Link>
        <Link to={`/category/Running`} className={classes.link}>
            <ListItem className={classes.listItem} divider>Running</ListItem>
        </Link>
        <Link to={`/category/Walking`} className={classes.link}>
            <ListItem className={classes.listItem} divider>Walking</ListItem>
        </Link>
      </List>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuIcon onClick={toggleDrawer(anchor, true)}>{anchor}</MenuIcon>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
