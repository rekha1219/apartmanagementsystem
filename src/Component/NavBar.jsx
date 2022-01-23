import { AppBar, Toolbar, makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const useStyle = makeStyles((theme) => ({
    header: {
        background: '#0000ffff',
        flexGrow: 1,
    },
   
    menuButton: {
        marginRight: theme.spacing(2),
      },
}));

const NavBar = () => {
    const classes = useStyle();
    return (
      <div>
  {/* ................................Delivery............................................... */}              
               <NavLink  className={classes.menuButton}  to="add" exact>Add Delivery</NavLink>
                <NavLink  className={classes.menuButton}  to="all" exact>All Deliveries</NavLink>
 {/* ................................Vehicle................................................ */}
                <NavLink  className={classes.menuButton}  to="allVehicle" exact>All Vehicles</NavLink>
                <NavLink  className={classes.menuButton}  to="addVehicle" exact>Add Vehicle</NavLink> 
 {/* .................................Flat.................................................. */}              
               <NavLink  className={classes.menuButton}  to="addFlat" exact>Add Flat</NavLink>
                <NavLink  className={classes.menuButton}  to="allFlat" exact>All Flats </NavLink> 
  {/* ..................................Visitor............................................. */}
                 <NavLink  className={classes.menuButton}  to="addVisitor" exact>Add Visitors</NavLink>
                <NavLink className={classes.tabs} to="allVisitor" exact>All Visitors</NavLink>  
                 
           
                </div>
       
    )
}

export default NavBar;