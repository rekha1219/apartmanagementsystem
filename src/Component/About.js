import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff"
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://mediacdn.99acres.com/media1/15539/4/310784534M-1628168152999.jpg')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "20",

   },
  
  media: {
    height: 240
    },
   })); 

function About() {
  const classes = useStyles();

  return (
    <div className="About">
      {/* <AppBar className={classes.appBar} position="static">
        
      </AppBar> */}
      <Box className={classes.hero}>
        <Box>Apartment management software are tools that make routine tasks such as tracking and storing information.<br></br>
            Common features in apartment management software include FlatRent Management,Delivery Management,Vehicle and Visitor Management.</Box>
      </Box>
     
              
        
    </div>
  );
}

export default About;