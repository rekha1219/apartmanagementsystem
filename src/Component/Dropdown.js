import { makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const useStyle = makeStyles(() => ({
    header: {
        background: '#0000ffff',
        flexGrow: 1,
    },

    hero: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://is1-3.housingcdn.com/4f2250e8/bb753c4830785e3b0269b007499f2710/v0/fs/residential_plot-for-sale-kankaria-Ahmedabad-elevation.jpeg')`,
        height: "500px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
         fontSize:"2rem",
         color:"#fff"
    
       },
   
    menuButton: {
        justifyContent: "center",
      },
}));

const Dropdown = () => {
    const classes = useStyle();
    return (
      <div className={classes.hero}>
          <ul>
  {/* ................................Delivery............................................... */} 
             <li><NavLink  className={classes.menuButton} style={{color:'skyblue'}} to="add" exact>Add Delivery</NavLink>  </li>           
             <li>  <NavLink  className={classes.menuButton} style={{color:'skyblue'}} to="all" exact>All Deliveries</NavLink></li> 
 {/* ................................Vehicle................................................ */}
              <li> <NavLink  className={classes.menuButton} style={{color:'skyblue'}} to="addVehicle" exact>Add Vehicle</NavLink></li>
               <li> <NavLink  className={classes.menuButton} style={{color:'skyblue'}} to="allVehicle" exact>All Vehicles</NavLink></li>
                
 {/* .................................Flat.................................................. */}              
               <li><NavLink  className={classes.menuButton} style={{color:'skyblue'}} to="addFlat" exact>Add Flat</NavLink></li>
                <li> <NavLink  className={classes.menuButton} style={{color:'skyblue'}} to="allFlat" exact>All Flats </NavLink> </li>
  {/* ..................................Visitor............................................. */}
                 <li><NavLink  className={classes.menuButton} style={{color:'skyblue'}}  to="addVisitor" exact>Add Visitors</NavLink></li>
                    <li> <NavLink className={classes.tabs} style={{color:'skyblue'}} to="allVisitor" exact>All Visitors</NavLink> </li>
   
   {/* ..................................User............................................. */}
   <li><NavLink  className={classes.menuButton} style={{color:'skyblue'}}  to="addUser" exact>Add User</NavLink></li>
                    <li> <NavLink className={classes.tabs} style={{color:'skyblue'}} to="allUser" exact>All Users</NavLink> </li>

           </ul>      
       
      </div>
       
    )
}

export default Dropdown;