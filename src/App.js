import AllDeliveries from './Component/AllDeliveries';
import AddDelivery from './Component/AddDelivery';
 
 import EditDelivery from './Component/EditDelivery';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//.................LR.................................................
import { Link} from 'react-router-dom';
import { AppBar, Container, Toolbar ,Typography ,Button } from '@material-ui/core';

 
// ..................Vehicle.........................................
import AllVehicles from './Component/AllVehicles';
import AddVehicle from './Component/AddVehicle';
import UpdateVehicle from './Component/UpdateVehicle';
// ....................Flat..........................................
import AllFlatRents from './Component/AllFlatRents';
import AddFlatRent from './Component/AddFlatRent';
import EditFlatRent from './Component/EditFlatRent';
// ...................Visitor........................................
import AllVisitors from './Component/AllVisitors';
import AddVisitor from './Component/AddVisitor';
import UpdateVisitor from './Component/UpdateVisitor';
//.............................Home..............................
import About from './Component/About';
import Navigation from './Component/Navigation';
import Home from './Component/Home';
import Register from './Component/Register';
import Login from './Component/Login';
import Contact from './Component/Contact'; 
// ....................User.........................................
import AllUsers from './Component/AllUsers';
import AddUser from './Component/AddUser';
import Dropdown from './Component/Dropdown';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
        hero: {
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://180dc.org/wp-content/uploads/2017/08/ubc-website-background.png')`,
          height: "500px",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
           fontSize:"2rem"
      
         },
        

         })); 
      
      
        

function App() {
        const classes = useStyles();
  return ( 
    <BrowserRouter> 
    <Navigation/>
   
  <Switch >
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route path = '/login' component={Login} />
      <Route path = '/register' component={Register}/>
      <Route path = '/contact' component={Contact}/>
      
{/* ................................Delivery............................................... */}
        <Route exact path="/all" component={AllDeliveries} />
        <Route exact path="/add" component={AddDelivery} />
        <Route exact path="/edit/:id" component={EditDelivery} />
{/* ................................Vehicle................................................ */}
         <Route exact path="/allVehicle" component={AllVehicles} />
        <Route exact path="/addVehicle" component={AddVehicle} />
        <Route exact path="/update/:id" component={UpdateVehicle} />
{/* .................................Flat.................................................. */}
        <Route  path="/allFlat" component={AllFlatRents} />
        <Route  path="/addFlat" component={AddFlatRent} />
        <Route path="/alter/:id" component={EditFlatRent} />
{/* ..................................Visitor............................................. */}
        <Route exact path="/allVisitor" component={AllVisitors} />
        <Route exact path="/addVisitor" component={AddVisitor} />
        <Route exact path="/modify/:id" component={UpdateVisitor} />
{/* ....................................User............................................. */}
        <Route exact path="/allUser" component={AllUsers} />
        <Route exact path="/addUser" component={AddUser} />
{/* ....................................Dropdown........................................... */}
         <Route exact path="/dropdown" component={Dropdown} /> 
      
     <Container className={classes.hero}> 
       
                        <Link to="/register">
                           <Button style={{align:'center'}} color='black' > <b>REGISTER</b> </Button>
                        </Link>
                         <Link to="/login">
                            <Button style={{align:'center'}} color='black' > <b>LOGIN</b> </Button> 
                          </Link>
             
           </Container> 
          </Switch>
          
    </BrowserRouter>
   
   
  );
}

export default App;