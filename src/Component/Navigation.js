import {  makeStyles, Toolbar, Typography } from '@material-ui/core';
import { AppBar } from '@mui/material';
import { typography } from '@mui/system';
import react from 'react';
import { NavLink } from 'react-router-dom';


const useStyle = makeStyles({
  header: {
      background: 'red',
      // fontSize: 20
  },
  tabs: {
      color: '#ffffff',
      marginLeft: 90,
  
      textDecoration: 'none',
      fontSize: 20
  },
  typography:{
    color:'#000000',
    fontSize: 20
  }

})
function Navigation() {
  const classes = useStyle();
  return (
    <div>
    <AppBar position="static" className={classes.header}>
            <Toolbar>
              <Typography>APARTMENT MANAGEMENT SYSTEM</Typography>
                <NavLink className={classes.tabs} to="/" exact>Home</NavLink>
                <NavLink className={classes.tabs} to="/about" exact>About</NavLink>
                <NavLink className={classes.tabs} to="/contact" exact>Contact </NavLink>
                <NavLink className={classes.tabs} to="/userlogin " exact>User</NavLink>
                <NavLink className={classes.tabs} to="/adminlogin " exact>Admin</NavLink>
                
                     
            </Toolbar>
            
        </AppBar>

  </div>
  )
  }

  export default Navigation;



